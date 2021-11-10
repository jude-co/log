import React, {useState} from 'react'

function LoginForm({Login}) {

    const [details, setDetails] =useState({email: "", password: ""});


    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }
    return (
       <form onSubmit={submitHandler}>
           <div className="form-inner">
               <h2>Customer's Login</h2>
               <h3>Sign into your account</h3>
               <div className="form-grou">
                   <h1>E-mail Address</h1>
                   <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
               </div>
               <div className="form-group">
                   <h1 className="pass">Password</h1>
                   <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
               </div>
               <input className="login" type="submit" value="Login" />
               <h3 className="question"> Don't have an account?</h3>
           </div>
       </form>
    )
}

export default LoginForm;
