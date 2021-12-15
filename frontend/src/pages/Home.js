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
import { Link } from 'react-router-dom';
import './style/home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faArchive, faAtom,faBook, faBookReader, faCoffee, faLanguage } from '@fortawesome/free-solid-svg-icons'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'



const FEATURE_LIST = [
  {
    title: 'Bảng phiên âm (IPA)',
    subTitle:
      'Luyện nghe, phát âm chuẩn với 44 âm trong bảng phiên âm quốc tế IPA',
    imgUrl: ipaIcon,
    to: ROUTES.IPA_LIST,
  },
  {
    title: 'Từ vựng',
    subTitle:
      'Danh sách từ vựng được phân loại theo cấp độ, loại từ, ...',
    imgUrl: flashcardIcon,
    to: ROUTES.WORD_TOPIC,
  },
  {
    title: "Luyện nghe",
    subTitle: 'Rèn luyện kỹ năng nghe thông qua các video và các bài quiz rèn luyện',
    imgUrl: communicateIcon,
    to: ROUTES.LISTENING_TOPICS,
  },
  {
    title: 'Từ điển',
    subTitle: 'Tra cứu từ điển để tìm kiếm nghĩa của từ',
    imgUrl: dictionaryIcon,
    to: ROUTES.HOME,
  },
  {
    title: 'Ngữ pháp',
    imgUrl: grammarIcon,
    subTitle: 'Danh sách tổng hợp những cấu trúc câu trong tiếng Anh',
    to: ROUTES.GRAMMAR_LEVELS,
  },
  {
    title: 'Play Games',
    imgUrl: gameIcon,
    subTitle:
      'Ôn luyện kiến thức hiệu quả và đỡ nhàm chán hơn qua việc chơi game',
    to: ROUTES.GAME,
  },
  {
    title: 'Bảng xếp hạng',
    imgUrl: medalIcon,
    subTitle: 'Cùng xem thành tích của bạn bè và những người khác nhé',
    to: ROUTES.HOME,
  },
];


function HomePage() {
  useTitle('Study');
//const classes= useStyle();
  return (
    <div>
    <section className="section section-height-2 border-0 mt-5 mb-0 pt-5">
      <div className="row text-capitalize pt-3" align="center">
						<div className="col-md-10 mx-md-auto">
							<h1 className="mb-2 mt-2 text-2">
								<p style={{fontSize: '3.2rem', fontWeight:800, color:'gray'}}> you can learn English for free!</p>
							</h1>
							<div className="row">
							<p style={{fontSize: '2.2rem', fontWeight:800, color:'blue'}}>
								Skill Group 
							</p>
							</div>
						</div>
			</div>

    <div className="container mb-5 pb-4" >
    <Grid container spacing={1} >
        <Grid item xs={3} md={1} lg={3} key ={0}>		
        <div className="featured-boxes featured-boxes-flat">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="featured-box featured-box-primary featured-box-effect-2" style={{height: '264.8px'}}>
                <div className="box-content box-content-border-bottom">
                  <a href={ROUTES.LISTENING_TOPICS}><i className="icon-featured" ><FontAwesomeIcon icon={faCoffee} color='black' /></i>
                    <h1 className="font-weight-normal" style={{color:"#000066"}}>Listening</h1>
                  </a>
                  <p className="mb-2 mt-2 text-2">Listening videos and answer the questions.</p>
                </div>
              </div>
            </div>
          
          </div>
      </div>
      </Grid>

      <Grid item xs={3} md={1} lg={3} key ={0}>		
        <div className="featured-boxes featured-boxes-flat">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="featured-box featured-box-primary featured-box-effect-2" style={{height: '264.8px'}}>
                <div className="box-content box-content-border-bottom">
                  <a href={ROUTES.GRAMMAR_LEVELS}><i className="icon-featured" ><FontAwesomeIcon icon={faBook} color='black' /></i>
                    <h1 className="font-weight-normal" style={{color:"#0000CC"}}>Grammar</h1>
                  </a>
                  <p className="mb-2 mt-2 text-2">Your guide to English grammar.</p>
                  <br></br>
                  <br></br>
                </div>
              </div>
            </div>
          
          </div>
      </div>
      </Grid>

      <Grid item xs={3} md={1} lg={3} key ={0}>		
        <div className="featured-boxes featured-boxes-flat">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="featured-box featured-box-primary featured-box-effect-2" style={{height: '264.8px'}}>
                <div className="box-content box-content-border-bottom">
                  <a href={ROUTES.WORD_TOPIC}><i className="icon-featured" ><FontAwesomeIcon icon={faBookOpen} color='black' /></i>
                    <h1 className="font-weight-normal" style={{color:"#3366FF"}}>Vocabulary</h1>
                  </a>
                  <p className="mb-2 mt-2 text-2">Learn English vocabulary by topic.</p>
                  <br></br>
                  <br></br>
                </div>
              </div>
            </div>
          
          </div>
      </div>
      </Grid>

      <Grid item xs={3} md={1} lg={3} key ={0}>		
        <div className="featured-boxes featured-boxes-flat">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="featured-box featured-box-primary featured-box-effect-2" style={{height: '264.8px'}}>
                <div className="box-content box-content-border-bottom">
                  <a href={ROUTES.IPA_LIST}><i className="icon-featured" ><FontAwesomeIcon icon={faAddressBook} color='black' /></i>
                    <h1 className="font-weight-normal" style={{color:"#3399FF"}}>Pronunciation</h1>
                  </a>
                  <p className="mb-2 mt-2 text-2">Tricky English pronunciation. With listening practice.</p>
                  
                </div>
              </div>
            </div>
          
          </div>
      </div>
      </Grid>
    </Grid>

  <div className="row text-capitalize pt-3" align="center">
						<div className="col-md-10 mx-md-auto">
						
							<div className="row">
							<p style={{fontSize: '2.2rem', fontWeight:800, color:'blue'}}>
								Tool Group 
							</p>
							</div>
						</div>
	</div>

    <Grid container spacing={1}>       
    <Grid item xs={3} md={1} lg={3} key ={0}>		
      <div className="featured-boxes featured-boxes-flat">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="featured-box featured-box-primary featured-box-effect-2" style={{height: '264.8px'}}>
              <div className="box-content box-content-border-bottom">
                <a href={ROUTES.IPA_LIST}><i className="icon-featured" ><FontAwesomeIcon icon={faLanguage} color='black' /></i>
                  <h1 className="font-weight-normal" style={{color:"#3199FF"}}>Dictionary</h1>
                </a>
                <p className="mb-2 mt-2 text-2">Tricky English pronunciation. With listening practice.</p>
                
              </div>
            </div>
          </div>        
        </div>
    </div>
    </Grid>

    <Grid item xs={3} md={1} lg={3} key ={1}>		
      <div className="featured-boxes featured-boxes-flat">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="featured-box featured-box-primary featured-box-effect-2" style={{height: '264.8px'}}>
              <div className="box-content box-content-border-bottom">
                <a href={ROUTES.GAMES_HOME}><i className="icon-featured" ><FontAwesomeIcon icon={faAtom} color='black' /></i>
                  <h1 className="font-weight-normal" style={{color:"#3355FF"}}>Play Games</h1>
                </a>
                <p className="mb-2 mt-2 text-2">Play games to review.</p>
                <br></br>
                  <br></br>
              </div>
            </div>
          </div>        
        </div>
    </div>
    </Grid>

  </Grid>
 </div>
 </section>
</div>
       
  );
}

export default HomePage;
