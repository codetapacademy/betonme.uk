import styled from 'styled-components'

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
