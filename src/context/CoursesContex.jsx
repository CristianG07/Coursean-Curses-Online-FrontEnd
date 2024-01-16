import { createContext, useContext, useEffect, useReducer } from "react"
import { CoursesReducer } from "./reducers/CoursesReducer"
import { GET_CATEGORIES, GET_COURSES, GET_SINGLE_COURSE } from "./actions/actions"
import { courses } from "../utils/data"

const initialState = {
  courses: [],
  singleCourse: {},
  categories: []
}

const CoursesContext = createContext()

export const CoursesProvider = ({children}) => {
  const [state, dispatch] = useReducer(CoursesReducer, initialState)

  const fetchCourse = () => {
    dispatch({type: GET_COURSES, payload: courses})
  }

  const fetchSingleCourse = (id) => {
    const singleCourse = courses.find((courses) => courses.id === id)
    dispatch({type: GET_SINGLE_COURSE, payload: singleCourse})
  }

  const fetchCategories = () => {
    const categories = [...new Set(courses.map((item) => item.category))]
    dispatch({type: GET_CATEGORIES, payload: categories})
  }

  useEffect(() => {
    fetchCourse()
    fetchCategories()
  },[])

  return (
    <CoursesContext.Provider value={{...state, fetchSingleCourse}}>
      {children}
    </CoursesContext.Provider>
  )
}

export const useCoursesContext = () => {
  return useContext(CoursesContext)
}