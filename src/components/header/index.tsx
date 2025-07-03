import NavBar from '../navbar';
import homeIcon from '@assets/images/shared/logo.svg';
import burgerIcon from '@assets/images/shared/burger.svg';
import './styles.css';

const Header = () => {
  return (
    <div className="header_container">
      <img src={homeIcon} alt="home_icon" className="home_icon" />
      <img src={burgerIcon} alt="burger" className="burger_icon" />
      <NavBar></NavBar>
    </div>
  );
};

export default Header;
