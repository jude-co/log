import React from 'react'
import './SigninForm.css';

function SigninForm() {
    return (
        <form>
            <div className="signup">
                <h2>Customer's Sign Up</h2>
                <h3>Create an account and start shopping</h3>
                <div className="slot1">
                    <h1 className="name">Full Name</h1>
                    <input type="text" id="name" name="name" />
                    <h1 className="email">Email</h1>
                    <input type="email" id="email" name="email" />
                    <h1 className="address">Address</h1>
                    <input type="address" id="address" name="address" />
                </div>
                <div className="slot2">
                    
                    <h1 className="city">City</h1>
                    <input type="text" id="city" />
                    <h1 className="lga">LGA</h1>
                    <input type="text" id="lga" />
                        
                </div>
                <div className="slot3">
                    <h1 className="phone">Phone Number</h1>
                    <input type="number" id="number" />
                    <h1 className="pass">Password</h1>
                    <input type="password" id="password" />
                    <h1 className="confirm">Confirm Password</h1>
                    <input type="passowrd" id="password" />

                </div>
            </div>
        </form>
    )
}

export default SigninForm;
