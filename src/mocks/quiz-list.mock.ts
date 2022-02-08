import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';

export const QUESTION_ACTOR: Question = {
  label: 'Jean Gabin a joué dans...',
  answers: [
  {
    value: 'Les tuches II',
    isCorrect: false,
  },
  {
    value: 'La grande illusion',
    isCorrect: true,
  }
  ]
};

export const QUESTION_SPORT: Question = {
  label: 'Qui a gagné Rolland Garros en 2015 ?',
  answers: [
    {
      value: 'Stanislas Wawrinka',
      isCorrect: true,
    },
    {
      value: 'Rafael Nadal',
      isCorrect: false,
    }
  ]
};

export const QUIZ_LIST: Quiz[] = [
    {
        id: "1",
        name: 'Les Acteurs', // What's happening if I change this value..?
        theme: 'Actor',
        questions: [QUESTION_ACTOR],
    },
    {
        id: "2",
        name: 'Les Sports',
        theme: 'Tennis',
        questions: [QUESTION_SPORT],
    }
];
