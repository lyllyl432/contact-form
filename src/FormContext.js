import { createContext, useContext, useReducer } from "react";

const FormContext = createContext(null);

const FormDispatchContext = createContext(null);

export function FormProvider({ children }) {
  const [radioAction, dispatch] = useReducer(radioActionReducer, null);

  return (
    <FormContext.Provider value={radioAction}>
      <FormDispatchContext.Provider value={dispatch}>
        {children}
      </FormDispatchContext.Provider>
    </FormContext.Provider>
  );
}

export function useRadioAction() {
  return useContext(FormContext);
}

export function useRadioActionDispatch() {
  return useContext(FormDispatchContext);
}

function radioActionReducer(action) {
  switch (action) {
    case "general-enquiry": {
      return 0;
    }
    case "support-request": {
      return 1;
    }
    default: {
      throw Error("Unkown action: " + action.type);
    }
  }
}
