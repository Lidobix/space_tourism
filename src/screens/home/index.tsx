import React, { useRef } from 'react';
import './styles.css';
import { Title, Introduction, Description } from '../../components/description';
import Header from '@components/header';
// import { changeClass, ChangeClassValue } from '@utils/index';

const HomeScreen = () => {
  const box = useRef<HTMLDivElement>(null);

  const toggleBox = () => {
    if (box && box.current !== null) {
      // const classes: ChangeClassValue = { classToRemove: '', classToAdd: '' };
      if (box.current.classList.contains('visible')) {
        // classes.classToRemove = 'visible';
        // classes.classToAdd = 'not_visible';
        box.current.classList.add('not_visible');
        box.current.classList.remove('visible');
      } else {
        // classes.classToRemove = 'not_visible';
        // classes.classToAdd = 'visible';

        box.current.classList.remove('not_visible');
        box.current.classList.add('visible');
      }
      // changeClass(classes);
    }
  };

  return (
    <div className="main_container">
      <Header />
      <div className="description_container">
        <Introduction content="SO, YOU WANT TO TRAVEL TO"></Introduction>

        <Title title="SPACE"></Title>

        <Description
          content="Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!"
        ></Description>

        <div className="explore_button_wrapper">
          <div className="explore_button">
            <span className="explore_text text4">EXPLORE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
