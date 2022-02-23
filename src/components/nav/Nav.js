import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../style/style.css';
import LogoImg from '../../static/img/nav-logo.png';

const Nav = () => {
  const [show, setShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else setShow(false);
  };

  // scroll listener
  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => {
      // useEffect callback function
      window.removeEventListener('scroll', transitionNavBar);
    };
  }, []);

  const handleJoin = () => {
    console.log(history);
    history.push('/auth/join');
  };

  const handleLogin = () => {
    console.log(history);
    history.push('/auth/login');
  };

  const handleMain = () => {
    history.push('/');
  };

  return (
    <div className={`nav ${show && 'nav_white'}`}>
      <img onClick={handleMain} className="nav-logo" src={LogoImg} alt="LOGO" />
      <button onClick={handleJoin} className="nav-join">
        <span>Join</span>
      </button>
      <button onClick={handleLogin} className="nav-login">
        <span>Login</span>
      </button>
    </div>
  );
};

export default Nav;
