import { useContext, useEffect, useReducer } from 'react'
import { createContext } from 'react'
import { CartReducer } from './reducers/CartReducer'
import {
  ADD_TO_CART,
  CLEAR_CART,
  GET_CART_TOTAL,
  REMOVE_CART_ITEM
} from './actions/actions'

const loadCartFromStorage = () => {
  let cart = localStorage.getItem('cart')

  if (cart) {
    return JSON.parse(localStorage.getItem('cart'))
  } else {
    return []
  }
}

const initialState = {
  cart: loadCartFromStorage(),
  total_items: 0,
  total_amount: 0
}

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState)

  const addToCart = (
    courseID,
    image,
    course_name,
    creator,
    discounted_price,
    category
  ) => {
    dispatch({
      type: ADD_TO_CART,
      payload: {
        courseID,
        image,
        course_name,
        creator,
        discounted_price,
        category
      }
    })
  }

  const removeFromCart = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id })
  }

  const clearCart = () => {
    dispatch({ type: CLEAR_CART })
  }

  useEffect(() => {
    dispatch({ type: GET_CART_TOTAL })
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart])

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  return useContext(CartContext)
}
