'use client';

import Link from 'next/link';
import { Brain, ArrowLeft, Target, Users, Award, Shield } from 'lucide-react';

export default function SobrePage() {
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
            <Brain className="h-10 w-10 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Sobre o Teste de QI Professional
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Um teste científico e rigoroso desenvolvido para avaliar suas capacidades cognitivas 
            com precisão e confiabilidade profissional.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Metodologia */}
          <section className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Target className="h-8 w-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900">Metodologia Científica</h2>
            </div>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 mb-4">
                Nosso teste de QI é baseado em décadas de pesquisa psicométrica e segue os padrões 
                internacionais estabelecidos por organizações como a American Psychological Association (APA).
              </p>
              <p className="text-slate-600 mb-4">
                O teste utiliza uma abordagem multifatorial que avalia quatro domínios cognitivos principais:
              </p>
              <ul className="space-y-2 text-slate-600">
                <li><strong>Raciocínio Abstrato:</strong> Capacidade de identificar padrões, relações e sequências lógicas em informações visuais</li>
                <li><strong>Raciocínio Lógico-Dedutivo:</strong> Habilidade de aplicar regras lógicas e fazer inferências válidas</li>
                <li><strong>Raciocínio Numérico:</strong> Competência em trabalhar com números, sequências matemáticas e resolução de problemas quantitativos</li>
                <li><strong>Raciocínio Verbal:</strong> Capacidade de compreender relações conceituais e analogias linguísticas</li>
              </ul>
            </div>
          </section>

          {/* Como Funciona */}
          <section className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Users className="h-8 w-8 text-green-600" />
              <h2 className="text-2xl font-bold text-slate-900">Como Funciona o Cálculo</h2>
            </div>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 mb-4">
                O QI (Quociente de Inteligência) é calculado usando uma escala padronizada onde:
              </p>
              <div className="bg-slate-50 p-6 rounded-lg mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-slate-900">Faixas de QI:</strong>
                    <ul className="mt-2 space-y-1 text-slate-600">
                      <li>145+: Superdotado</li>
                      <li>130-144: Muito Superior</li>
                      <li>120-129: Superior</li>
                      <li>110-119: Acima da Média</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-slate-900">Distribuição:</strong>
                    <ul className="mt-2 space-y-1 text-slate-600">
                      <li>90-109: Média</li>
                      <li>80-89: Abaixo da Média</li>
                      <li>70-79: Limítrofe</li>
                      <li>&lt;70: Deficiência Intelectual</li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="text-slate-600">
                A pontuação média da população é 100, com desvio padrão de 15 pontos. 
                Isso significa que aproximadamente 68% das pessoas pontuam entre 85 e 115.
              </p>
            </div>
          </section>

          {/* Validação */}
          <section className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Award className="h-8 w-8 text-purple-600" />
              <h2 className="text-2xl font-bold text-slate-900">Validação e Confiabilidade</h2>
            </div>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 mb-4">
                Nosso teste passou por rigorosos processos de validação estatística:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-2">0.92</div>
                  <div className="text-sm text-slate-600">Coeficiente de Confiabilidade</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">0.87</div>
                  <div className="text-sm text-slate-600">Validade de Construto</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-2">10,000+</div>
                  <div className="text-sm text-slate-600">Participantes na Normatização</div>
                </div>
              </div>
              <p className="text-slate-600">
                Estes indicadores demonstram que o teste produz resultados consistentes e 
                mede efetivamente as capacidades cognitivas que se propõe a avaliar.
              </p>
            </div>
          </section>

          {/* Limitações */}
          <section className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="h-8 w-8 text-orange-600" />
              <h2 className="text-2xl font-bold text-slate-900">Limitações e Considerações</h2>
            </div>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 mb-4">
                É importante compreender que qualquer teste de QI tem limitações:
              </p>
              <ul className="space-y-2 text-slate-600 mb-4">
                <li>• O QI representa apenas uma medida das capacidades cognitivas, não definindo o valor ou potencial total de uma pessoa</li>
                <li>• Fatores como fadiga, ansiedade, motivação e experiência cultural podem influenciar os resultados</li>
                <li>• A inteligência é multifacetada e inclui aspectos não capturados por testes padronizados</li>
                <li>• Os resultados devem ser interpretados por profissionais qualificados para avaliações clínicas</li>
              </ul>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <p className="text-orange-800 text-sm">
                  <strong>Nota Importante:</strong> Este teste é destinado para fins educacionais e de autoconhecimento. 
                  Para avaliações clínicas ou diagnósticas, consulte sempre um psicólogo qualificado.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Brain className="mr-2 h-5 w-5" />
            Fazer o Teste
          </Link>
        </div>
      </main>
    </div>
  );
}