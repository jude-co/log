import React, {useState} from 'react';
import LoginForm from './components/LoginForm';
import SigninForm from './components/SigninForm';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password){
      console.log("Logged in");
      setUser({
        email: details.email
      });
    }else {
      console.log("Details do not match!");
    }
  }




  return (
    <Router>
      <div className="App">
        {(user.email != "") ? (
        <div className="welcome">
          <h2>welcome</h2>
        </div>
        ) : (
        <Route path="/login" component={LoginForm} Login={Login} />
        )}
       <Route path="/signinform" component={SigninForm} />
      </div>
    </Router>
  
  );
}

export default App;
