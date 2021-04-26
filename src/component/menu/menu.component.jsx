import React,{ useState } from 'react'
import * as MS from './menu.style'

export const Menu = () => {

  return (
    <>
      <MS.Menu>
        <MS.Hamburger className='bet-on-memenu'></MS.Hamburger>
        <MS.CompanyName>Bet<MS.On>On</MS.On>Me</MS.CompanyName>
        <MS.SignInButton>Sign In</MS.SignInButton>
      </MS.Menu>
      <MS.SideBarNav></MS.SideBarNav>
      <MS.SpaceAfterMenu></MS.SpaceAfterMenu>
    </>
  )
}
