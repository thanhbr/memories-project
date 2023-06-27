import { AUTH, LOGOUT } from "../constants/actionTypes"

const authReduver = (state = { authData: null }, action) => {
  switch (action.type) {
    case  AUTH:
      const data = action?.data || {}
      localStorage.setItem('profile', JSON.stringify({ ...data}))
      return { ...state, authData: data}
    case LOGOUT:
      localStorage.removeItem('profile')
      return { ...state, authData: null}
    default:
      return state
  }
}

export default authReduver