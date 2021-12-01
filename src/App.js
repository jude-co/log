import React, { useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from "./router";

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ email: "" });
  const [error, setError] = useState("");

  // const Login =() =

  const Login = (details) => {
    console.log(details);

    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log("Logged in");
      setUser({
        email: details.email,
      });
    } else {
      console.log("Details do not match!");
    }
  };

  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
