import { GET_CATEGORIES, GET_COURSES, GET_SINGLE_COURSE } from '../actions/actions'

export const CoursesReducer = (state, action) => {
  if (action.type === GET_COURSES) {
    return {
      ...state,
      courses: action.payload
    }
  }

  if (action.type === GET_SINGLE_COURSE) {
    return {
      ...state,
      singleCourse: action.payload
    }
  }

  if (action.type === GET_CATEGORIES) {
    return {
      ...state,
      categories: action.payload
    }
  }

  throw new Error(`No matching "${action.type}" - action type`)
}
