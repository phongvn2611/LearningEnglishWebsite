import Grid from '@material-ui/core/Grid';
import communicateIcon from '../assets/icons/communicate.png';
import dictionaryIcon from '../assets/icons/dictionary.png';
import editIcon from '../assets/icons/edit.png';
import favoriteIcon from '../assets/icons/favorite.png';
import flashcardIcon from '../assets/icons/flashcard.png';
import friendsIcon from '../assets/icons/friends.png';
import gameIcon from '../assets/icons/game.png';
import grammarIcon from '../assets/icons/grammar.png';
import ipaIcon from '../assets/icons/ipa.png';
import toeicIcon from '../assets/icons/toeic.png';
import verbIcon from '../assets/icons/verb.png';
import medalIcon from '../assets/icons/medal.png';
import FeatureBox from '../components/FeatureBox';
import { ROUTES } from '../constants';
import useScrollTop from '../hooks/useScrollTop';
import useTitle from '../hooks/useTitle';
import React from 'react';

const FEATURE_LIST = [
  {
    title: 'Quản lý từ vựng',
    subTitle:
      'Quản lý tất cả từ vựng có trong hệ thống',
    imgUrl: flashcardIcon,
    to: ROUTES.WORD_ADMIN,
  },
  {
    title: "Quản lý bài nghe",
    subTitle: 'Quản lý tất cả các bài nghe có trong hệ thống',
    imgUrl: communicateIcon,
    to: ROUTES.LISTENING_ADMIN,
  },
  {
    title: 'Quản lý quiz',
    subTitle: 'Quản lý các bài quiz trong phần luyện nghe',
    imgUrl: toeicIcon,
    to: ROUTES.QUIZ_ADMIN,
  },
  {
    title: 'Quản lý ngữ pháp',
    imgUrl: grammarIcon,
    subTitle: 'Quản lý tất cả ngữ pháp có trong hệ thống',
    to: ROUTES.GRAMMAR_ADMIN,
  },
  {
    title: 'Quản lý người dùng',
    imgUrl: friendsIcon,
    subTitle: 'Quản lý tất cả tài khoản người dùng có trong hệ thống',
    to: ROUTES.USER_ADMIN
  }
];

function AdminPage() {
  useTitle('Admin');


  return (
    <div className="container">
      <h1>Admin page</h1>
    </div>
  );
}

export default AdminPage;
