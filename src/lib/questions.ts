import { Question } from './types';

export const questions: Question[] = [
  // Raciocínio Abstrato/Matricial (8 questões)
  {
    id: 1,
    type: 'abstract',
    question: 'Observe a sequência de figuras. Qual das opções completa logicamente o padrão?',
    options: [
      'Figura com 3 círculos dispostos em triângulo',
      'Figura com 4 círculos dispostos em quadrado',
      'Figura com 5 círculos dispostos em pentágono',
      'Figura com 2 círculos dispostos em linha'
    ],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 2,
    type: 'abstract',
    question: 'Na matriz 3x3, qual elemento falta na posição inferior direita?',
    options: [
      'Círculo preenchido',
      'Quadrado vazio',
      'Triângulo preenchido',
      'Losango vazio'
    ],
    correctAnswer: 0,
    difficulty: 'hard'
  },
  {
    id: 3,
    type: 'abstract',
    question: 'Qual das figuras não pertence ao grupo?',
    options: [
      'Hexágono regular',
      'Pentágono regular',
      'Quadrado',
      'Triângulo escaleno'
    ],
    correctAnswer: 3,
    difficulty: 'medium'
  },
  {
    id: 4,
    type: 'abstract',
    question: 'Se a figura A está para B, assim como C está para:',
    options: [
      'Rotação de 90° horário',
      'Reflexão vertical',
      'Rotação de 180°',
      'Reflexão horizontal'
    ],
    correctAnswer: 1,
    difficulty: 'hard'
  },
  {
    id: 5,
    type: 'abstract',
    question: 'Quantos cubos são necessários para completar a estrutura tridimensional?',
    options: ['7', '9', '11', '13'],
    correctAnswer: 1,
    difficulty: 'hard'
  },
  {
    id: 6,
    type: 'abstract',
    question: 'Qual padrão governa a transformação das figuras na sequência?',
    options: [
      'Adição de um elemento por etapa',
      'Rotação de 45° e mudança de cor',
      'Duplicação e inversão',
      'Redução de tamanho e translação'
    ],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 7,
    type: 'abstract',
    question: 'Na progressão geométrica visual, qual é o próximo elemento?',
    options: [
      'Figura com 16 elementos',
      'Figura com 12 elementos',
      'Figura com 8 elementos',
      'Figura com 20 elementos'
    ],
    correctAnswer: 0,
    difficulty: 'hard'
  },
  {
    id: 8,
    type: 'abstract',
    question: 'Qual das opções mantém a simetria do conjunto?',
    options: [
      'Elemento simétrico bilateral',
      'Elemento assimétrico',
      'Elemento com simetria radial',
      'Elemento com simetria rotacional'
    ],
    correctAnswer: 2,
    difficulty: 'medium'
  },

  // Raciocínio Lógico-Dedutivo (8 questões)
  {
    id: 9,
    type: 'logical',
    question: 'Se todos os A são B, e alguns B são C, então:',
    options: [
      'Todos os A são C',
      'Alguns A podem ser C',
      'Nenhum A é C',
      'Todos os C são A'
    ],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 10,
    type: 'logical',
    question: 'Em uma sala há 5 pessoas. Se cada pessoa cumprimenta todas as outras exatamente uma vez, quantos cumprimentos ocorrem?',
    options: ['10', '15', '20', '25'],
    correctAnswer: 0,
    difficulty: 'medium'
  },
  {
    id: 11,
    type: 'logical',
    question: 'Se P implica Q, e Q implica R, e R é falso, então:',
    options: [
      'P é verdadeiro',
      'P é falso',
      'Q é verdadeiro',
      'Não é possível determinar'
    ],
    correctAnswer: 1,
    difficulty: 'hard'
  },
  {
    id: 12,
    type: 'logical',
    question: 'Três caixas contêm bolas: A tem 3 vermelhas, B tem 2 azuis e 1 vermelha, C tem 2 vermelhas e 1 azul. Qual a probabilidade de retirar uma bola vermelha?',
    options: ['1/2', '2/3', '5/9', '7/9'],
    correctAnswer: 2,
    difficulty: 'hard'
  },
  {
    id: 13,
    type: 'logical',
    question: 'Se "Nenhum X é Y" e "Alguns Z são X", então necessariamente:',
    options: [
      'Alguns Z não são Y',
      'Nenhum Z é Y',
      'Todos os Z são Y',
      'Alguns Z são Y'
    ],
    correctAnswer: 0,
    difficulty: 'hard'
  },
  {
    id: 14,
    type: 'logical',
    question: 'Um código tem 4 dígitos diferentes. Se o primeiro é par, o segundo é ímpar, e a soma dos dois últimos é 10, quantas combinações são possíveis?',
    options: ['180', '240', '320', '400'],
    correctAnswer: 1,
    difficulty: 'hard'
  },
  {
    id: 15,
    type: 'logical',
    question: 'Se A > B, B > C, e C > D, qual afirmação é necessariamente verdadeira?',
    options: [
      'A = 2D',
      'A > D',
      'B = C + 1',
      'D < 0'
    ],
    correctAnswer: 1,
    difficulty: 'easy'
  },
  {
    id: 16,
    type: 'logical',
    question: 'Em um torneio eliminatório com 64 participantes, quantas partidas são necessárias para determinar o campeão?',
    options: ['32', '63', '64', '127'],
    correctAnswer: 1,
    difficulty: 'medium'
  },

  // Raciocínio Numérico (8 questões)
  {
    id: 17,
    type: 'numerical',
    question: 'Qual é o próximo número na sequência: 2, 6, 12, 20, 30, ?',
    options: ['40', '42', '44', '46'],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 18,
    type: 'numerical',
    question: 'Se x² - 5x + 6 = 0, quais são os valores de x?',
    options: [
      'x = 1 e x = 6',
      'x = 2 e x = 3',
      'x = -2 e x = -3',
      'x = 0 e x = 5'
    ],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 19,
    type: 'numerical',
    question: 'Qual é o valor de 3⁴ + 2³ - 5²?',
    options: ['64', '72', '56', '48'],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 20,
    type: 'numerical',
    question: 'Na sequência: 1, 1, 2, 3, 5, 8, 13, ?, qual é o próximo número?',
    options: ['18', '19', '20', '21'],
    correctAnswer: 3,
    difficulty: 'easy'
  },
  {
    id: 21,
    type: 'numerical',
    question: 'Se log₂(x) = 5, qual é o valor de x?',
    options: ['10', '25', '32', '64'],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 22,
    type: 'numerical',
    question: 'Qual é a soma dos primeiros 10 números primos?',
    options: ['129', '139', '149', '159'],
    correctAnswer: 0,
    difficulty: 'hard'
  },
  {
    id: 23,
    type: 'numerical',
    question: 'Se f(x) = 2x + 3 e g(x) = x², qual é o valor de f(g(2))?',
    options: ['11', '13', '15', '17'],
    correctAnswer: 0,
    difficulty: 'medium'
  },
  {
    id: 24,
    type: 'numerical',
    question: 'Quantos números de 3 dígitos são divisíveis por 7?',
    options: ['128', '129', '130', '131'],
    correctAnswer: 0,
    difficulty: 'hard'
  },

  // Raciocínio Verbal (8 questões)
  {
    id: 25,
    type: 'verbal',
    question: 'LIVRO está para BIBLIOTECA assim como QUADRO está para:',
    options: ['MUSEU', 'PINTURA', 'ARTE', 'MOLDURA'],
    correctAnswer: 0,
    difficulty: 'medium'
  },
  {
    id: 26,
    type: 'verbal',
    question: 'Qual palavra não pertence ao grupo: OTIMISTA, ESPERANÇOSO, CONFIANTE, PESSIMISTA?',
    options: ['OTIMISTA', 'ESPERANÇOSO', 'CONFIANTE', 'PESSIMISTA'],
    correctAnswer: 3,
    difficulty: 'easy'
  },
  {
    id: 27,
    type: 'verbal',
    question: 'ABUNDANTE está para ESCASSO assim como EXPANDIR está para:',
    options: ['CRESCER', 'CONTRAIR', 'AUMENTAR', 'DESENVOLVER'],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 28,
    type: 'verbal',
    question: 'Se CÓDIGO é escrito como DPEJHP, como seria escrita a palavra LÓGICA?',
    options: ['MPHJDB', 'MPHIDB', 'MPHJEB', 'MPHIEB'],
    correctAnswer: 0,
    difficulty: 'hard'
  },
  {
    id: 29,
    type: 'verbal',
    question: 'Qual é o antônimo mais preciso de EFÊMERO?',
    options: ['PERMANENTE', 'DURADOURO', 'ETERNO', 'PERPÉTUO'],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 30,
    type: 'verbal',
    question: 'MÉDICO está para HOSPITAL assim como PROFESSOR está para:',
    options: ['ALUNO', 'ESCOLA', 'ENSINO', 'EDUCAÇÃO'],
    correctAnswer: 1,
    difficulty: 'easy'
  },
  {
    id: 31,
    type: 'verbal',
    question: 'Qual palavra completa a analogia: INÍCIO : FIM :: AURORA : ?',
    options: ['MANHÃ', 'CREPÚSCULO', 'NOITE', 'ANOITECER'],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 32,
    type: 'verbal',
    question: 'Se todos os conceitos abstratos são complexos, e algumas ideias são conceitos abstratos, então:',
    options: [
      'Todas as ideias são complexas',
      'Algumas ideias são complexas',
      'Nenhuma ideia é complexa',
      'Todas as ideias são abstratas'
    ],
    correctAnswer: 1,
    difficulty: 'hard'
  }
];

export const calculateIQ = (correctAnswers: number, totalQuestions: number): number => {
  const percentage = (correctAnswers / totalQuestions) * 100;
  
  // Fórmula simplificada para cálculo de QI
  // QI médio = 100, desvio padrão = 15
  let iq: number;
  
  if (percentage >= 95) iq = 145;
  else if (percentage >= 90) iq = 130;
  else if (percentage >= 85) iq = 120;
  else if (percentage >= 75) iq = 115;
  else if (percentage >= 65) iq = 110;
  else if (percentage >= 50) iq = 100;
  else if (percentage >= 35) iq = 90;
  else if (percentage >= 25) iq = 85;
  else if (percentage >= 15) iq = 80;
  else iq = 75;
  
  return iq;
};

export const getPercentile = (iqScore: number): number => {
  if (iqScore >= 145) return 99.9;
  if (iqScore >= 130) return 98;
  if (iqScore >= 120) return 91;
  if (iqScore >= 115) return 84;
  if (iqScore >= 110) return 75;
  if (iqScore >= 100) return 50;
  if (iqScore >= 90) return 25;
  if (iqScore >= 85) return 16;
  if (iqScore >= 80) return 9;
  return 2;
};