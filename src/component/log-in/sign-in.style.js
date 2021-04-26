import styled, { css } from 'styled-components'

const BasicButton = css`
  border: none;
  display: flex;
  border-radius: 6px;
  width: 100%;
  margin-bottom: 2vh;
  padding: 10px;
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
`

export const FacebookButton = styled.button`
  ${ BasicButton }
  background-color: #4267B2;
  color: #fff;
`

export const GoogleButton = styled.button`
 ${ BasicButton }
  background-color: #fff;
  border: 1px solid rgba(122, 122, 122, 0.25);
`

export const TwittterButton = styled.button`
 ${ BasicButton }
 background-color: #fff;
 border: 1px solid rgba(122, 122, 122, 0.25);
`

export const ButtonSignInIcon = styled.i`
  font-size: 18px;
  justify-self: start;
`

export const ButtonSignInText = styled.p`
  justify-self: center;
  display: inline-block;
`
