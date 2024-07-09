import { createContext, useEffect, useReducer } from "react";

let initial_state = {
  user:
    localStorage.getItem("user") !== undefined
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  loading: false,
  error: null,
  role: localStorage.getItem("role") || null,
  token: localStorage.getItem("token") || null,
};

export const AuthContext = createContext(initial_state);

const AuthReducer = (state, action) => {
  console.log(action.user);
  switch (action.type) {
    case "LOGIN-START":
      return {
        user: null,
        token: null,
        role: null,
        loading: false,
        error: null,
      };
    case "LOGIN-SUCCESS":
      return {
        user: action.user,
        token: action.token,
        role: action.role,
        loading: false,
        error: null,
      };
    case "LOGIN-FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initial_state);
// console.log(state);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
    localStorage.setItem("token", state.token);
    localStorage.setItem("role", state.role);
  }, [state]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
