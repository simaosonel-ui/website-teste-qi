'use client';

import Link from 'next/link';
import { Brain, ArrowLeft, FileText, Scale, AlertCircle } from 'lucide-react';

export default function TermosPage() {
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
              href="/"
              className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Voltar</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="h-10 w-10 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Termos de Serviço
          </h1>
          <p className="text-lg text-slate-600">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
          <div className="prose prose-slate max-w-none">
            
            <section className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Scale className="h-6 w-6 text-blue-600" />
                <h2 className="text-xl font-bold text-slate-900">1. Aceitação dos Termos</h2>
              </div>
              <p className="text-slate-600 mb-4">
                Ao acessar e utilizar o QI Professional, você concorda em cumprir e estar vinculado a estes 
                Termos de Serviço. Se você não concordar com qualquer parte destes termos, não deve usar nosso serviço.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">2. Descrição do Serviço</h2>
              <p className="text-slate-600 mb-4">
                O QI Professional oferece um teste de inteligência online que avalia capacidades cognitivas 
                através de 32 questões científicamente elaboradas. O serviço inclui:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                <li>Teste de QI com 32 questões profissionais</li>
                <li>Análise detalhada dos resultados</li>
                <li>Pontuação de QI baseada em metodologia científica</li>
                <li>Relatório personalizado com recomendações</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">3. Pagamento e Reembolso</h2>
              <p className="text-slate-600 mb-4">
                O acesso aos resultados completos requer um pagamento único de €1,00. As condições de pagamento são:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                <li>Pagamento processado através de gateways seguros</li>
                <li>Acesso imediato aos resultados após confirmação do pagamento</li>
                <li>Não há assinaturas ou taxas recorrentes</li>
                <li>Reembolsos disponíveis em até 7 dias mediante solicitação justificada</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">4. Uso Adequado</h2>
              <p className="text-slate-600 mb-4">
                Você concorda em usar o serviço apenas para fins legítimos e de acordo com estas diretrizes:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                <li>Não compartilhar suas credenciais de acesso</li>
                <li>Não tentar burlar ou manipular o sistema de teste</li>
                <li>Não usar o serviço para fins comerciais sem autorização</li>
                <li>Respeitar os direitos de propriedade intelectual</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">5. Limitações e Responsabilidades</h2>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                  <div>
                    <p className="text-orange-800 text-sm font-medium mb-2">Importante:</p>
                    <p className="text-orange-700 text-sm">
                      Este teste é destinado para fins educacionais e de autoconhecimento. Não substitui 
                      avaliações psicológicas profissionais ou diagnósticos clínicos.
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-slate-600 mb-4">
                O QI Professional não se responsabiliza por:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                <li>Decisões tomadas com base nos resultados do teste</li>
                <li>Interpretações inadequadas dos resultados</li>
                <li>Problemas técnicos temporários do serviço</li>
                <li>Uso indevido das informações fornecidas</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">6. Propriedade Intelectual</h2>
              <p className="text-slate-600 mb-4">
                Todo o conteúdo do QI Professional, incluindo questões, algoritmos, design e textos, 
                é protegido por direitos autorais e outras leis de propriedade intelectual. É proibido:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                <li>Reproduzir ou distribuir o conteúdo sem autorização</li>
                <li>Criar obras derivadas baseadas em nosso material</li>
                <li>Usar nosso conteúdo para fins comerciais</li>
                <li>Fazer engenharia reversa de nossos algoritmos</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">7. Modificações dos Termos</h2>
              <p className="text-slate-600 mb-4">
                Reservamo-nos o direito de modificar estes Termos de Serviço a qualquer momento. 
                As alterações entrarão em vigor imediatamente após a publicação. O uso continuado 
                do serviço após as modificações constitui aceitação dos novos termos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">8. Rescisão</h2>
              <p className="text-slate-600 mb-4">
                Podemos suspender ou encerrar seu acesso ao serviço a qualquer momento, sem aviso prévio, 
                por violação destes termos ou por qualquer outro motivo que consideremos apropriado.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">9. Lei Aplicável</h2>
              <p className="text-slate-600 mb-4">
                Estes Termos de Serviço são regidos pelas leis portuguesas. Qualquer disputa será 
                resolvida nos tribunais competentes de Portugal.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">10. Contato</h2>
              <p className="text-slate-600 mb-4">
                Para questões sobre estes Termos de Serviço, entre em contato conosco através do 
                nosso site ou pelos canais de atendimento disponibilizados.
              </p>
            </section>

          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Brain className="mr-2 h-5 w-5" />
            Voltar ao Teste
          </Link>
        </div>
      </main>
    </div>
  );
}