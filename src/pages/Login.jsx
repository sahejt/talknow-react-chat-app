import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">👋 Welcome Back!</span>
        <span className="title">Log in to your account</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <button>Sign In </button>
          
            {err && <span className="error">Email/Password Incorrect</span>}
          
        </form>
        <p>New to TalkNow? <Link to="/register">Create an account</Link></p>
        
      </div>
      <div className="copyright">
        <p>App Created by <a href="https://sahejtuli.com">Sahej Tuli</a> </p>
        </div>
    </div>

      
  );
};

export default Login;
