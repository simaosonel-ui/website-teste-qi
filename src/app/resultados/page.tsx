'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Brain, Lock, CreditCard, CheckCircle, Star, TrendingUp } from 'lucide-react';
import { getSession, clearSession } from '@/lib/session';
import { questions, calculateIQ, getPercentile } from '@/lib/questions';
import { TestSession } from '@/lib/types';

export default function ResultadosPage() {
  const router = useRouter();
  const [session, setSession] = useState<TestSession | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [iqScore, setIqScore] = useState(0);
  const [percentile, setPercentile] = useState(0);

  useEffect(() => {
    const currentSession = getSession();
    
    if (!currentSession || !currentSession.completed) {
      router.push('/teste');
      return;
    }

    // Calculate results
    let correct = 0;
    Object.entries(currentSession.answers).forEach(([questionId, answer]) => {
      const question = questions[parseInt(questionId) - 1];
      if (question && question.correctAnswer === answer) {
        correct++;
      }
    });

    const calculatedIQ = calculateIQ(correct, 32);
    const calculatedPercentile = getPercentile(calculatedIQ);

    setSession(currentSession);
    setCorrectAnswers(correct);
    setIqScore(calculatedIQ);
    setPercentile(calculatedPercentile);
    setIsLoading(false);
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4 animate-pulse" />
          <p className="text-slate-600">Processando resultados...</p>
        </div>
      </div>
    );
  }

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
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              Início
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Completion Message */}
        <div className="text-center mb-12">
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            Teste Concluído com Sucesso!
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Parabéns por completar nosso teste de QI profissional. Suas respostas foram processadas 
            e estão prontas para análise detalhada.
          </p>
        </div>

        {/* Locked Results Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden mb-8">
          {/* Header with Lock */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6 text-white relative">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">Seus Resultados</h2>
                <p className="text-blue-100">Análise completa da sua capacidade cognitiva</p>
              </div>
              <div className="bg-white/20 p-4 rounded-full">
                <Lock className="h-8 w-8" />
              </div>
            </div>
          </div>

          {/* Blurred Preview */}
          <div className="p-8 relative">
            <div className="filter blur-sm pointer-events-none">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{iqScore}</div>
                  <div className="text-slate-600">Pontuação QI</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">{percentile}%</div>
                  <div className="text-slate-600">Percentil</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">{correctAnswers}/32</div>
                  <div className="text-slate-600">Respostas Corretas</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-slate-900 mb-2">Análise por Categoria</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Raciocínio Abstrato</span>
                      <span className="font-semibold">85%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Raciocínio Lógico</span>
                      <span className="font-semibold">92%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Raciocínio Numérico</span>
                      <span className="font-semibold">78%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Raciocínio Verbal</span>
                      <span className="font-semibold">88%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-slate-900 mb-2">Pontos Fortes</h3>
                  <ul className="space-y-1 text-slate-600">
                    <li>• Excelente capacidade de raciocínio lógico-dedutivo</li>
                    <li>• Forte habilidade em reconhecimento de padrões</li>
                    <li>• Boa compreensão de relações abstratas</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
              <div className="text-center max-w-md">
                <Lock className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Resultados Bloqueados
                </h3>
                <p className="text-slate-600 mb-6">
                  Para acessar sua pontuação de QI completa e análise detalhada, 
                  é necessário efetuar um pagamento único.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment CTA */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 text-center">
          <div className="mb-6">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CreditCard className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Desbloqueie Seus Resultados
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Obtenha acesso imediato à sua pontuação de QI, análise detalhada por categoria, 
              pontos fortes, áreas de melhoria e recomendações personalizadas.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
              <h3 className="font-semibold text-slate-900 mb-1">Pontuação Oficial</h3>
              <p className="text-sm text-slate-600">Seu QI calculado com precisão científica</p>
            </div>
            <div className="text-center">
              <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <h3 className="font-semibold text-slate-900 mb-1">Análise Detalhada</h3>
              <p className="text-sm text-slate-600">Breakdown completo por categoria</p>
            </div>
            <div className="text-center">
              <Brain className="h-8 w-8 text-purple-500 mx-auto mb-2" />
              <h3 className="font-semibold text-slate-900 mb-1">Recomendações</h3>
              <p className="text-sm text-slate-600">Sugestões para desenvolvimento cognitivo</p>
            </div>
          </div>

          {/* Price and CTA */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">€1,00</div>
              <div className="text-slate-600 mb-4">Pagamento único • Acesso imediato</div>
              <Link
                href="/pagamento"
                className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <CreditCard className="mr-2 h-5 w-5" />
                Desbloquear Resultados
              </Link>
            </div>
          </div>

          <p className="text-xs text-slate-500">
            Pagamento seguro • Sem assinaturas • Garantia de satisfação
          </p>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-slate-600 mb-4">
            Tem dúvidas sobre o teste ou os resultados?
          </p>
          <div className="space-x-4">
            <Link 
              href="/sobre" 
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Sobre o Teste
            </Link>
            <span className="text-slate-300">•</span>
            <Link 
              href="/termos" 
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Termos de Serviço
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}