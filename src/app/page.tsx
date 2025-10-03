'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Brain, Clock, Target, Shield, CheckCircle, Users } from 'lucide-react';
import { hasActiveSession } from '@/lib/session';

export default function Home() {
  const [hasSession, setHasSession] = useState(false);

  useEffect(() => {
    setHasSession(hasActiveSession());
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-slate-900">QI Professional</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/sobre" className="text-slate-600 hover:text-blue-600 transition-colors">
                Sobre
              </Link>
              <Link href="/termos" className="text-slate-600 hover:text-blue-600 transition-colors">
                Termos
              </Link>
              <Link href="/privacidade" className="text-slate-600 hover:text-blue-600 transition-colors">
                Privacidade
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Teste de QI
            <span className="block text-blue-600">Profissional</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Avalie sua capacidade cognitiva com um teste científico de 32 questões, 
            desenvolvido para medir raciocínio abstrato, lógico e numérico com precisão profissional.
          </p>
          
          {/* CTA Button */}
          <div className="mb-12">
            <Link 
              href={hasSession ? "/teste" : "/teste"}
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Brain className="mr-3 h-5 w-5" />
              {hasSession ? 'Continuar Teste' : 'Iniciar Teste'}
            </Link>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Target className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">32</h3>
              <p className="text-slate-600">Questões Profissionais</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Clock className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">25-35</h3>
              <p className="text-slate-600">Minutos de Duração</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Shield className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">100%</h3>
              <p className="text-slate-600">Científico e Confiável</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Por que escolher nosso teste?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Desenvolvido com base em metodologias científicas reconhecidas internacionalmente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Raciocínio Abstrato</h3>
              <p className="text-slate-600">Padrões visuais e sequências lógicas complexas</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Lógica Dedutiva</h3>
              <p className="text-slate-600">Problemas de raciocínio e inferência lógica</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Capacidade Numérica</h3>
              <p className="text-slate-600">Sequências matemáticas e resolução de problemas</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Raciocínio Verbal</h3>
              <p className="text-slate-600">Analogias e compreensão de relações conceituais</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Como funciona
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Responda 32 Questões</h3>
              <p className="text-slate-600">Questões cuidadosamente elaboradas para avaliar diferentes aspectos da inteligência</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Análise Científica</h3>
              <p className="text-slate-600">Suas respostas são analisadas usando algoritmos baseados em pesquisa psicométrica</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Receba seu QI</h3>
              <p className="text-slate-600">Obtenha sua pontuação de QI e análise detalhada das suas capacidades cognitivas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Brain className="h-6 w-6" />
                <span className="text-lg font-bold">QI Professional</span>
              </div>
              <p className="text-slate-400">
                Teste de QI científico e profissional para avaliação cognitiva precisa.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Links</h3>
              <div className="space-y-2">
                <Link href="/sobre" className="block text-slate-400 hover:text-white transition-colors">
                  Sobre o Teste
                </Link>
                <Link href="/termos" className="block text-slate-400 hover:text-white transition-colors">
                  Termos de Serviço
                </Link>
                <Link href="/privacidade" className="block text-slate-400 hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Informações</h3>
              <div className="space-y-2 text-slate-400">
                <p>32 questões profissionais</p>
                <p>Metodologia científica</p>
                <p>Resultados precisos</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 QI Professional. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}