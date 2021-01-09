import React from "react";
import "./popular.css";

const Popular = () => {
  return (
    <div className="popular">
      <div className="popular__head">
        <h3 className="popular__heading">
          <span className="popular__heading--1">Popular</span>
          <span className="popular__heading--2">This Week</span>
        </h3>
        <div className="popular__options">
          <i className="fa fa-ellipsis-h"></i>
        </div>
      </div>
      <div className="popular__post">
        <div className="popular__post__linear">
          <div className="popular__post__linear--box popular__post__linear--box-1">
            <div className="popular__post__linear--box--info">
              <div className="popular__post__linear--box--data">
                <div className="popular__post__linear--box--data--icon popular__post__linear--box-1--data--icon"></div>
                <div className="popular__post__linear--box--data--text">
                  <div className="popular__post__linear--box--data--text--heading">
                    Rishabh Tyagi
                  </div>
                  <p className="popular__post__linear--box--data--text--info">
                    &#64; rishabh
                  </p>
                </div>
              </div>
              <div className="popular__post__linear--box--readtime">
                <h3>82 min</h3>
              </div>
            </div>
            <div className="popular__post__linear--box--description popular__post__linear--box-1--description">
              <p className="popular__post__linear--box--description--text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                cupiditate beatae vero similique.
              </p>
            </div>
          </div>
          <div className="popular__post__linear--box popular__post__linear--box-2">
            <div className="popular__post__linear--box--info">
              <div className="popular__post__linear--box--data">
                <div className="popular__post__linear--box--data--icon popular__post__linear--box-2--data--icon"></div>
                <div className="popular__post__linear--box--data--text">
                  <div className="popular__post__linear--box--data--text--heading">
                    Amit Kumar
                  </div>
                  <p className="popular__post__linear--box--data--text--info">
                    &#64; kumarAmit
                  </p>
                </div>
              </div>
              <div className="popular__post__linear--box--readtime">
                <h3>73 min</h3>
              </div>
            </div>
            <div className="popular__post__linear--box--description popular__post__linear--box-2--description">
              <p className="popular__post__linear--box--description--text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                cupiditate beatae vero similique.
              </p>
            </div>
          </div>
        </div>

        <div className="popular__post__grid">
          <div className="popular__post__grid--row-1">
            <div className="popular__post__grid--row-1--info">
              <div className="popular__post__grid--row-1--data">
                <div className="popular__post__grid--row-1--data--icon"></div>
                <div className="popular__post__grid--row-1--data--text">
                  <div className="popular__post__grid--row-1--data--text--heading">
                    Rishabh Tyagi
                  </div>
                  <p className="popular__post__grid--row-1--data--text--info">
                    &#64; rishabh
                  </p>
                </div>
              </div>
              <div className="popular__post__grid--row-1--readtime">
                <h3>82 min</h3>
              </div>
            </div>
            <div className="popular__post__grid--row-1--description">
              <p className="popular__post__grid--row-1--description--text">
                Consectetur adipisicing elit. Ab, iusto Lorem ipsum dolor sit
                amet.
              </p>
            </div>
          </div>
          <div className="popular__post__grid--row-2">
            <div className="popular__post__grid--row-2-col popular__post__grid--row-2-col-1">
              <div className="popular__post__grid--row-2-col--info">
                <div className="popular__post__grid--row-2-col--data">
                  <div className="popular__post__grid--row-2-col--data--icon popular__post__grid--row-2-col-1--data--icon"></div>
                  <div className="popular__post__grid--row-2-col--data--text">
                    <div className="popular__post__grid--row-2-col--data--text--heading">
                      Rithik Prakash
                    </div>
                    <p className="popular__post__grid--row-2-col--data--text--info">
                      &#64; rithik55
                    </p>
                  </div>
                </div>
                <div className="popular__post__grid--row-2-col--readtime">
                  <h3>50 min</h3>
                </div>
              </div>
              <div className="popular__post__grid--row-2-col--description popular__post__grid--row-2-col-1--description">
                <p className="popular__post__grid--row-2-col--description--text">
                  Consectetur adipisicing elit. Ab, ipsum dolor.
                </p>
              </div>
            </div>
            <div className="popular__post__grid--row-2-col popular__post__grid--row-2-col-2">
              <div className="popular__post__grid--row-2-col--info">
                <div className="popular__post__grid--row-2-col--data">
                  <div className="popular__post__grid--row-2-col--data--icon popular__post__grid--row-2-col-2--data--icon"></div>
                  <div className="popular__post__grid--row-2-col--data--text">
                    <div className="popular__post__grid--row-2-col--data--text--heading">
                      Nandinee Jain
                    </div>
                    <p className="popular__post__grid--row-2-col--data--text--info">
                      &#64; jainNan
                    </p>
                  </div>
                </div>
                <div className="popular__post__grid--row-2-col--readtime">
                  <h3>69 min</h3>
                </div>
              </div>
              <div className="popular__post__grid--row-2-col--description popular__post__grid--row-2-col-2--description">
                <p className="popular__post__grid--row-2-col--description--text">
                  Consectetur adipisicing elit. Ab, ipsum dolor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
