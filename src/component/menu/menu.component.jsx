import React,{ useState } from 'react'
import * as MS from './menu.style'
import { SignIn } from '../log-in'

export const Menu = () => {

  const [sideBar, setSideBar] = useState(false);
  const [signIn, setSignIn] = useState(false);

  const showSideBar = () => setSideBar(!sideBar);
  const showSignIn = () => setSignIn(!signIn);

  return (
    <>
      <MS.Menu>
        <MS.Hamburger className='bet-on-memenu' onClick={showSideBar}></MS.Hamburger>
        <MS.CompanyName>Bet<MS.On>On</MS.On>Me</MS.CompanyName>
        <MS.SignInButton onClick={showSignIn}>Sign In</MS.SignInButton>
      </MS.Menu>
      {sideBar && 
        <MS.SideBarNav>
          <MS.SideBarLink>Home</MS.SideBarLink>
          <MS.SideBarLink>Auctions</MS.SideBarLink>
          <MS.SideBarLink>Sell</MS.SideBarLink>
          <MS.SideBarLink>Contact</MS.SideBarLink>
        </MS.SideBarNav>}
        {signIn && <SignIn />}
      <MS.SpaceAfterMenu></MS.SpaceAfterMenu>
    </>
  )
}
