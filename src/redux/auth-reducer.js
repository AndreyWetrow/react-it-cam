import { userAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  name: null,
  diameter: null,
  climate: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };

    default:
      return state;
  }
};

export const setAuthUserData = (name, diameter, climate) => ({
  type: SET_USER_DATA,
  data: { name, diameter, climate },
});

export const getAuthUserData = () => (dispatch) => {
  userAPI.getHeaderPlanet().then((response) => {
    if (response.data) {
      let { name, diameter, climate } = response.data.results[0];
      dispatch(setAuthUserData(name, diameter, climate));
    }
  });
};

export default authReducer;
