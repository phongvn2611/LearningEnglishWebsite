import WordMatchGameData from 'components/PlayGames/WordMatch/data';
import useCloseNavigation from 'hooks/useCloseNavigation';
import useTitle from 'hooks/useTitle';
import React from 'react';
import useCloseContact from 'hooks/useCloseContact';

function WordMatchGamePage() {
  useTitle('Game ghép từ (Word matching game)');
   useCloseNavigation();
   useCloseContact();
  return <WordMatchGameData />;
}

export default WordMatchGamePage;
