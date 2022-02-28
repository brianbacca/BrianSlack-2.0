import React from 'react'
import { Button } from "@material-ui/core";
import {auth,provider} from '../../firebase'
import {signInWithPopup} from "firebase/auth";
import {LoginContainer,LoginInnerContainer} from './LoginElement'

function Login() {
    const signIn = (e) => {
        e.preventDefault();
    
        signInWithPopup(auth, provider).catch((error) => alert(error.message));
      };
  return (
    <LoginContainer>
    <LoginInnerContainer>
      <img
        src="https://www.creativosonline.org/wp-content/uploads/2019/02/slack-icono.jpg"
        alt=""
      />
      <h1>Sign in to your workspace</h1>
      <p>Brianx.slack.com</p>

      <Button onClick={signIn}>Sign in with Google</Button>
    </LoginInnerContainer>
  </LoginContainer>
  )
}

export default Login