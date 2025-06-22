import React from 'react';
import './styles.css';
import { Title, Introduction, Description } from '../../components/description';

const HomeScreen = () => {
  return (
    <div className="page main_container">
      <div className="description_container">
        <div className="description">
          <Introduction content="SO, YOU WANT TO TRAVEL TO"></Introduction>

          <Title title="SPACE"></Title>

          <Description
            content="Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!"
          ></Description>
        </div>
        <div className="explore_button">
          <span>EXPLORE</span>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
