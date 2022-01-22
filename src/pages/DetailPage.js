/* Auth.js
 * - 상세정보 페이지
 */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getDetailPage } from "../_actions/actions";
import "./style/detailpage.css";

const DetailPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const kinder_id = location.state;

  // kinder 객체 안에 detail 정보 있습니다.
  const [kinder, setKinder] = useState({});

   
  useEffect(() => {
    const payload = dispatch(getDetailPage(kinder_id)).payload;
    payload.then((data) => {
      console.log(data.kinder_name);
      setKinder(data);
    });
  }, []);

  const handleHomePage = () => {
    history.push("/home", kinder);
  };

  return (
    <div className="detail">
      <div className="detail-header">
        <h5>유치원 및 어린이집 세부 정보</h5>
      </div>
      <div className="detail-info">
        <div className="detail-left-box">
          <div className="detail-kinder-header">
            <div className="icon">
                <img className="babyicon" alt="baby" src="img/babyicon.png" />
            </div>
            <h4>{kinder.kinder_name}</h4>
          </div>
          <button className="minihompage-button" onClick={handleHomePage}>미니홈페이지 바로가기</button>
        </div>
        <div className="detail-info-list">
          <div>
            <ul className="detail-list">
              <li>
                <i className="detail-list-menu1">기본 정보</i>
                <span className="detail-list-contents"></span>
              </li>
              <li>
                <i className="detail-list-menu">전화번호</i>
                <span className="detail-list-contents">{kinder.tel_no}</span>
              </li>
              <li>
                <i className="detail-list-menu">운영시간</i>
                <span className="detail-list-contents">{kinder.oper_time}</span>
              </li>
              <li>
                <i className="detail-list-menu">원장명</i>
                <span className="detail-list-contents">{kinder.ldgr_name}</span>
              </li>
              <li>
                <i className="detail-list-menu">주소</i>
                <span className="detail-list-contents">{kinder.addr}</span>
              </li>
              <li>
                <i className="detail-list-menu">홈페이지</i>
                <span className="detail-list-contents">{kinder.hp_addr}</span>
              </li>
              <li>
                <i className="detail-list-menu1">통학차량</i>
                <span className="detail-list-contents">{kinder.vhcl_oprn_yn}</span>
              </li>
              <li>
                <i className="detail-list-menu1">차량 운행 대수</i>
                <span className="detail-list-contents">{kinder.opra_vhcnt}</span>
              </li>
            </ul>
          </div>
          <div id="myMap"></div> 
        </div>
      </div>
    </div>
  );
};

export default DetailPage;