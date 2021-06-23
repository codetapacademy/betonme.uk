import React, { useState } from "react";
import * as MS from "./menu.style";
import { SignIn } from "../sign-in";
import { useSelector, useDispatch } from "react-redux";
import { scoateMaAction } from "../../store/user.action";

export const Menu = () => {
  const [sideBar, setSideBar] = useState(false);
  const [signIn, setSignIn] = useState(false);

  const showSideBar = () => setSideBar(!sideBar);
  const showSignIn = () => setSignIn(!signIn);
  const closeSignIn = () => setSignIn(!signIn);

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(({ user }) => user.isLoggedIn);

  const logOut = () => {
    dispatch(scoateMaAction());
  };

  return (
    <>
      <MS.Menu>
        <MS.Hamburger
          className="bet-on-memenu"
          onClick={showSideBar}
        ></MS.Hamburger>
        <MS.CompanyName>
          Bet<MS.On>On</MS.On>Me
        </MS.CompanyName>
        {!isLoggedIn && (
          <MS.SignInButton onClick={showSignIn}>Sign In</MS.SignInButton>
        )}
        {isLoggedIn && (
          <MS.SignInButton onClick={logOut}>Log Out</MS.SignInButton>
        )}
      </MS.Menu>
      <MS.SideBarNav showSideBar={sideBar}>
        <MS.SideBarLink to="/">Home</MS.SideBarLink>
        <MS.SideBarLink to="auctions">Auctions</MS.SideBarLink>
        <MS.SideBarLink to="sell">Sell</MS.SideBarLink>
      </MS.SideBarNav>
      {signIn && <SignIn closeSignIn={closeSignIn} />}
    </>
  );
};
