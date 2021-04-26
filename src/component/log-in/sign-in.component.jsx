import React from 'react'
import * as SIS from './sign-in.style'

export const SignIn = ({closeSignIn}) => {

  return(
    <SIS.SignInContainer>
      <SIS.SignInCard>
        <SIS.Cross className='bet-on-mecross' onClick={closeSignIn}></SIS.Cross>
        <SIS.GoogleButton>
          <SIS.ButtonSignInIcon className='bet-on-megoogle'/>
          <SIS.ButtonSignInText>Sign In with Google</SIS.ButtonSignInText> 
        </SIS.GoogleButton>
        <SIS.TwittterButton>
          <SIS.ButtonSignInIcon className='bet-on-metwitter'/>
          <SIS.ButtonSignInText>Sign In with Twitter</SIS.ButtonSignInText>
        </SIS.TwittterButton>
        <SIS.FacebookButton>
          <SIS.ButtonSignInIcon className='bet-on-mefacebook2'/>
          <SIS.ButtonSignInText>Sign In with Facebook</SIS.ButtonSignInText>
        </SIS.FacebookButton>
      </SIS.SignInCard>
    </SIS.SignInContainer>
  )
}
