import React from 'react'
import * as SIS from './sign-in.style'

export const SignIn = ({closeSignIn}) => {

  return(
    <SIS.SignInContainer>
      <SIS.SignInCard>
        <SIS.Cross className='bet-on-mecross' onClick={closeSignIn}></SIS.Cross>
        Card
      </SIS.SignInCard>
    </SIS.SignInContainer>
  )
}
