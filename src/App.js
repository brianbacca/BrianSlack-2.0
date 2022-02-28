import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';


import {provider,auth} from "./firebase"

import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Chat from './components/Chat/Chat'
import Login from './components/Login/Login'
import './App.css';
import { Route, Routes } from "react-router-dom";
import {AppBody,AppLoading,AppLoadingContents} from './components/AppElement'
import Spinner from "react-spinkit";



function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img
            src="https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png"
            alt=""
          />
          <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
        </AppLoadingContents>
      </AppLoading>
    );
  }


  return  (
    <div className="App">
      {!user ? <Login/>: (
 <><Header /><>
          <AppBody>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Chat />} />
            </Routes>
          </AppBody>
        </></>
      )}
     
    </div>
  );
}

export default App;


