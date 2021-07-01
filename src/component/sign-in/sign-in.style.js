import styled, { css } from 'styled-components'

const BasicButton = css`
  border: none;
  display: flex;
  border-radius: 6px;
  width: 100%;
  margin-bottom: 2vh;
  padding: 3px 3px 3px 10px;
  font-weight: bold;
  color: rgb(122, 122, 122);
  align-items: center;
`

export const SignInContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

export const SignInCard = styled.div`
  width: 70vw;
  height: 70vh;
  background-color: #fff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  position: relative;
  padding: 50px 20px 20px 20px;
`

export const Cross = styled.i`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 12px;
  background: #ffd613;
  color: #fff;
  border-radius: 6px;
  padding: 8px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`

export const FacebookButton = styled.button`
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  ${ BasicButton }
  background-color: #4267B2;
  color: #fff;
`

export const GoogleButton = styled.button`
  ${ BasicButton }
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  border: 1px solid rgba(122, 122, 122, 0.25);
`

export const TwittterButton = styled.button`
  ${ BasicButton }
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  border: 1px solid rgba(122, 122, 122, 0.25);
`

export const ButtonSignInIcon = styled.i`
  font-size: 18px;
`

export const ButtonSignInText = styled.p`
  display: inline-block;
  flex-grow: 1;
`

export const Separator = styled.div`
  border-top: 1px solid #000;
  text-align: center;
  position: relative;
  margin-top: 20px;
`

export const SeparatorText = styled.span`
  position: absolute;
  display: inline-block;
  width: 50px;
  top: -10px;
  font-weight: bold;
  background-color: #fff;
  margin-right: auto;
  margin-left: auto;
`

export const StyledInput = styled.input`
  border-radius: 6px;
  border: 1px solid rgb(122, 122, 122);
  color: rgb(0, 35, 51);
  font-size: 15px;
  height: 40px;
  width: 100%;
  padding: 0px 10px;
`

export const SignInButton = styled.button`
  ${ BasicButton }
  justify-content: center;
  color: #fff;
  background-color: #ffd613;
  font-size: 36px;
  margin-top: 30px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`

export const FooterText = styled.p`
  font-size: 16px;
  color: rgb(0, 35, 51);
  text-align: center;
  margin-top: 50px;
`

export const FooterLink = styled.a`
  text-decoration: none;
  font-weight: bold;
  padding-left: 10px;
`

export const StyledLabel = styled.p`
  color: ${({ theme }) => theme.color.darker};
  font-weight: bold;
`
