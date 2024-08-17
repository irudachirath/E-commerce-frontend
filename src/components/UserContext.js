// UserContext.js
import { createContext, useContext, useReducer } from 'react';

const UserContext = createContext();

const initialState = {
  customer_id: null,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { customer_id: action.payload };
    case 'LOGOUT':
      return { customer_id: null };
    default:
      return state;
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const login = (customer_id) => {
    dispatch({ type: 'LOGIN', payload: customer_id });
    console.log("Hi"+customer_id);
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <UserContext.Provider value={{ state, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export { UserProvider, useUser };
