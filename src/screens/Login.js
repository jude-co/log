import React, { useState } from 'react'
import HeaderTop from '../components/header-top';
import Header from '../components/header';
import '../styles/auth.scss';


function Login({ Login }) {

    const [details, setDetails] = useState({ email: "", password: "" });


    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }
    return (
        <>
            <HeaderTop />
            <Header />
            <div className="auth">
                <h2 className="title">Customer's Login</h2>
                <p className="subtitle">Sign into your account</p>
                <form onSubmit={submitHandler} className="form-container">
                    <div className="form-group">
                        <label>E-mail Address</label>
                        <input type="email" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                    </div>
                    <div className="form-group">
                        <label className="pass">Password</label>
                        <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                    </div>
                    <button className="submit">Submit</button>
                    <span className="options"> Don’t have an account?<a href="#">&nbsp;Sign Up</a></span>
                </form>
            </div>
        </>
    )
}

export default Login;
