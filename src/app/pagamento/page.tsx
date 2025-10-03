'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Brain, CreditCard, Shield, CheckCircle, ArrowLeft, Loader2 } from 'lucide-react';
import { getSession } from '@/lib/session';

export default function PagamentoPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'mbway'>('card');
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    mbwayPhone: '',
    email: ''
  });

  useEffect(() => {
    const session = getSession();
    if (!session || !session.completed) {
      router.push('/teste');
    }
  }, [router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    setFormData(prev => ({ ...prev, cardNumber: formatted }));
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatExpiryDate(e.target.value);
    setFormData(prev => ({ ...prev, expiryDate: formatted }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Redirect to success page (in a real app, this would be handled by the payment processor)
    router.push('/pagamento/sucesso');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Brain className="h-6 w-6 text-blue-600" />
              <span className="text-lg font-semibold text-slate-900">QI Professional</span>
            </div>
            <Link 
              href="/resultados"
              className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Voltar</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Resumo do Pedido</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Brain className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900">Resultados do Teste de QI</h3>
                  <p className="text-sm text-slate-600">Acesso completo aos seus resultados</p>
                </div>
                <div className="text-lg font-bold text-slate-900">€1,00</div>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-4">
              <div className="flex justify-between items-center text-lg font-bold text-slate-900">
                <span>Total</span>
                <span>€1,00</span>
              </div>
            </div>

            {/* Features Included */}
            <div className="mt-8">
              <h3 className="font-semibold text-slate-900 mb-4">Incluído no seu acesso:</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-slate-600">Pontuação de QI oficial</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-slate-600">Análise detalhada por categoria</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-slate-600">Identificação de pontos fortes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-slate-600">Recomendações personalizadas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-slate-600">Acesso imediato e permanente</span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Informações de Pagamento</h2>

            {/* Payment Method Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-3">
                Método de Pagamento
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-4 border-2 rounded-lg text-center transition-colors ${
                    paymentMethod === 'card'
                      ? 'border-blue-600 bg-blue-50 text-blue-900'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <CreditCard className="h-6 w-6 mx-auto mb-2" />
                  <span className="text-sm font-medium">Cartão</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('mbway')}
                  className={`p-4 border-2 rounded-lg text-center transition-colors ${
                    paymentMethod === 'mbway'
                      ? 'border-blue-600 bg-blue-50 text-blue-900'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="h-6 w-6 mx-auto mb-2 bg-slate-400 rounded"></div>
                  <span className="text-sm font-medium">MB WAY</span>
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {paymentMethod === 'card' ? (
                <>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Número do Cartão
                    </label>
                    <input
                      type="text"
                      value={formData.cardNumber}
                      onChange={handleCardNumberChange}
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Validade
                      </label>
                      <input
                        type="text"
                        value={formData.expiryDate}
                        onChange={handleExpiryChange}
                        placeholder="MM/AA"
                        maxLength={5}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        placeholder="123"
                        maxLength={4}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Nome no Cartão
                    </label>
                    <input
                      type="text"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      placeholder="João Silva"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      required
                    />
                  </div>
                </>
              ) : (
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Número de Telemóvel
                  </label>
                  <input
                    type="tel"
                    name="mbwayPhone"
                    value={formData.mbwayPhone}
                    onChange={handleInputChange}
                    placeholder="+351 912 345 678"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    required
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email para Recibo
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>

              {/* Security Notice */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="text-sm font-medium text-green-900">Pagamento Seguro</p>
                    <p className="text-xs text-green-700">
                      Seus dados são protegidos com criptografia SSL de 256 bits
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Processando...</span>
                  </>
                ) : (
                  <>
                    <CreditCard className="h-5 w-5" />
                    <span>Pagar €1,00</span>
                  </>
                )}
              </button>
            </form>

            <p className="text-xs text-slate-500 text-center mt-4">
              Ao prosseguir, você concorda com nossos{' '}
              <Link href="/termos" className="text-blue-600 hover:text-blue-700">
                Termos de Serviço
              </Link>{' '}
              e{' '}
              <Link href="/privacidade" className="text-blue-600 hover:text-blue-700">
                Política de Privacidade
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}