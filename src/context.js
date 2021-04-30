import React, { createContext, useContext, useReducer } from "react";
export const dataContext = createContext();

export const StateProvider = ({ initialState, reducer, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <dataContext.Provider value={{ state, dispatch }}>
      {children}
    </dataContext.Provider>
  );
};
