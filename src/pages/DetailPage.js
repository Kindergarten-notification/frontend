/* Auth.js
 * - 상세정보 페이지
 */
import React from "react";
import { useLocation } from "react-router-dom";
import "./style/detailpage.css";

const DetailPage = () => {
  const location = useLocation();

  const kinder = location.state;
  console.log(kinder);

  return (
    <div className="detail">
      <div className="detail-header">
        <h5>유치원 및 어린이집 세부 정보</h5>
      </div>
      <div className="detail-info">
        <div className="detail-left-box">
          <div className="detail-kinder-header">
            <h4>{kinder.kinder_name}</h4>
          </div>
        </div>
        <div className="detail-right-box"></div>
      </div>
    </div>
  );
};

export default DetailPage;
