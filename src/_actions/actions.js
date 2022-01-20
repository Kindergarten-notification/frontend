import axios from "axios";
import {
  JOIN_USER,
  LOGIN_USER,
  AUTH_LOGIN_SUCCESS,
  AUTH_USER,
  //   TOGGLE,
  DETAIL_PAGE,
  HOME_PAGE,
  POSTS,
  MAIN_PAGE,
  NOTIFICATIONS,
  ALBUMS,
  POST,
  NOTIFICATION,
  ALBUM,
  LOGOUT_USER,
} from "./types";

const instance = axios.create({
  baseURL: "http://localhost:8080", // 요청을 www.aa.com/user로 보낸다면, www.aa.com까지 기록
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
    // "Authorization": ,
  },
});

export function loginUser(requestData) {
  const response = instance
    .post("/login", JSON.stringify(requestData))
    .then((res) => {
      console.log(`response : ${res.status}`); // response.status
      console.log(`response header : ${res.headers.Authorization}`);
      // jwt token 받기
    })
    .then()
    .catch((err) => console.log("failed login", err));

  // response 를 reducer 에 넘겨줌
  return {
    type: LOGIN_USER,
    payload: response,
  };
}

export function loginSuccess(status) {
  console.log(`status : ${status}`);

  return {
    type: AUTH_LOGIN_SUCCESS,
    status: status,
  };
}

export function logoutUser() {
  const response = axios.post("/logout").then((res) => {
    console.log("로그아웃됨");
    console.log(res);
  });
  return {
    type: LOGOUT_USER,
    payload: response,
  };
}

export function joinUser(requestData) {
  const response = instance
    .post("/api/join", JSON.stringify(requestData))
    .then(
      (res) => res.headers.Authorization
      //   console.log(`response : ${res.status}`); // response.status
      //   console.log(`response header : ${res.headers.Authorization}`);
    )
    .catch((err) => console.log("failed join", err));

  // response 를 reducer 에 넘겨줌
  return {
    type: JOIN_USER,
    payload: response,
  };
}

export function auth() {
  const response = axios
    .get("/api") //서버에 리퀘스트 날림
    .then((res) => res.data)
    .catch((err) => console.log("failed auth", err));

  return {
    //리퀘스트를 리듀서에 넘겨줌
    type: AUTH_USER,
    payload: response,
  };
}

/**
 * main page request
 */
export function getMainPage() {
  const response = axios
    .get("/api/kinders")
    .then((res) => res.data)
    .catch((err) => console.log("failed load main page", err));
  return {
    type: MAIN_PAGE,
    payload: response,
  };
}

/**
 *
 * @param {kinder's id} id
 * @returns
 */
export function getDetailPage(id) {
  const response = axios
    .get(`/api/kinder/${id}`)
    .then((res) => res.data)
    .catch((err) => console.log("failed load detail page", err));

  return {
    type: DETAIL_PAGE,
    payload: response,
  };
}

/**
 *
 * @param {kinder's id} id
 */
export function getHomePage(id) {
  const response = axios
    .get(`/api/home/${id}`)
    .then((res) => res.data)
    .catch((err) => console.log("failed load home page", err));

  return {
    type: HOME_PAGE,
    payload: response,
  };
}

/**
 *
 * @param {kinder's id} id
 */
export function getPosts(id) {
  const response = axios
    .get(`/api/posts`, null, { params: { kinder_id: id } })
    .then((res) => res.data)
    .catch((err) => console.log("failed get post list", err));

  return {
    type: POSTS,
    payload: response,
  };
}

/**
 *
 * @param {kinder's id} id
 */
export function getNotifications(id) {
  const response = axios
    .get(`/api/notifications`, null, {
      params: { kinder_id: id },
    })
    .then((res) => res.data)
    .catch((err) => console.log("failed get notificatoin list", err));

  return {
    type: NOTIFICATIONS,
    payload: response,
  };
}

/**
 *
 * @param {kinder's id} id
 */
export function getAlbums(id) {
  const response = axios
    .get(`/api/albums`, null, {
      params: { kinder_id: id },
    })
    .then((res) => res.data)
    .catch((err) => console.log("failed get album list", err));

  return {
    type: ALBUMS,
    payload: response,
  };
}

/**
 *
 * @param {REST API method} method
 * @param {post's id} post_id
 * @param {kinder's id} kinder_id
 * @param {user's id} user_id
 */
export function getPost(method, post_id, kinder_id, user_id) {
  let response = null;
  switch (method) {
    case "GET":
      response = axios
        .get(`/api/post/${post_id}`, null, {
          params: { kinder_id: kinder_id },
        })
        .then((res) => res.data)
        .catch((err) => console.log("failed get post", err));
      break;
    case "POST":
      response = axios
        .post(`/api/post`, null, {
          params: { kinder_id: kinder_id, user_id: user_id },
        })
        .then((res) => {
          console.log("Completed create !");
        })
        .catch((err) => console.log("failed get post", err));
      break;
    case "PUT":
      response = axios
        .put(`/api/post/${post_id}`, null, {
          params: { kinder_id: kinder_id },
        })
        .then((res) => {
          console.log("Completed update !");
        })
        .catch((err) => console.log("failed get post", err));
      break;
    case "DELETE":
      response = axios
        .delete(`/api/post/${post_id}`, null, {
          params: { kinder_id: kinder_id },
        })
        .then((res) => {
          console.log("Completed delete !");
        })
        .catch((err) => console.log("failed get post", err));
      break;
    default:
      console.log("Method doesnot match!");
  }
  return {
    type: POST,
    payload: response,
  };
}

/**
 *
 * @param {REST API method} method
 * @param {notification's id} notification_id
 * @param {kinder's id} kinder_id
 * @param {user's id} user_id
 * @returns
 */
export function getNotification(method, notification_id, kinder_id, user_id) {
  let response = null;
  switch (method) {
    case "GET":
      response = axios
        .get(`/api/notification/${notification_id}`, null, {
          params: { kinder_id: kinder_id },
        })
        .then((res) => res.data);
      break;
    case "POST":
      response = axios
        .post(`/api/notification`, null, {
          params: { kinder_id: kinder_id, user_id: user_id },
        })
        .then((res) => {
          console.log("Completed create !");
        });
      break;
    case "PUT":
      response = axios
        .put(`/api/notification/${notification_id}`, null, {
          params: { kinder_id: kinder_id },
        })
        .then((res) => {
          console.log("Completed update !");
        });

      break;
    case "DELETE":
      response = axios
        .delete(`/api/notification/${notification_id}`, null, {
          params: { kinder_id: kinder_id },
        })
        .then((res) => {
          console.log("Completed delete !");
        });

      break;
    default:
      console.log("Method doesnot match!");
  }
  return {
    type: NOTIFICATION,
    payload: response,
  };
}

/**
 *
 * @param {REST API method} method
 * @param {album's id} album_id
 * @param {kinder's id} kinder_id
 * @param {user's id} user_id
 * @returns
 */
export function getAlbum(method, album_id, kinder_id, user_id) {
  let response = null;
  switch (method) {
    case "GET":
      response = axios
        .get(`/api/album/${album_id}`, null, {
          params: { kinder_id: kinder_id },
        })
        .then((res) => res.data);
      break;
    case "POST":
      response = axios
        .post(`/api/album`, null, {
          params: { kinder_id: kinder_id, user_id: user_id },
        })
        .then((res) => {
          console.log("Completed create !");
        });
      break;
    case "PUT":
      response = axios
        .put(`/api/album/${album_id}`, null, {
          params: { kinder_id: kinder_id },
        })
        .then((res) => {
          console.log("Completed update !");
        });

      break;
    case "DELETE":
      response = axios
        .delete(`/api/album/${album_id}`, null, {
          params: { kinder_id: kinder_id },
        })
        .then((res) => {
          console.log("Completed delete !");
        });

      break;
    default:
      console.log("Method doesnot match!");
  }
  return {
    type: ALBUM,
    payload: response,
  };
}
