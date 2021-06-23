import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import theme from '../../config/theme'
import * as S from './app.style'
//Provider it's actually a react component
//It's bassicaly the glue for react and redux

import store from '../../store'
//The store holds the state
import { Menu } from '../menu'
import { Home } from '../home'
import { Auctions } from '../auctions'
import { Sell } from '../sell'

const App = () => {

  return(
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Menu />
        <S.StyledRouter>
          <Home path="/" />
          <Auctions path="auctions" />
          <Sell path="sell" />
        </S.StyledRouter>
      </Provider>
    </ThemeProvider>
  )
}

export { App }
