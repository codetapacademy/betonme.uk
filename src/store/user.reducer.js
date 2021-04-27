import * as constant from './user.constant'

const initialState = {
  isLoggedIn: false,
  userData: null
}

export const userReducer = (state = initialState, action)  => {
  switch(action.type) {
    case constant.LOGIN:
      return {
        ...state,
        isLoggedIn: true
      }

    case constant.LOGOUT:
      return {
        ...state,
        isLoggedIn: false
      }

    default:
      return state;
  }
}
