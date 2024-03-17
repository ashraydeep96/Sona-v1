import React, { useState, useRef, useEffect } from 'react';
import LoginCard from "../../Components/Login/Login"
import SignupCard from "../../Components/SignUp/SignUp";

const GetStartedPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const cardRef = useRef(null);


  const toggleLogin = () => {
    setShowLogin(true);
    setShowSignup(false);
  };
  
  const toggleSignup = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  const handleClickOutside = (event) => {
    if (cardRef.current && !cardRef.current.contains(event.target)) {
      setShowLogin(false);
      setShowSignup(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <h1>Welcome to our platform!</h1>
      <p>Get started by creating an account or signing in.</p>
      <button onClick={toggleSignup}>Sign Up</button>
      <button onClick={toggleLogin}>Sign In</button>
      {showLogin && <LoginCard ref={cardRef} />} {/* Render LoginCard component if showLogin is true */}
      {showSignup && <SignupCard ref={cardRef} />} {/* Render SignupCard component if showSignup is true */}
    </div>
  );
};

export default GetStartedPage;