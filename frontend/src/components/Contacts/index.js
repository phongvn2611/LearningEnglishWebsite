
import React, { useState} from "react";
import { useSelector } from "react-redux";
import '../Contacts/contact.scss';
import logo from "assets/images/logo2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFacebookSquare, FaMailBulk, FaFacebookMessenger, FaTwitter } from "react-icons/fa";



function Contact() {
    const { isAuth, user } = useSelector((state) => state.authReducer);
   
  return (
      <div id="dynoContact">
    { user && user.roleType !=="admin" &&  user.roleType !=="instructor" &&(
    <footer id="footer">
    <div className="container">
    <div className="footer-ribbon">
        <span>Still haven't found what you're looking for?</span>
        </div>
    <div className="row py-5 my-4">

        <h4>You'd better let us know...</h4>
              <div className="container">
            <a href="https://www.facebook.com/tranphuonglinh1507/" target="_blank" title="Learn English on Facebook"><FaFacebookSquare style={{height:"30px", width:"30px",color:"#fffff5"}}/></a>
            <span>          </span>
            <a href="https://www.facebook.com/tranphuonglinh1507/" target="_blank" title="Learn English on Twitter"><FaMailBulk style={{height:"30px", width:"30px", color:"#fffff5"}}/></a>
            <span>          </span>
            <a href="https://www.facebook.com/tranphuonglinh1507/" target="_blank" title="Learn English on Twitter"><FaFacebookMessenger style={{height:"30px", width:"30px", color:"#fffff5"}}/></a>
            <span>          </span>
            <a href="https://www.facebook.com/tranphuonglinh1507/" target="_blank" title="Learn English on Twitter"><FaTwitter style={{height:"30px", width:"30px", color:"#fffff5"}}/></a>

            </div>   
               
    <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">

            </div>
    <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
    <div className="contact-details">								
   				
    </div>						
    </div>
        </div>
    </div>
    <div className="footer-copyright">
        <div className="container">
            <div className="row">
                <div className="col-md-1">
                <a href="//www.learnenglish.de/" className="logo">
                <img className="img-responsive" src={logo}/>
                </a>
                </div>
                {/* <div className="col-md-7">
                    <span style={{fonSize:"30px", color:"#fffff5"}}>© Copyright Learn English Network - All Rights Reserved</span>
                    <br/>
                    <span style={{fonSize:"30px", color:"#fffff5"}}>  These pages are best viewed using the latest version of Chrome, Firefox, or IE.</span>
                    <br/>
                    <span style={{fonSize:"30px", color:"#fffff5"}}>  If you have any problems, please let us know.</span>
                </div> */}
                <div className="col-md-4">
                    <nav id="sub-menu">
                    <ul>
                        
                    </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    </footer>
    )}
    </div>
  );
}

export default Contact;


