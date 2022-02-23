import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginUser } from "../_actions/actions";

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState({
    name: "",
    password: "",
  });

  // login 하고 token 이 변경되면 storage 에 저장해야 함
  useEffect(() => {
    localStorage.setItem("jwtToken", token);
  }, [token]);

  const handleLoginSubmit = () => {
    const jwtToken = dispatch(loginUser(userInfo)).payload;
    localStorage.setItem("jwtToken", jwtToken);
    setToken(jwtToken);
  };

  const handleLoginInfo = (e) => {
    const newUserInfo = {
      ...userInfo,
      [e.target.name]: e.target.value,
    };

    setUserInfo(newUserInfo);
  };

  return (
    <div>
      <div className="login-input">
        <input
          type="text"
          value={userInfo.name}
          name="name"
          onChange={handleLoginInfo}
        />

        <input
          type="password"
          value={userInfo.password}
          name="password"
          onChange={handleLoginInfo}
        />

        <button type="submit" onClick={handleLoginSubmit}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
