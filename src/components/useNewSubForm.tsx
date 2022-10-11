import { useReducer } from "react";

const InitialState = {
  nick: "",
  subMonths: 0,
  avatar: "",
  description: "",
};

interface FormState {
  form: Sub;
}

type FormReducerAction =
  | {
      type: "CHANGE_VALUE";
      payload: {
        inputName: string;
        inputValue: string;
      };
    }
  | { type: "CLEAR" };

const formReducer = (state: FormState["form"], action: FormReducerAction) => {
  switch (action.type) {
    case "CHANGE_VALUE":
      const { inputName, inputValue } = action.payload;
      return {
        ...state,
        [inputName]: inputValue,
      };

    case "CLEAR":
      return InitialState;

    default:
      return state;
  }
};

const useNewSubForm = () => {
  return useReducer(formReducer, InitialState);
};

export default useNewSubForm;
