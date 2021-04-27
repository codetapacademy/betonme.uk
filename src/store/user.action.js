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
