// src/services/quizService.js
import axios from 'axios';

export const fetchQuiz = async (category, difficulty, limit = 20) => {
  try {
    const response = await axios.get('/api/quiz/fetch-quiz', {
      params: { category, difficulty, limit },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching quiz data from backend:', error);
    throw error;
  }
};
