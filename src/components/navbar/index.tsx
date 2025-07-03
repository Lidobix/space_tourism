import { Link } from 'react-router';
import './styles.css';
import nav from '@data/nav.json';
import close_icon from '@assets/images/shared/close.svg';

const NavBar = () => {
  return (
    <div className="nav_container">
      <img src={close_icon} alt="close_icon" className="close_icon" />
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
