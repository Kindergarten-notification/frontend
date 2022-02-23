import {
  JOIN_USER,
  LOGIN_USER,
  LOGOUT_USER,
  AUTH_LOGIN_SUCCESS,
  AUTH_USER,
  //   TOGGLE,
  MAIN_PAGE,
  DETAIL_PAGE,
  HOME_PAGE,
  POSTS,
  NOTIFICATIONS,
  ALBUMS,
  POST,
  NOTIFICATION,
  ALBUM,
} from "../_actions/types";

export default function kinder_reducer(state = {}, action) {
  //하나하나 적어야함
  switch (action.type) {
    case JOIN_USER:
      return { ...state, joinSuccess: action.payload };
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload }; //스프레드 연산자는 받은 값을 똑같이 가져오는거!!,
    //break; //여기가 전역데이터 저장인가?!

    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          status: "SUCCESS",
        },
        status: {
          ...state.status,
          isLoggedIn: true, //처음 등장
          // currentUser: action.username
        },
      };

    case LOGOUT_USER:
      return { ...state, logoutData: action.payload }; //스프레드 연산자는 받은 값을 똑같이 가져오는거!! , 서버에게 받은 데이터 뭉텅이는 register변수에 저장 다 되어잇음
    //break;

    case AUTH_USER:
      return { ...state, userData: action.payload }; //userData 아니어도됨! 유저의 모든 정보가 이어서 그런것
    //break;

    case MAIN_PAGE:
      return { ...state, kinders: action.payload };
    //break;

    case DETAIL_PAGE:
      return { ...state, kinder: action.payload };
    //break;

    case HOME_PAGE:
      return { ...state, home: action.payload };
    //break;

    case POSTS:
      return { ...state, posts: action.payload };
    //break;

    case NOTIFICATIONS:
      return { ...state, notifications: action.payload };
    //break;

    case ALBUMS:
      return { ...state, albums: action.payload };
    //break;

    case POST:
      return { ...state, post: action.payload };
    //break;

    case NOTIFICATION:
      return { ...state, notification: action.payload };
    //break;

    case ALBUM:
      return { ...state, album: action.payload };
    //break;

    default:
      return state;
  }
}
