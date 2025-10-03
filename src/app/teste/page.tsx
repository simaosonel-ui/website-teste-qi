'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Brain, ArrowLeft, ArrowRight, Clock, CheckCircle } from 'lucide-react';
import { questions } from '@/lib/questions';
import { createSession, getSession, updateSession } from '@/lib/session';
import { TestSession } from '@/lib/types';

export default function TestePage() {
  const router = useRouter();
  const [session, setSession] = useState<TestSession | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verificar se as perguntas foram carregadas corretamente
    if (!questions || questions.length !== 32) {
      console.error('Erro: Array de perguntas não carregado corretamente', { questionsLength: questions?.length });
      return;
    }

    // Initialize or load session
    let currentSession = getSession();
    if (!currentSession) {
      currentSession = createSession();
    }
    
    // Garantir que currentQuestion seja válido (entre 1 e 32)
    const validCurrentQuestion = Math.max(1, Math.min(32, currentSession.currentQuestion));
    if (validCurrentQuestion !== currentSession.currentQuestion) {
      currentSession.currentQuestion = validCurrentQuestion;
      updateSession({ currentQuestion: validCurrentQuestion });
    }
    
    setSession(currentSession);
    setCurrentQuestion(validCurrentQuestion);
    setSelectedAnswer(currentSession.answers[validCurrentQuestion] || null);
    setIsLoading(false);

    // Timer
    const timer = setInterval(() => {
      setTimeElapsed(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    // Save answer
    const updatedAnswers = { ...session!.answers, [currentQuestion]: selectedAnswer };
    updateSession({ 
      answers: updatedAnswers, 
      currentQuestion: currentQuestion + 1 
    });

    if (currentQuestion < 32) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(session!.answers[currentQuestion + 1] || null);
      setSession(prev => prev ? { ...prev, answers: updatedAnswers, currentQuestion: currentQuestion + 1 } : null);
    } else {
      // Test completed
      updateSession({ completed: true });
      router.push('/resultados');
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(session!.answers[currentQuestion - 1] || null);
      updateSession({ currentQuestion: currentQuestion - 1 });
      setSession(prev => prev ? { ...prev, currentQuestion: currentQuestion - 1 } : null);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4 animate-pulse" />
          <p className="text-slate-600">Carregando teste...</p>
        </div>
      </div>
    );
  }

  // Verificar se o currentQuestion é válido e se existe a pergunta correspondente
  if (currentQuestion < 1 || currentQuestion > 32 || !questions || questions.length !== 32) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <Brain className="h-12 w-12 text-red-600 mx-auto mb-4" />
          <p className="text-slate-600 mb-4">Erro ao carregar o teste. Questão inválida ou perguntas não carregadas.</p>
          <button 
            onClick={() => {
              // Reset session and reload
              localStorage.removeItem('iq-test-session');
              window.location.reload();
            }} 
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Reiniciar Teste
          </button>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion - 1];
  const progress = (currentQuestion / 32) * 100;

  // Verificação de segurança adicional para evitar erro quando question é undefined
  if (!question) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <Brain className="h-12 w-12 text-red-600 mx-auto mb-4" />
          <p className="text-slate-600 mb-4">Erro ao carregar pergunta {currentQuestion}.</p>
          <button 
            onClick={() => {
              // Reset session and reload
              localStorage.removeItem('iq-test-session');
              window.location.reload();
            }} 
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Reiniciar Teste
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Brain className="h-6 w-6 text-blue-600" />
              <span className="text-lg font-semibold text-slate-900">Teste de QI</span>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-slate-600">
                <Clock className="h-4 w-4" />
                <span className="font-mono">{formatTime(timeElapsed)}</span>
              </div>
              <div className="text-sm text-slate-600">
                {currentQuestion} / 32
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Question */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
          {/* Question Type Badge */}
          <div className="mb-6">
            <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
              question.type === 'abstract' ? 'bg-purple-100 text-purple-800' :
              question.type === 'logical' ? 'bg-blue-100 text-blue-800' :
              question.type === 'numerical' ? 'bg-green-100 text-green-800' :
              'bg-orange-100 text-orange-800'
            }`}>
              {question.type === 'abstract' ? 'Raciocínio Abstrato' :
               question.type === 'logical' ? 'Raciocínio Lógico' :
               question.type === 'numerical' ? 'Raciocínio Numérico' :
               'Raciocínio Verbal'}
            </span>
          </div>

          {/* Question Text */}
          <h2 className="text-xl font-semibold text-slate-900 mb-8 leading-relaxed">
            {question.question}
          </h2>

          {/* Answer Options */}
          <div className="space-y-4 mb-8">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                  selectedAnswer === index
                    ? 'border-blue-600 bg-blue-50 text-blue-900'
                    : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedAnswer === index
                      ? 'border-blue-600 bg-blue-600'
                      : 'border-slate-300'
                  }`}>
                    {selectedAnswer === index && (
                      <CheckCircle className="h-4 w-4 text-white" />
                    )}
                  </div>
                  <span className="font-medium">
                    {String.fromCharCode(65 + index)}. {option}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 1}
              className="flex items-center space-x-2 px-4 py-2 text-slate-600 hover:text-slate-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Anterior</span>
            </button>

            <div className="text-sm text-slate-500">
              Questão {currentQuestion} de 32
            </div>

            <button
              onClick={handleNext}
              disabled={selectedAnswer === null}
              className="flex items-center space-x-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <span>{currentQuestion === 32 ? 'Finalizar' : 'Próxima'}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-semibold text-blue-900 mb-2">Instruções:</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Leia cada questão cuidadosamente antes de responder</li>
            <li>• Selecione apenas uma resposta por questão</li>
            <li>• Não utilize material de apoio ou calculadora</li>
            <li>• Você pode voltar e alterar suas respostas</li>
            <li>• Não há limite de tempo, mas trabalhe com eficiência</li>
          </ul>
        </div>
      </main>
    </div>
  );
}