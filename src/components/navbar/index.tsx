import { Link } from 'react-router';
import './styles.css';

const NavBar = () => {
  return (
    <div
      style={
        {
          // position: 'absolute',
          // top: 100,
          // background: 'green',
          // zIndex: 100,
        }
      }
    >
      <Link to={'/'}>Home</Link>
      <Link to={'/destination'}>Destination</Link>
      <Link to={'/crew'}>Crew</Link>
      <Link to={'/technology'}>Technology</Link>
      NAVBAR
    </div>
  );
};

export default NavBar;
