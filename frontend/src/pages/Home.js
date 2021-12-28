import Grid from "@material-ui/core/Grid";
import { ROUTES } from "../constants";
import useTitle from "../hooks/useTitle";
import React from "react";
import "./style/home.scss";
import Banner from "components/Banner";
import Contact from "components/Contacts";
import communicateIcon from "assets/icons/communicate.png";
import flashcardIcon from "assets/icons/flashcard.png";
import grammarIcon from "assets/icons/grammar.png";
import ipaIcon from "assets/icons/ipa.png";
import dictionaryIcon from "assets/icons/dictionary.png";
import gameIcon from "assets/icons/game.png";

function HomePage() {
  useTitle("Study");
  return (
    <div>
      <Banner />
      <section className="section section-height-2 border-0 mt-5 mb-0 pt-5">
        <div className="row text-capitalize pt-3" align="center">
          <div className="col-md-10 mx-md-auto">
            <h1 className="mb-2 mt-2 text-2">
              <p style={{ fontSize: "3.2rem", fontWeight: 800, color: "gray" }}>
                you can learn English for free!
              </p>
            </h1>
            <div className="row">
              <p style={{ fontSize: "2.2rem", fontWeight: 800, color: "blue" }}>
                Skill Group
              </p>
            </div>
          </div>
        </div>

        <div className="container mb-5 pb-4">
          <Grid container spacing={1}>
            <Grid item xs={3} md={1} lg={3} key={0}>
              <div className="featured-boxes featured-boxes-flat">
                <div className="row">
                  <div className="col-lg-3 col-sm-6">
                    <div
                      className="featured-box featured-box-primary featured-box-effect-2"
                      style={{ height: "264.8px" }}
                    >
                      <div className="box-content box-content-border-bottom">
                        <a href={ROUTES.LISTENING_TOPICS}>
                          <img src={communicateIcon} alt="" />
                          <h1 className="font-weight-normal heading">
                            Listening
                          </h1>
                        </a>
                        <p
                          className="mb-2 mt-2 text-2"
                          style={{
                            color: "#777",
                            lineHeight: "26px",
                            margin: "0 0 20px",
                          }}
                        >
                          Listening videos and answer the questions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={3} md={1} lg={3} key={0}>
              <div className="featured-boxes featured-boxes-flat">
                <div className="row">
                  <div className="col-lg-3 col-sm-6">
                    <div
                      className="featured-box featured-box-primary featured-box-effect-2"
                      style={{ height: "264.8px" }}
                    >
                      <div className="box-content box-content-border-bottom">
                        <a href={ROUTES.GRAMMAR_LEVELS}>
                          <img src={grammarIcon} alt="" />
                          <h1 className="font-weight-normal heading">
                            Grammar
                          </h1>
                        </a>
                        <p
                          className="mb-2 mt-2 text-2"
                          style={{
                            color: "#777",
                            lineHeight: "26px",
                            margin: "0 0 20px",
                          }}
                        >
                          Our guide to English grammar.
                        </p>
                        <br></br>
                        <br></br>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={3} md={1} lg={3} key={0}>
              <div className="featured-boxes featured-boxes-flat">
                <div className="row">
                  <div className="col-lg-3 col-sm-6">
                    <div
                      className="featured-box featured-box-primary featured-box-effect-2"
                      style={{ height: "264.8px" }}
                    >
                      <div className="box-content box-content-border-bottom">
                        <a href={ROUTES.WORD_TOPIC}>
                          <img src={flashcardIcon} alt="" />
                          <h1 className="font-weight-normal heading">
                            Vocabulary
                          </h1>
                        </a>
                        <p
                          className="mb-2 mt-2 text-2"
                          style={{
                            color: "#777",
                            lineHeight: "26px",
                            margin: "0 0 20px",
                          }}
                        >
                          Learn English vocabulary by topic.
                        </p>
                        <br></br>
                        <br></br>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={3} md={1} lg={3} key={0}>
              <div className="featured-boxes featured-boxes-flat">
                <div className="row">
                  <div className="col-lg-3 col-sm-6">
                    <div
                      className="featured-box featured-box-primary featured-box-effect-2"
                      style={{ height: "264.8px" }}
                    >
                      <div className="box-content box-content-border-bottom">
                        <a href={ROUTES.IPA_LIST}>
                          <img src={ipaIcon} alt="" />
                          <h1 className="font-weight-normal heading">
                            Pronunciation
                          </h1>
                        </a>
                        <p
                          className="mb-2 mt-2 text-2"
                          style={{
                            color: "#777",
                            lineHeight: "26px",
                            margin: "0 0 20px",
                          }}
                        >
                          Tricky English pronunciation. With listening practice.
                        </p>
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
                <p
                  style={{ fontSize: "2.2rem", fontWeight: 800, color: "blue" }}
                >
                  Tool Group
                </p>
              </div>
            </div>
          </div>

          <Grid container spacing={1}>
            {/* <Grid item xs={3} md={1} lg={3} key={0}>
              <div className="featured-boxes featured-boxes-flat">
                <div className="row">
                  <div className="col-lg-3 col-sm-6">
                    <div
                      className="featured-box featured-box-primary featured-box-effect-2"
                      style={{ height: "264.8px" }}
                    >
                      <div className="box-content box-content-border-bottom">
                        <a href={ROUTES.IPA_LIST}>
                          <img src={dictionaryIcon} alt="" />
                          <h1 className="font-weight-normal heading">
                            Dictionary
                          </h1>
                        </a>
                        <p
                          className="mb-2 mt-2 text-2"
                          style={{
                            color: "#777",
                            lineHeight: "26px",
                            margin: "0 0 20px",
                          }}
                        >
                          Tricky English pronunciation. With listening practice.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Grid> */}

            <Grid item xs={3} md={1} lg={3} key={1}>
              <div className="featured-boxes featured-boxes-flat">
                <div className="row">
                  <div className="col-lg-3 col-sm-6">
                    <div
                      className="featured-box featured-box-primary featured-box-effect-2"
                      style={{ height: "264.8px" }}
                    >
                      <div className="box-content box-content-border-bottom">
                        <a href={ROUTES.GAMES_HOME}>
                          <img src={gameIcon} alt="" />
                          <h1 className="font-weight-normal heading">
                            Play Games
                          </h1>
                        </a>
                        <p
                          className="mb-2 mt-2 text-2"
                          style={{
                            color: "#777",
                            lineHeight: "26px",
                            margin: "0 0 20px",
                          }}
                        >
                          Play games to review.
                        </p>
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
      <Contact />
    </div>
  );
}

export default HomePage;
