import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { getAlbum, getAlbums } from '../_actions/actions';

import '../../src/components/style/style.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const kinder = location.state;
  const [albums, setAlbums] = useState([{}]);

  useEffect(() => {
    const payload = dispatch(getAlbums(kinder.id)).payload; // album list
    payload.then((data) => {
      setAlbums(data);
      console.log(data);
    });
  }, []);

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
      </div>

      <div className="home-main" style={{ borderRadius: '8px' }}>
        <p>
          <b>원장님 인사말</b>
        </p>
        <p>
          안녕하십니까 학부모님들 소중한 아이들을 {kinder.kinder_name}에
          보내주셔서 정말 감사합니다. 행복 유아교육을 위해 우리유치원에서는,
          자연을 품고 꿈을 키우는 아이들! 사랑과 전문성을 지닌 교원!
          격려해주시고 함께하는 부모님들! 모두가 한마음 되어 홀로 높아짐보다는
          함께 넓어짐을 향하는 교육을 실천하고자 합니다. 우리유치원 홈페이지가
          교육에 관심 있는 모든 분들의 만남과 정보 교류의 장이 되기를
          소망합니다. 감사합니다.
        </p>
      </div>
      <div>{/** album list */}</div>
    </div>
  );
};

export default HomePage;
