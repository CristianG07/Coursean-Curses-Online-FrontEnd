import { createContext, useContext, useReducer } from "react"
import { TabsReducer } from "./reducers/TabsReducer"
import { AWS, DATA_SCIENCE, DESIGN, MARKETING, PYTHON, WEB_DEVELOPMENT } from "./actions/actions";


const initialState = {
  activeTab: 'python'
}

const tabsContext = createContext()

export const TabsProvider = ({children}) => {
  const [state, dispatch] = useReducer(TabsReducer, initialState)

  const isPython = () => {
    dispatch({category: PYTHON})
  }

  const isWebDevelopment = () => {
    dispatch({category: WEB_DEVELOPMENT})
  }

  const isDataScience = () => {
    dispatch({category: DATA_SCIENCE})
  }

  const isAws = () => {
    dispatch({category: AWS})
  }

  const isDesign = () => {
    dispatch({category: DESIGN})
  }

  const isMarketing = () => {
    dispatch({category: MARKETING})
  }

  return (
    <tabsContext.Provider value={{ ...state, isPython, isWebDevelopment, isDataScience, isAws, isDesign, isMarketing }}>
      {children}
    </tabsContext.Provider>
  )
}

export const useTabsContext = () => {
  return useContext(tabsContext)
}