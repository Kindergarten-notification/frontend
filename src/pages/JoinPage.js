import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { joinUser } from '../_actions/actions';
import '../../src/components/style/style.css';

const JoinPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [userInfo, setUserInfo] = useState({
    email: '',
    name: '',
    nickname: '',
    password: '',
    kinder_id: 1,
    role: '',
  });

  const handleJoinSubmit = (e) => {
    const payload = dispatch(joinUser(userInfo)).payload;
    console.log(payload);
    history.push('/auth/login');
  };

  const handleJoinInfo = (e) => {
    const newUserInfo = {
      ...userInfo,
      [e.target.name]: e.target.value,
    };
    // kinder 정보
    newUserInfo.kinder_id = 1;

    setUserInfo(newUserInfo);
  };

  return (
    <div className="title">
      <p>회원가입</p>

      <div className="role">
        <div>
          <label id="parents" htmlFor="role">
            학부모
          </label>
          <input
            type="radio"
            value="ROLE_USER"
            name="role"
            onChange={handleJoinInfo}
          />
        </div>

        <div>
          <label id="kinderstaff" htmlFor="role">
            유치원관계자
          </label>
          <input
            type="radio"
            value="ROLE_MANAGER"
            name="role"
            onChange={handleJoinInfo}
          />
        </div>
      </div>

      <span className="join-input">
        <label htmlFor="email">이메일 </label>
        <input
          type="text"
          value={userInfo.email}
          id="email"
          onChange={handleJoinInfo}
        />

        <label htmlFor="name">이름 </label>
        <input
          type="text"
          value={userInfo.name}
          id="name"
          onChange={handleJoinInfo}
        />

        <label htmlFor="nickname">닉네임 </label>
        <input
          type="text"
          value={userInfo.nickname}
          id="nickname"
          onChange={handleJoinInfo}
        />

        <label htmlFor="password">비밀번호 </label>
        <input
          type="password"
          value={userInfo.password}
          id="password"
          onChange={handleJoinInfo}
        />
      </span>

      {/* check box -> user or admin
       * check box 에 value={userInfo.role} 달아주기
       */}
      <button id="joinbutton" type="submit" onClick={handleJoinSubmit}>
        가입하기
      </button>
    </div>
  );
};

export default JoinPage;
