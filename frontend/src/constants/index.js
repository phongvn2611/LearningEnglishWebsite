export const ROUTES = {
  WELCOME: '/',
  HOME: '/home',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  ACTIVATION_EMAIL: '/user/activate/:activation_token',
  RESET_PASSWORD: '/user/reset/:access_token',
  LOGOUT: '/logout',
  LISTENING: '/listening/:id',
  GRAMMAR_ADMIN: '/admin/grammar',
  LISTENING_ADMIN: '/admin/listening',
  QUIZ_ADMIN: '/admin/quiz',
  WORD_ADMIN: '/admin/word',
  USER_ADMIN: '/admin/user',
}

export const UX = {
  DELAY_TIME: 1500,
  DELAY_ANSWER: 3000,
};
