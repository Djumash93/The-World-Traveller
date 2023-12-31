import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error("Unknown action");
  }
}
//"https://i.pravatar.cc/100?u=zz"
const FAKE_USER = {
  name: "Jimmy",
  email: "jimmy@example.com",
  password: "qwerty",
  avatar:
    "data:image/jpeg;base64,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",
};
function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: "login", payload: FAKE_USER });
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext cannot be used outside of AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
