import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { joinUser } from '../_actions/actions';

const JoinPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [userInfo, setUserInfo] = useState({
    email: '',
    name: '',
    nickname: '',
    password: '',
    kinder_id: 1,
    role: 'ROLE_USER',
  });

  const handleJoinSubmit = (e) => {
    // if (e.target.name === "") {
    //   alert(`Please enter all inputs`);
    // } else {
    const payload = dispatch(joinUser(userInfo)).payload;
    payload
      .then(history.push('/auth/login'))
      .catch((err) => console.log('ERROR' + err));
    // }
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

      <div className="join-wrapper">
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

        <div className="join-input">
          <div className="join-input-index">
            <label className="join-input-name" htmlFor="email">
              이메일
            </label>
            <input
              type="text"
              value={userInfo.email}
              name="email"
              onChange={handleJoinInfo}
            />
          </div>

          <div className="join-input-index">
            <label className="join-input-name" htmlFor="name">
              이름
            </label>
            <input
              type="text"
              value={userInfo.name}
              name="name"
              onChange={handleJoinInfo}
            />
          </div>

          <div className="join-input-index">
            <label className="join-input-name" htmlFor="nickname">
              닉네임
            </label>
            <input
              type="text"
              value={userInfo.nickname}
              name="nickname"
              onChange={handleJoinInfo}
            />
          </div>

          <div className="join-input-index">
            <label className="join-input-name" htmlFor="password">
              비밀번호
            </label>
            <input
              type="password"
              value={userInfo.password}
              name="password"
              onChange={handleJoinInfo}
            />
          </div>
        </div>
      </div>

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
