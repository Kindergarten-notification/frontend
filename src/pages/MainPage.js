/* Main.js
 * - 메인 페이지
 */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Banner from "../components/banner/Banner";
import Header from "../components/header/Header";
import { getMainPage } from "../_actions/actions";

import homeImg from "../static/img/Netflix-avatar.png";
import "./style/mainpage.css";

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
    console.log(k.id);
    setCurrPage(k.id);
    history.push("/detail", k);
  }

  return (
    <div className="main">
      <Header />
      <Banner />
      <div className="main-kinders-header">
        <h5>유치원 목록</h5>
      </div>
      <div className="main-kinders">
        {kinders.length > 0 ? (
          kinders.map((k) => (
            <div className="main-kinderInfo">
              <div onClick={() => handleKinderInfo(k)}>
                <div id="main-kinderInfo-name">{k.kinder_name}</div>
                <div className="main-kinderInfo-detail">
                  <p id="main-kinderInfo-addr">{k.addr}</p>
                  <p id="main-kinderInfo-tel_no">{k.tel_no}</p>
                </div>
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
