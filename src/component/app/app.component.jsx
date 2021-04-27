import React from 'react'
import { Provider } from 'react-redux'

import store from '../../store'
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
