import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { joinUser } from "../_actions/actions";

const JoinPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [userInfo, setUserInfo] = useState({
    email: "",
    name: "",
    nickname: "",
    password: "",
    kinder_id: 1,
    role: "ROLE_USER",
  });

  const handleJoinSubmit = (e) => {
    const payload = dispatch(joinUser(userInfo)).payload;
    console.log(payload);
    history.push("/auth/login");
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
    <div>
      <div className="join-input">
        <input
          type="text"
          value={userInfo.email}
          name="email"
          onChange={handleJoinInfo}
        />
        <input
          type="text"
          value={userInfo.name}
          name="name"
          onChange={handleJoinInfo}
        />
        <input
          type="text"
          value={userInfo.nickname}
          name="nickname"
          onChange={handleJoinInfo}
        />
        <input
          type="password"
          value={userInfo.password}
          name="password"
          onChange={handleJoinInfo}
        />
        {/* check box -> user or admin
         * check box 에 value={userInfo.role} 달아주기
         */}
        <button type="submit" onClick={handleJoinSubmit}>
          Join
        </button>
      </div>
    </div>
  );
};

export default JoinPage;
