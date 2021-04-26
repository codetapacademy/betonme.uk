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
        <SIS.Separator>
          <SIS.SeparatorText>or</SIS.SeparatorText>
        </SIS.Separator>
        <SIS.StyledInput type='email' placeholder='Email address'/>
        <SIS.StyledInput type='password' placeholder='Password'/>
        <SIS.SignInButton>Sign In</SIS.SignInButton>
        <SIS.footerText>
          Not a member yet?
          <SIS.footerLink href='#'>Sign Up.</SIS.footerLink>
        </SIS.footerText>
      </SIS.SignInCard>
    </SIS.SignInContainer>
  )
}
