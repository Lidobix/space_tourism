import React from 'react';
import NavBar from '../navbar';
import logo from '@assets/images/shared/logo.svg';
import burgerIcon from '@assets/images/shared/burger.svg';
import closeIcon from '@assets/images/shared/close.svg';
import './styles.css';

const Header = () => {
  return (
    <div className="header_container">
      {/* <div className="logo_container"> */}
      <img src={logo} alt="logo" className="logo" />
      {/* </div> */}
      <img src={burgerIcon} alt="burger" className="burger_icon" />
      {/* <img src={closeIcon} alt="close" className="close_icon" /> */}
      {/* <NavBar></NavBar> */}
    </div>
  );
};

export default Header;
