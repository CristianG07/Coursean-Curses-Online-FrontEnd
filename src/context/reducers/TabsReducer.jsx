import { AWS, DATA_SCIENCE, DESIGN, MARKETING, PYTHON, WEB_DEVELOPMENT } from "../actions/actions";

export const TabsReducer = (state, action) => {
  if (action.category === PYTHON) {
    return {...state, activeTab: PYTHON }
  }
  if (action.category === WEB_DEVELOPMENT) {
    return {...state, activeTab: WEB_DEVELOPMENT }
  }
  if (action.category === DATA_SCIENCE) {
    return {...state, activeTab: DATA_SCIENCE }
  }
  if (action.category === AWS) {
    return {...state, activeTab: AWS }
  }
  if (action.category === DESIGN) {
    return {...state, activeTab: DESIGN }
  }
  if (action.category === MARKETING) {
    return {...state, activeTab: MARKETING }
  }

  throw new Error(`No matching "${action.type}" - action category`)
}