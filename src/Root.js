import React from "react";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

const Root = () => {
  return (
    /* Redux: global 하게 상태 관리를 할 수 있게 도와주는 도구
     */
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};
export default Root;
