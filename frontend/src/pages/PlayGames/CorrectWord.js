
import CorrectWordData from 'components/PlayGames/CorrectWord/data';
import useCloseNavigation from 'hooks/useCloseNavigation';
import useTitle from 'hooks/useTitle';
import React from 'react';
import useCloseContact from 'hooks/useCloseContact';

function CorrectWordPage() {
  useTitle("Game hãy chọn từ đúng (Let's choose the correct word)");
   useCloseNavigation();
   useCloseContact();

  return <CorrectWordData />;
}

export default CorrectWordPage;
