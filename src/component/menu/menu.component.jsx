import React,{ useState } from 'react'
import * as MS from './menu.style'

export const Menu = () => {

  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => setSideBar(!sideBar);

  return (
    <>
      <MS.Menu>
        <MS.Hamburger className='bet-on-memenu' onClick={showSideBar}></MS.Hamburger>
        <MS.CompanyName>Bet<MS.On>On</MS.On>Me</MS.CompanyName>
        <MS.SignInButton>Sign In</MS.SignInButton>
      </MS.Menu>
      {sideBar && <MS.SideBarNav></MS.SideBarNav>}
      <MS.SpaceAfterMenu></MS.SpaceAfterMenu>
    </>
  )
}
