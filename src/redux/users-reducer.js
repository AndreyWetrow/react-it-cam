import { userAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((elem) => {
          if (elem.id === action.userID) {
            return { ...elem, followed: true };
          }
          return elem;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((elem) => {
          if (elem.id === action.userID) {
            return { ...elem, followed: false };
          }
          return elem;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USER_COUNT:
      return {
        ...state,
        totalUsersCount: action.count,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, Number(action.userId)]
          : [
              state.followingInProgress.filter(
                (id) => id !== Number(action.userId)
              ),
            ],
      };

    default:
      return state;
  }
};

export const followSuccess = (userID) => ({
  type: FOLLOW,
  userID,
});
export const unfollowSuccess = (userID) => ({
  type: UNFOLLOW,
  userID,
});
export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USER_COUNT,
  count: totalUsersCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

export const getUsers = (currentPage) => {
  const extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };

  const transformUsers = (user) => {
    return {
      id: extractId(user),
      name: user.name,
      gender: user.gender,
      birthYear: user.birth_year,
      eyeColor: user.eye_color,
      height: user.height,
    };
  };
  return (dispatch) => {
    dispatch(toggleIsFetching(true));

    userAPI.getUsers(currentPage).then((data) => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.results.map(transformUsers)));
      dispatch(setTotalUsersCount(data.count));
    });
  };
};
export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, Number(userId)));

    userAPI.getFollow().then((response) => {
      if (response.status === 201) {
        dispatch(followSuccess(userId));
      }
      dispatch(toggleFollowingProgress(false, Number(userId)));
    });
  };
};
export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, Number(userId)));
    dispatch(unfollowSuccess(userId));
    dispatch(toggleFollowingProgress(false, Number(userId)));
  };
};

export default usersReducer;
