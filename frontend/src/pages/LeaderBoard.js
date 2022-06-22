import medalIcon from 'assets/icons/medal.png';
import LeaderBoardData from 'components/LeaderBoard/data';
import { HIGHSCORE_NAME } from 'constants/game';
import useTitle from 'hooks/useTitle';
import './style/leader-board.scss';
import React from 'react';

const COLORS = ['#847AD1', '#7AD18A', '#E06B96', '#36C0CE', '#DB883E'];

function LeaderBoardPage() {
  useTitle('Bảng xếp hạng');

  return (
    <div className="container">
      <div className="leaderboard">
        <h1 className="leaderboard-title flex-center">
          <img src={medalIcon} alt="Icon" className="leaderboard-icon" />
          BẢNG XẾP HẠNG
        </h1>

        <div className="english-break"></div>

        <div className="leaderboard-grid">
          <LeaderBoardData
            title="Top người dùng nhiều Coin nhất"
            color={COLORS[0]}
           // nameId={HIGHSCORE_NAME.TOP_COIN}
            unit="$"
            tooltip="Top những người dùng có số coin nhiều nhất"
            nameGame={HIGHSCORE_NAME.TOP_COIN}
          />
          <LeaderBoardData
            title="Top Hãy chọn từ đúng"
            color={COLORS[1]}
          //  nameId={HIGHSCORE_NAME.CORRECT_GAME_RIGHT}
            unit="câu"
            tooltip="Top những người dùng có số câu đúng nhiều nhất trong game Hãy chọn từ đúng"
            nameGame={HIGHSCORE_NAME.CORRECT_WORD}
          />
          <LeaderBoardData
            title="Top Ghép từ"
            color={COLORS[2]}
           // nameId={HIGHSCORE_NAME.CORRECT_GAME_RIGHT_CONSECUTIVE}
            unit="câu"
            tooltip="Top những người dùng có số câu đúng nhiều nhất trong game Ghép từ"
            nameGame={HIGHSCORE_NAME.WORD_MATCH}
          />
          <LeaderBoardData
            title="Top tay nhanh hơn não"
            color={COLORS[3]}
          //  nameId={HIGHSCORE_NAME.FAST_GAME}
            unit="điểm"
            tooltip="Top những người dùng có điểm cao nhất trong game Tay nhanh hơn não"
            nameGame={HIGHSCORE_NAME.FAST_GAME}
          />
        </div>
      </div>
    </div>
  );
}

export default LeaderBoardPage;
