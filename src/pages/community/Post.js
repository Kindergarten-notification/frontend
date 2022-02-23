import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { getPosts } from '../../_actions/actions';

import '../../components/style/style.css';

const Post = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const kinder = location.state;
  const [posts, setPosts] = useState([
    { title: 'test', created_date: '2022.01.21' },
  ]);
  const [postNum, setPostNum] = useState(1);

  useEffect(() => {
    const payload = dispatch(getPosts(kinder.id)).payload;

    payload.then((data) => {
      console.log(data);
      setPosts(data);
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
        <button className="home-buttons" onClick={handleButtons}>
          {' '}
          홈{' '}
        </button>
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

      <div>{/** album list */}</div>
    </div>
  );
};

export default Post;
