//Aici sunt prezente actiunile care sunt folosite.
//Acestea descriu ce vrei sa faci
//When you submit a form it's an action
//When you fetch data when page loads that's an action
import * as constant from './user.constant'

export const logheazaMaAction = () => ({
  type: constant.LOGIN,
})

export const scoateMaAction = () => ({
  type: constant.LOGOUT,
})

export const setUser = (userData) => ({
  type: constant.SETUSER,
  userData
})
