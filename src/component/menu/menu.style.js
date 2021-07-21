import styled from "styled-components";
import { Link } from "@reach/router";

export const Menu = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-around;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 10vh;
`;
export const CompanyName = styled.h1`
  font-weight: bold;
  font-size: 24px;
  margin: 0px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
`;
export const On = styled.span`
  display: inline-block;
  padding: 10px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.light};
`;

export const Hamburger = styled.i`
  font-size: 24px;
  display: flex;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
`;

export const SignInButton = styled.button`
  padding: 10px;
  background-color: ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.darker};
  font-weight: bold;
  font-size: 12px;
  align-self: center;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  transition: 250ms;

  &:hover {
    transform: scale(1.1);
    background-color: ${({ theme }) => theme.color.darker};
    color: ${({ theme }) => theme.color.main};
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.25);
  }
`;

//Sidebar

export const SideBarNav = styled.div`
  padding-top: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 10vh;
  transition: 150ms;
  left: ${({ showSideBar }) => (showSideBar ? -770 : 0)}px;
  height: 100vh;
  width: 40vw;
  background-color: #fff;
`;

export const SideBarLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 24px;
  display: inline-block;
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  padding-left: 10px;
  color: ${({ theme }) => theme.color.darker};

  &:hover {
    background-color: ${({ theme }) => theme.color.main};
    color: ${({ theme }) => theme.color.light};
  }
`;
