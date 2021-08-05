import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth, GitHubProvider } from "../../config/firebase";
import { setUser } from "../../store/user.action";
import * as SIS from "./sign-in.style";

export const SignIn = ({ closeSignIn }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onIdTokenChanged((user) => {
      console.log(user)
    })
  }, []);

  const handleSignInWithGitHub = async () => {
    try {
      const {
        user: { uid, displayName, photoURL, email },
      } = await auth.signInWithPopup(GitHubProvider);
      dispatch(setUser({ uid, displayName, photoURL, email }));
      closePopUp();
    } catch (error) {
      console.log(error, "Ceva nu merge");
    }
  };
  const userData = useSelector(({ user }) => user.userData);

  //Function to close the pop up for sign in
  const closePopUp = () => userData && closeSignIn();

  const handleSignOut = async () => {
    try {
      auth.signOut()
      dispatch(setUser(null));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SIS.SignInContainer>
      <SIS.SignInCard>
        <SIS.Cross className="bet-on-mecross" onClick={closeSignIn}></SIS.Cross>
        <SIS.GoogleButton>
          <SIS.ButtonSignInIcon className="bet-on-megithub" />
          <SIS.ButtonSignInText onClick={handleSignInWithGitHub}>
            Sign In with GitHub
          </SIS.ButtonSignInText>
        </SIS.GoogleButton>
        <SIS.GoogleButton>
          <SIS.ButtonSignInIcon className="bet-on-megithub" />
          <SIS.ButtonSignInText onClick={handleSignOut}>
            Sign ME out of GitHub
          </SIS.ButtonSignInText>
        </SIS.GoogleButton>
        <SIS.GoogleButton>
          <SIS.ButtonSignInIcon className="bet-on-megoogle" />
          <SIS.ButtonSignInText>Sign In with Google</SIS.ButtonSignInText>
        </SIS.GoogleButton>
        <SIS.TwittterButton>
          <SIS.ButtonSignInIcon className="bet-on-metwitter" />
          <SIS.ButtonSignInText>Sign In with Twitter</SIS.ButtonSignInText>
        </SIS.TwittterButton>
        <SIS.FacebookButton>
          <SIS.ButtonSignInIcon className="bet-on-mefacebook2" />
          <SIS.ButtonSignInText>Sign In with Facebook</SIS.ButtonSignInText>
        </SIS.FacebookButton>
        <SIS.Separator>
          <SIS.SeparatorText>or</SIS.SeparatorText>
        </SIS.Separator>
        <SIS.StyledLabel>E-mail</SIS.StyledLabel>
        <SIS.StyledInput type="email" placeholder="Email address" />
        <SIS.StyledLabel>Password</SIS.StyledLabel>
        <SIS.StyledInput type="password" placeholder="Password" />
        <SIS.SignInButton>Sign In</SIS.SignInButton>
        <SIS.FooterText>
          Not a member yet?
          <SIS.FooterLink href="#">Sign Up.</SIS.FooterLink>
        </SIS.FooterText>
      </SIS.SignInCard>
    </SIS.SignInContainer>
  );
};
