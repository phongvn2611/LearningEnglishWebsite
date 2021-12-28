import Grid from '@material-ui/core/Grid';
import brainIcon from 'assets/icons/games/brain.png';
import correctWordIcon from 'assets/icons/games/correct-word.png';
import medalIcon from 'assets/icons/medal.png';
import jigsawIcon from 'assets/icons/games/jigsaw.png';
import millionaireIcon from 'assets/icons/games/millionaire.png';
import wordMatchingIcon from 'assets/icons/games/word-match.png';
import FeatureBox from 'components/FeatureBox';
import { ROUTES } from '../../constants/index';
import useScrollTop from 'hooks/useScrollTop';
import useTitle from 'hooks/useTitle';
import React from 'react';
import TopicBox from '../../components/TopicBox/index';
import { dictionaryRoot } from "../../components/UI/style";
import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles((theme) => ({
  ...dictionaryRoot(theme),
}));
const GAME_LIST = [
  {
    title: 'Hãy chọn từ đúng',
    subTitle:
      'Ôn tập từ vựng bằng cách chọn 1 đáp án đúng nhất trong 4 câu trả lời có nghĩa khớp với từ được cho',
    imgUrl: correctWordIcon,
    to: ROUTES.GAMES_CORRECT_WORD,
  },
  {
    title: 'Ghép từ',
    subTitle:
      'Ghép các ký tự đã cho thành một chữ có nghĩa đúng với từ đã cho',
    imgUrl: wordMatchingIcon,
    to: ROUTES.GAMES_WORD_MATCHING,
  },
  {
    title: 'Tay nhanh hơn não',
    subTitle:
      'Chọn một hình ảnh đúng với từ đã cho trong thời gian nhanh nhất nhé',
    imgUrl: brainIcon,
    to: ROUTES.GAMES_FAST_GAME,
  },
  {
    title: 'Bảng xếp hạng',
    subTitle:
      'Xem bảng xếp hạng các trò chơi và top người dùng có nhiều coin nhất',
    imgUrl: medalIcon,
    to: ROUTES.LEADERBOARD,
  },
 
];

function PlayGamesPage() {
  useTitle('Game');
  useScrollTop();
  const classes = useStyle();
  return (
    <div className={`${classes.root} english-container`}>
      <div className="flex-center-between">
        <h1 className="english-title">Games</h1>
      </div>
      <div className="english-break"></div>
      <Grid container spacing={3}>
        {GAME_LIST.map((box, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
             <TopicBox
              to={box.to}
              icon={box.imgUrl}
              title={box.title}
            />
            
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default PlayGamesPage;
