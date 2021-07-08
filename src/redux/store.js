import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, friend", likesCount: 13 },
        { id: 2, message: "Hi, girl", likesCount: 17 },
        { id: 3, message: "Hi, girl and friend", likesCount: 3 },
      ],
      newPostText: "Введите пост",
    },
    dialogsPage: {
      messages: [
        { id: 1, message: "Hello" },
        { id: 2, message: "Hi" },
        { id: 3, message: "How she" },
        { id: 4, message: "Hi fi" },
        { id: 5, message: "How you" },
      ],
      dialogs: [
        { id: 1, name: "Jon" },
        { id: 2, name: "Ariel" },
        { id: 3, name: "Lina" },
        { id: 4, name: "Victor" },
        { id: 5, name: "Sergey" },
      ],
      newMessageBody: "",
    },
    sidebar: {
      friends: [
        { id: 1, name: "Andrew" },
        { id: 2, name: "Sasha" },
        { id: 3, name: "Sveta" },
      ],
    },
  },
  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
