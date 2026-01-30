import { Link } from 'react-router';
import './styles.css';
import nav from '@data/nav.json';
import close_icon from '@assets/images/shared/close.svg';
import { Dispatch, SetStateAction } from 'react';

interface NavBarProps {
  visible: boolean;
  toggle: () => void;
}

const NavBar = ({ visible, toggle }: NavBarProps) => {
  // const handleCloseNav = () => {
  //   setVisible(false);
  // };

  if (!visible) {
    return;
  }
  return (
    <div className="nav_container" style={{background: 'red'}}>
      <img
        src={close_icon}
        alt="close_icon"
        className="close_icon"
        onClick={toggle}
      />
      <ol className="nav_list text8">
        {nav.map((item, index) => {
          return (
            <li key={index}>
              <Link to={`/${item.link}`} className={'link text8'}>
                {item.name.toUpperCase()}
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default NavBar;
