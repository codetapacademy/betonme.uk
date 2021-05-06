import React from 'react'
import { Provider } from 'react-redux'
//Provider it's actually a react component
//It's bassicaly the glue for react and redux

import store from '../../store'
//The store holds the state
import { Menu } from '../menu'
import { Home } from '../home'

const App = () => {

  return(
    <Provider store={store}>
      <Menu />
      <Home />
    </Provider>
  )
}

export { App }
