import React, { useState } from 'react'
import HeaderTop from '../components/header-top';
import Header from '../components/header';
import '../styles/auth.scss';


function Signup({ Login }) {

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
                <h2 className="title">Customer’s Sign Up</h2>
                <p className="subtitle">Create an account and start shopping</p>
                <form onSubmit={submitHandler} className="form-container">
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text"
                            onChange={e => setDetails({ ...details, email: e.target.value })}
                            value={details.email}
                        />
                    </div>
                    <div className="form-group">
                        <label>E-mail</label>
                        <input type="email" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                    </div>

                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                    </div>
                    <div className="form-group double">
                        <div className="each">
                            <label>City</label>
                            <input type="text" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                        </div>
                        <div className="each">
                            <label>LGA</label>
                            <input type="text" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Phone number</label>
                        <input type="number" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                    </div>
                    <div className="form-group">
                        <label className="pass">Password</label>
                        <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                    </div>

                    <div className="form-group">
                        <label className="pass">Confirm Password</label>
                        <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                    </div>
                    <button className="submit">Submit</button>
                    <span className="options"> Don’t have an account?<a href="#">&nbsp;Sign Up</a></span>
                </form>
            </div>
        </>
    )
}

export default Signup;
