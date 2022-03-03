import React, { useState , useContext } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import AuthContext from "../../contexts/authcontext";
import useAuth from '../../hooks/useAuth';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const {isAuth} = useAuth()
  const { logout } = useContext(AuthContext);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar1'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>.
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='about-us' className='nav-links' onClick={closeMobileMenu}>
            من نحن
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='realestate'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              العقارات<i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/Appraisal'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              تقييم عقاري
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/Management'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              ادارة الاملاك
            </Link>
          </li>
          <li>
          {!isAuth?
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}>
              انشاء حساب
            </Link>
          :
          <button
              
              className='nav-links-mobile'
              onClick={()=>logout()}>
          تسجيل خروج
            </button>
          }
          </li>
        </ul>
        {!isAuth? <Button /> : <button
              
              className='btn2'
              onClick={()=>logout()}>
          تسجيل خروج
            </button>
            }
      </nav>
    </>
  );
}

export default Navbar;
