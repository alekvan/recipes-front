import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer-wrapper'>
      <div className='footer-resize'>
        <div className='footer-logo'>
          <div className='footer-logo-baby'>Baby's</div>
          <div className='footer-logo-food'>food place</div>
        </div>
        <div className='footer-nav'>
          <Link to='/breakfast/1'>Breakfast</Link>
          <FontAwesomeIcon icon={faCircle} className='footer-nav-icons' />
          <Link to='/brunch/1'>Brunch</Link>
          <FontAwesomeIcon icon={faCircle} className='footer-nav-icons' />
          <Link to='/lunch/1'>Lunch</Link>
          <FontAwesomeIcon icon={faCircle} className='footer-nav-icons' />
          <Link to='/dinner/1'>Dinner</Link>
        </div>
        <div className='footer-copyright'>
          <p>Baby’s Food Place copyright © 2021</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
