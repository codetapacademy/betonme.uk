import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import theme from '../../config/theme'
import { StyledRouter } from './app.style'
//Provider it's actually a react component
//It's bassicaly the glue for react and redux

import store from '../../store'
//The store holds the state
import { Menu } from '../menu'
import { Home } from '../home'
import { Auction } from '../auctions'
import { Sell } from '../sell'

const App = () => {

  return(
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Menu />
        <StyledRouter>
          <Home path="/" />
          <Auction path="auctions" />
          <Sell path="sell" />
        </StyledRouter>
      </Provider>
    </ThemeProvider>
  )
}

export { App }
