import Grid from '@material-ui/core/Grid';
import communicateIcon from '../assets/icons/communicate.png';
import dictionaryIcon from '../assets/icons/dictionary.png';
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
import { useSelector } from 'react-redux';

const FEATURE_LIST_USER = [
  {
    title: 'Bảng phiên âm (IPA)',
    subTitle:
      'Luyện nghe, phát âm chuẩn với 44 âm trong bảng phiên âm quốc tế IPA',
    imgUrl: ipaIcon,
    to: ROUTES.HOME,
  },
  {
    title: 'Từ vựng',
    subTitle:
      'Danh sách từ vựng được phân loại theo cấp độ, loại từ, ...',
    imgUrl: flashcardIcon,
    to: ROUTES.HOME,
  },
  {
    title: "Luyện nghe",
    subTitle: 'Rèn luyện kỹ năng nghe thông qua các video và các bài quiz rèn luyện',
    imgUrl: communicateIcon,
    to: ROUTES.HOME,
  },
  {
    title: 'Từ điển',
    subTitle: 'Tra cứu từ điển để tìm kiếm nghĩa của từ',
    imgUrl: dictionaryIcon,
    to: ROUTES.HOME,
  },
  // {
  //   title: 'Động từ bất quy tắc',
  //   imgUrl: verbIcon,
  //   subTitle: 'Tất cả những động từ bất quy tắc trong tiếng Anh',
  //   to: ROUTES.HOME,
  // },
  {
    title: 'Ngữ pháp',
    imgUrl: grammarIcon,
    subTitle: 'Danh sách tổng hợp những cấu trúc câu trong tiếng Anh',
    to: ROUTES.HOME,
  },
  {
    title: 'Play Games',
    imgUrl: gameIcon,
    subTitle:
      'Ôn luyện kiến thức hiệu quả và đỡ nhàm chán hơn qua việc chơi game',
    to: ROUTES.HOME,
  },
  {
    title: 'Bảng xếp hạng',
    imgUrl: medalIcon,
    subTitle: 'Cùng xem thành tích của bạn bè và những người khác nhé',
    to: ROUTES.HOME,
  },
];

const FEATURE_LIST_ADMIN = [
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
]

function HomePage() {
  useTitle('Study');
  const { user } = useSelector(state => state.authReducer);
  const renderFeatureList = () => {
    if (user.roleType === 'admin') {
      return (
        FEATURE_LIST_ADMIN.map((box, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <FeatureBox
              imgUrl={box.imgUrl}
              title={box.title}
              to={box.to}
              subTitle={box.subTitle}
            />
          </Grid>
        ))
      )
    }
    return (
      FEATURE_LIST_USER.map((box, index) => (
        <Grid item xs={12} md={6} lg={4} key={index}>
          <FeatureBox
            imgUrl={box.imgUrl}
            title={box.title}
            to={box.to}
            subTitle={box.subTitle}
          />
        </Grid>
      ))
    )
  }
  return (
    <div className="container my-10">
      <Grid container spacing={3}>
        {renderFeatureList()}
      </Grid>
    </div>
  );
}

export default HomePage;
