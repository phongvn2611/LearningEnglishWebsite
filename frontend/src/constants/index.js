export const COLOR_VAR_KEYS = [
  { key: '--primary-color', label: 'Primary' },
  { key: '--secondary-color', label: 'Secondary' },
  { key: '--accent-color', label: 'Accent' },
  { key: '--bg-color-main', label: 'Background primary' },
  { key: '--bg-color-sec', label: 'Background secondary' },
  { key: '--bg-color-accent', label: 'Background accent' },
  { key: '--hover-color', label: 'Hover color' },
  { key: '--title-color', label: 'Title' },
  { key: '--text-color', label: 'Text' },
  { key: '--phonetic-color', label: 'Phonetic' },
];

export const COINS = {
  CORRECT_GAME_PER_QUES: 10,
};

export const DEFAULTS = {
  VOICE_URI: 'Google US English',
  VOICE_SPEED: 1,
  VOICE_VOLUME: 1,
  IMAGE_SRC:
    'https://res.cloudinary.com/dynonary/image/upload/v1625136714/dynonary/default-image.png',
};

export const LINKS = {
  FB: 'https://fb.com/TuanNguyen250400',
  WEBSITE: 'https://dynonguyen.com',
};

export const MAX = {
  EMAIL_LEN: 100,
  PASSWORD_LEN: 40,
  NAME_LEN: 50,
  USERNAME_LEN: 110,
  SEARCH_LEN: 50,
  WORD_LEN: 50,
  PHONETIC_LEN: 50,
  MEAN_WORD_LEN: 100,
  EXAMPLE_WORD_LEN: 250,
  SYNONYMS_WORD_LEN: 100,
  NOTE_WORD_LEN: 100,
  IMG_SIZE: 2, // 2 MB
  SENTENCE_LEN: 200,
  SENTENCE_MEAN_LEN: 300,
  SENTENCE_NOTE_LEN: 100,
  USER_COIN: 99999,
  VERIFY_CODE: 6,
};

export const MIN = {
  PASSWORD_LEN: 6,
};

export const ROUTES = {
  WELCOME: '/',
  HOME: '/home',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  ACTIVATION_EMAIL: '/user/activate/:activation_token',
  RESET_PASSWORD: '/user/reset/:access_token',
  PROFILE: '/user/profile',
  LOGOUT: '/logout',
  LISTENING: '/listening/:id',
  ADMIN: '/admin',
  GRAMMAR_ADMIN: '/admin/grammar',
  LISTENING_ADMIN: '/admin/listening',
  LISTENING_DETAIL: '/admin/listening/:id',
  QUIZ_ADMIN: '/admin/quiz',
  WORD_ADMIN: '/admin/word',
  USER_ADMIN: '/admin/user',
  ADD_WORD: '/admin/word/add',
  EDIT_WORD: '/admin/word/edit/:id',
}

export const UX = {
  DELAY_TIME: 1500,
  DELAY_ANSWER: 3000,
};

export const REGEX = {
  NAME: /^[^\d~`!@#$%^&*\(\)\\\|\.,\?\/\-\+\=\_]+$/gi,
};

export const THEME_KEYS = {
  ROOT_KEY: 'data-theme',
  LS_KEY: 'theme',
  PALETTE_KEY: 'palettes',
  LIGHT: 'light',
  DARK: 'dark',
  CUSTOM: 'custom',
};


export const VOICE_KEYS = {
  LS_KEY: 'voice',
};

export const WORD_TYPES = [
  {
    value: 'n',
    label: 'Noun - Danh từ',
  },
  {
    value: 'adj',
    label: 'Adjective - Tính từ',
  },
  {
    value: 'adv',
    label: 'Adverb - Trạng từ',
  },
  {
    value: 'v',
    label: 'Verb - Động từ',
  },
  {
    value: 'pro',
    label: 'Pronoun - Đại từ',
  },
  {
    value: 'con',
    label: 'Conjunction - Liên từ',
  },
  {
    value: 'pre',
    label: 'Preposition - Giới từ',
  },
  {
    value: 'det',
    label: 'Determiners - Hạn định từ',
  },
];

export const WORD_LEVELS = [
  {
    value: '0',
    label: 'Chưa xác định',
  },
  {
    value: 'A1',
    label: 'A1',
  },
  {
    value: 'A2',
    label: 'A2',
  },
  {
    value: 'B1',
    label: 'B1',
  },
  {
    value: 'B2',
    label: 'B2',
  },
  {
    value: 'C1',
    label: 'C1',
  },
  {
    value: 'C2',
    label: 'C2',
  },
];

export const WORD_SPECIALTY = [
  { value: '0', label: 'Không' },
  { value: '1', label: 'Công nghệ sinh học (Biotechnology)' },
  { value: '6', label: 'Công nghệ thông tin (Information Technology)' },
  { value: '14', label: 'Công nghệ thực phẩm (Food Technology)' },
  { value: '20', label: 'Giải trí (Entertainment)' },
  { value: '3', label: 'Kinh tế học (Economics)' },
  { value: '2', label: 'Kế toán (Accounting)' },
  { value: '8', label: 'Kỹ thuật hoá học (Chemical Engineering)' },
  { value: '19', label: 'Mỹ thuật (Fine Arts Industry)' },
  { value: '12', label: 'Ngành Marketing' },
  { value: '18', label: 'Quản trị khách sạn (Hotel Management)' },
  { value: '7', label: 'Quản trị kinh doanh (Business Adminstration)' },
  { value: '5', label: 'Quản trị nhân lực (Human Resource Management)' },
  { value: '13', label: 'Thiết kế (Design UI/UX)' },
  { value: '4', label: 'Thương mại quốc tế (International Trade)' },
  { value: '10', label: 'Thương mại điện tử (E-Commerce)' },
  { value: '9', label: 'Tiếng Anh thương mại (Business English)' },
  { value: '11', label: 'Tài chính ngân hàng (Finance & Banking)' },
  { value: '16', label: 'Văn hoá học (Culturology)' },
  { value: '17', label: 'Xây dựng (Construction Industry)' },
  { value: '15', label: 'Xã hội học (Sociology)' },
];

export const LISTEN_TOPIC = [
  { value: 'Other', label: 'Other' },
  { value: 'Culture', label: 'Culture' },
  { value: 'Economics', label: 'Economics' },
  { value: '3', label: 'Appearance' },
  { value: 'Education', label: 'Education' },
  { value: '5', label: 'Environment' },
  { value: '6', label: 'Family' },
  { value: '7', label: 'Food' },
  { value: '8', label: 'Health' },
  { value: '9', label: 'Holidays' },
  { value: '10', label: 'Leisure' },
  { value: '11', label: 'Movies' },
  { value: '12', label: 'Music' },
  { value: '13', label: 'Nature' },
  { value: '14', label: 'Places' },
  { value: '15', label: 'Relationships' },
  { value: '16', label: 'Routines' },
  { value: '17', label: 'Shopping' },
  { value: '18', label: 'Sports' },
  { value: '19', label: 'Technology' },
  { value: '20', label: 'Travel' },
  { value: '21', label: 'Work' },
];

export const SORT_TYPE = [
  { value: 'Newest', label: 'Newest' },
  { value: 'Oldest', label: 'Oldest' },
];
