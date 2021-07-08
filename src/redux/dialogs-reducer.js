const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: 6, message: body });
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => {
  return { type: SEND_MESSAGE };
};
export const updateNewMessageBodyCreator = (text) => {
  return { type: UPDATE_NEW_MESSAGE_BODY, body: text };
};
export default dialogsReducer;
