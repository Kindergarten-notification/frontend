import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { getPosts } from "../../_actions/actions";

import "../style/homepage.css";

const Post = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const kinder = location.state;
  const [posts, setPosts] = useState([{}]);
  const [postNum, setPostNum] = useState(1);

  useEffect(() => {
    const payload = dispatch(getPosts(kinder.id)).payload;

    payload.then((data) => {
      console.log(data);
      setPosts(data);
    });
  });

  return (
    <div>
      <div className="home-header">
        <h5>{kinder.kinder_name}</h5>
      </div>
      <div className="home-buttons-div">
        <button className="home-buttons"> 홈 </button>
        <button className="home-buttons" id="post">
          공지사항
        </button>
        <button className="home-buttons" id="album">
          앨범
        </button>
        <button className="home-buttons" id="notification">
          게시판
        </button>
        <div className="home-main" style={{ borderRadius: "8px" }}>
          <table>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>등록일</th>
            </tr>
            {posts.length > 0 ? (
              posts.map((p, idx) => (
                <tr className="">
                  <td>{idx + 1}</td>
                  <td>{p.title}</td>
                  <td>{p.created_date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            )}
          </table>
        </div>
      </div>
      <div>{/** album list */}</div>
    </div>
  );
};

export default Post;
