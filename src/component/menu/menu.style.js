import styled from 'styled-components'

export const Menu = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  display: flex;
  padding: 5px;
  position: fixed;
  justify-content: space-around;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
`
export const CompanyName = styled.h1`
  font-weight: bold;
  font-size: 24px;
  margin: 0px;
`
export const On = styled.span`
  display: inline-block;
  padding: 10px;
  border-radius: 50%;
  background-color: #ffd613;
  color: #fff;
`

export const Hamburger = styled.i`
  font-size: 24px;
  display: flex;
  align-items: center;
  margin-right: 10px;
`

export const SignInButton = styled.button`
  background-color: #ffd613;
  padding: 10px;
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  align-self: center;
  border-radius: 5px;
  border: none;

  &:hover {
    background-color: #000;
    color: #ffd613;
  }
`

export const SpaceAfterMenu = styled.div`
  margin-top: 100px;
`
