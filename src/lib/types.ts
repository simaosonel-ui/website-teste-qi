export interface Question {
  id: number;
  type: 'abstract' | 'logical' | 'numerical' | 'verbal';
  question: string;
  options: string[];
  correctAnswer: number;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface TestSession {
  id: string;
  startTime: Date;
  currentQuestion: number;
  answers: Record<number, number>;
  completed: boolean;
  score?: number;
  iqScore?: number;
}

export interface TestResult {
  totalQuestions: number;
  correctAnswers: number;
  iqScore: number;
  percentile: number;
  strengths: string[];
  recommendations: string[];
}