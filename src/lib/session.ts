'use client';

import { TestSession } from './types';

const SESSION_KEY = 'iq_test_session';

export const createSession = (): TestSession => {
  const session: TestSession = {
    id: Math.random().toString(36).substr(2, 9),
    startTime: new Date(),
    currentQuestion: 1,
    answers: {},
    completed: false
  };
  
  if (typeof window !== 'undefined') {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  }
  
  return session;
};

export const getSession = (): TestSession | null => {
  if (typeof window === 'undefined') return null;
  
  const sessionData = localStorage.getItem(SESSION_KEY);
  if (!sessionData) return null;
  
  try {
    const session = JSON.parse(sessionData);
    session.startTime = new Date(session.startTime);
    return session;
  } catch {
    return null;
  }
};

export const updateSession = (updates: Partial<TestSession>): void => {
  if (typeof window === 'undefined') return;
  
  const currentSession = getSession();
  if (!currentSession) return;
  
  const updatedSession = { ...currentSession, ...updates };
  localStorage.setItem(SESSION_KEY, JSON.stringify(updatedSession));
};

export const clearSession = (): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(SESSION_KEY);
};

export const hasActiveSession = (): boolean => {
  const session = getSession();
  return session !== null && !session.completed;
};