/* Main.js
 * - 메인 페이지
 */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FaHome } from 'react-icons/fa';

import Banner from '../components/banner/Banner';
import Header from '../components/header/Header';
import { getMainPage } from '../_actions/actions';

import homeImg from '../static/img/Netflix-avatar.png';
import './style/mainpage.css';

// import "./mainpage.css";

const MainPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [kinders, setKinders] = useState([]);
  const [currPage, setCurrPage] = useState(1);

  useEffect(() => {
    const payload = dispatch(getMainPage(currPage)).payload; // 유치원 리스트 1~
    // Promise object 출력 (비동기 처리에 활용되는 객체)
    payload.then((data) => {
      setKinders(data);
      data.map((k) => {
        console.log(k);
        console.log(k.kinder_name);
      });
    });
  }, []);

  function handleKinderInfo(k) {
    history.push('/detail', k.id);
  }

  function handleHomePage(k) {
    history.push('/home', k);
  }

  return (
    <div className="main">
      <Header />
      <Banner />
      <div className="main-kinders-header">
        <h4>
          <b>유치원 목록</b>
        </h4>
      </div>

      <div className="main-kinders">
        {kinders.length > 0 ? (
          kinders.map((k) => (
            <div className="main-kinderInfo">
              <span id="minihomeicon" onClick={() => handleHomePage(k)}>
                <FaHome />
              </span>
              <div
                id="main-kinderInfo-name"
                onClick={() => handleKinderInfo(k)}
              >
                {k.kinder_name}
              </div>
              <div className="main-kinderInfo-detail">
                <p id="main-kinderInfo-addr">{k.addr}</p>
                <p id="main-kinderInfo-tel_no">{k.tel_no}</p>
              </div>

              {/* <div className="main-kinderInfo-img">
                <img id="main-kinderInfo-img" src={homeImg} alt="HOMEPAGE" />
              </div> */}
            </div>
          ))
        ) : (
          <div></div>
        )}
        <ul></ul>
      </div>
    </div>
  );
};

export default MainPage;
