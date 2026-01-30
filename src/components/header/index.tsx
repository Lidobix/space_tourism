import NavBar from '../navbar';
import homeIcon from '@assets/images/shared/logo.svg';
import burgerIcon from '@assets/images/shared/burger.svg';
import './styles.css';

import { useNav } from '@contexts/navigationContext';

const Header = () => {
  const { isVisible, toggleNav } = useNav();
  // const [toggleNav, setToggleNav] = useState(false);

  // const handleToggleNav = () => {
  //   setToggleNav(!toggleNav);
  // };

  return (
    <div className="header_container">
      <img src={homeIcon} alt="home_icon" className="home_icon" />
      <img
        src={burgerIcon}
        alt="burger"
        className="burger_icon"
        onClick={toggleNav}
      />
      <NavBar visible={isVisible} toggle={toggleNav}></NavBar>
    </div>
  );
};

export default Header;
