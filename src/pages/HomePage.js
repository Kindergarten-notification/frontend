import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getAlbum, getAlbums } from "../_actions/actions";

import "./style/homepage.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const kinder = location.state;
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const payload = dispatch(getAlbums(kinder.id)).payload; // album list
    payload.then((data) => {
      setAlbums(data);
      console.log(data);
    });
  });

  const handleButtons = (e) => {
    history.push(`/home/${e.target.id}`, kinder);
  };

  return (
    <div>
      <div className="home-header">
        <h5>{kinder.kinder_name}</h5>
      </div>
      <div className="home-buttons-div">
        <button className="home-buttons"> 홈 </button>
        <button className="home-buttons" id="post" onClick={handleButtons}>
          공지사항
        </button>
        <button className="home-buttons" id="album" onClick={handleButtons}>
          앨범
        </button>
        <button
          className="home-buttons"
          id="notification"
          onClick={handleButtons}
        >
          게시판
        </button>
        <div className="home-main" style={{ borderRadius: "8px" }}>
          <p>원장님 인사말</p>
          <p>
            안녕하십니까 학부모님들 소중한 아이들을 {kinder.kinder_name}에
            보내주셔서 정말 감사합니다.
            ㅇ러ㅏ뫄롭ㅁㅈㄹ미ㅏㄹ어ㅏㅁ너린ㅇㄹㅇㄻㅇㄴ라ㅓ리ㅗㅟㅏㅇ럼ㅀㄶㅎㄹㅇㅎㅎㄴㄴㄴㄶㄶㅇ
            ㅎㄴㅇㅎㄴㅇㄹㄴㄹㅇㅎㅇㄶㄹ호마ㅓ롲ㄷ목ㄷㅈㄱㄺㄷ짐러ㅗㅑㅏㄷㅈㅁ뢈돟ㅈㄴ렴랃ㅁ저ㅗㄻㅈㄷㅎㄷ졀핟묘젿ㄹㅇ.ㅜㅏㄹ;ㄷㅈㅎㄹ
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
