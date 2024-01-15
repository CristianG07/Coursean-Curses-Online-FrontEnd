import { OPEN_NAVBAR, CLOSE_NAVBAR } from '../actions/actions'

export const NavbarReducer = (state, action) => {
  if (action.type === OPEN_NAVBAR) {
    return {...state, isNavbarOpen: true}
  }

  if (action.type === CLOSE_NAVBAR) {
    return {...state, isNavbarOpen: false}
  }
  
  throw new Error(`No matching "${action.type}" - action type`)
}