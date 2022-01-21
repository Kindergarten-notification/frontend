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
      <script
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=346d4bb4e554014036caf8ecde259a0f"
      ></script>
      <div className="detail-header">
        <h5>유치원 및 어린이집 세부 정보</h5>
      </div>
      <div className="detail-info">
        <div className="detail-left-box">
          <div className="detail-kinder-header">
            <h4>{kinder.kinder_name}</h4>
          </div>
          <button onClick={handleHomePage}>Home</button>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
