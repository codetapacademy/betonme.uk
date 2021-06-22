import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { Router } from '@reach/router'
import theme from '../../config/theme'
//Provider it's actually a react component
//It's bassicaly the glue for react and redux

import store from '../../store'
//The store holds the state
import { Menu } from '../menu'
import { Home } from '../home'
import { Auction } from '../auctions'

const App = () => {

  return(
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Menu />
        <Home />
        <Auction />
      </Provider>
    </ThemeProvider>
  )
}

export { App }
