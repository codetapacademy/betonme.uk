//Reducers will bassicaly define our state that's going to be sent back based on an action
import * as constant from './user.constant'

//This is the initial state.A state it's and array or a object with values in it
//State is immutable so it can't really be modified,it's bassicaly recreated as new State
const initialState = {
  isLoggedIn: false,
  userData: null
}

//Reducers are pure functions that specify how the application State should change in response to an anction
//Reducers respond with that new State
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

    case constant.SETUSER:
      return {
        ...state,
        isLoggedIn: !!action.userData,
        userData: action.userData
      }

    default:
      return state;
  }
}
