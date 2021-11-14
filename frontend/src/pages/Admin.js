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
    to: "",
  },
  {
    title: "Quản lý bài nghe",
    subTitle: 'Quản lý tất cả các bài nghe có trong hệ thống',
    imgUrl: communicateIcon,
    to: "",
  },
  {
    title: 'Quản lý quiz',
    subTitle: 'Quản lý các bài quiz trong phần luyện nghe',
    imgUrl: toeicIcon,
    to: "",
  },
  {
    title: 'Quản lý động từ bất quy tắc',
    imgUrl: verbIcon,
    subTitle: 'Quản lý tất cả động từ bất quy tắc có trong hệ thống',
    to: "",
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
    to: ""
  }
];

function AdminPage() {
  useTitle('Admin');
  // useScrollTop();

  return (
    <div className="container my-10">
      <Grid container spacing={3}>
        {FEATURE_LIST.map((box, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <FeatureBox
              imgUrl={box.imgUrl}
              title={box.title}
              to={box.to}
              subTitle={box.subTitle}
            />
          </Grid>
        ))}
      </Grid>/
    </div>
  );
}

export default AdminPage;
