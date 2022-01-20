/* Main.js
 * - 메인 페이지
 */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Banner from "../components/banner/Banner";
import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import Row from "../components/row/Row";
import { getMainPage } from "../_actions/actions";

// import "./mainpage.css";

const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffect");
    const payload = dispatch(getMainPage()).payload; // 유치원 리스트
    console.log(payload);
  }, []);
  return (
    <div className="main">
      <Nav />
      <Header />
      <Banner />
      <Row />
    </div>
  );
};

export default MainPage;
