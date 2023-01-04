import React from 'react';
import './App.css';
// import firebase from './components/firebase';
import SignIn from './components/auth/signIn';
import SignUp from './components/auth/signUp';
import AuthDetails from './components/auth/authDetails';
function App() {
    return(
      <div className="App">
      <SignIn />
      <SignUp />
      <AuthDetails />
    </div>
    );
  }
  

export default App;
