import constantAction from "../constansts";

const initialValue = {
  currentUser: JSON.parse(localStorage.getItem("user")) || {},
};

const user = (state = initialValue, action) => {
  switch (action.type) {
    case constantAction.ADD_USER: {
      return {
        ...state,
        currentUser: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default user;
