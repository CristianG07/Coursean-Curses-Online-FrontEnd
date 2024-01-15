import { createContext, useContext, useReducer } from "react";
import { CLOSE_NAVBAR, OPEN_NAVBAR } from "./actions/actions";
import { NavbarReducer } from "./reducers/NavbarReducer";

const initialState = {
  isNavbarOpen: false
}

const NavbarContext = createContext()

export const NavbarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(NavbarReducer, initialState)

  const OpenNavbar = () => {
    dispatch({type: OPEN_NAVBAR})
  }

  const CloseNavbar = () => {
    dispatch({type: CLOSE_NAVBAR})
  }

  return (
    <NavbarContext.Provider value={{ ...state, OpenNavbar, CloseNavbar }}>
      {children}
    </NavbarContext.Provider>
  )
}

export const useNavbarContext = () => {
  return useContext(NavbarContext)
}