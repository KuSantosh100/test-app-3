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
      <Router>
        <div className="App">
          <Navbar/>
          <div className="content">
            <Switch>
              <Route exact path="/login">
                <SignIn />
              </Route>
              <Route exact path="/signUp">
                <SignUp />
              </Route>
            </Switch>
          </div>
          {/* <SignIn />
          <SignUp />
          <AuthDetails /> */}
        </div>
      </Router>
    );
  }
  

export default App;
