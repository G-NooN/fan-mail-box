import fakeData from "fakeData.json";

const ADD_MAIL = "mail/ADD_MAIL";
const EDIT_MAIL = "mail/EDIT_MAIL";
const DELETE_MAIL = "mail/DELETE_MAIL";

export const addMail = (payload) => {
  return {
    type: ADD_MAIL,
    payload,
  };
};
export const editMail = (payload) => {
  return {
    type: EDIT_MAIL,
    payload,
  };
};
export const deleteMail = (payload) => {
  return {
    type: DELETE_MAIL,
    payload,
  };
};

const initialState = fakeData;

const mailList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MAIL: {
      const newMail = action.payload;
      return [...state, newMail];
    }
    case EDIT_MAIL: {
      const { mailId, editedContent } = action.payload;
      return state.map((mail) => {
        if (mail.id === mailId) {
          const newMail = { ...mail, content: editedContent };
          return newMail;
        } else {
          return mail;
        }
      });
    }
    case DELETE_MAIL: {
      const mailId = action.payload;
      return state.filter((mail) => mail.id !== mailId);
    }
    default:
      return state;
  }
};

export default mailList;
