import React from 'react';
import './App.css';
// import firebase from './components/firebase';
import SignIn from './components/auth/signIn';
import SignUp from './components/auth/signUp';
import AuthDetails from './components/auth/authDetails';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {
    return(
      <div className="App">
      <Navbar/>
      {/* <SignIn />
      <SignUp />
      <AuthDetails /> */}
    </div>
    );
  }
  

export default App;
