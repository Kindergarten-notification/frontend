/* Notification.js
 * - 공지사항 component
 */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { getNotifications } from '../../_actions/actions';

import '../../components/style/style.css';

const Notification = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const kinder = location.state;
  const [notifications, setNotifications] = useState([
    { title: 'test', created_date: '2022.01.21' },
  ]);

  useEffect(() => {
    const payload = dispatch(getNotifications(kinder.id)).payload;

    payload.then((data) => {
      console.log(data);
      setNotifications(data);
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
    </div>
  );
};

export default Notification;
