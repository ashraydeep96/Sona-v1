import { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { account } from '../../config/Appwrite';
// import GoogleLogo from "https://developers.google.com/identity/images/g-logo.png"

const SignUp = () => {

  const [userData, setUserData] = useState({ name: "", email: "", phone: "", password: "" });
  const [showLoginCard, setShowLoginCard] = useState(false);
  const navigate = useNavigate();

  const signupFunc = async () => {
    // APPWRITE CONFIGURATION
    const signUpProcess = account.create(
      userData.name,
      userData.email,
      userData.password,
      userData.phone,
    )
    signUpProcess.then(function (res) {
      console.log(res);
      navigate("/");
    }, function (err) {
      console.log(err);
    })
  }

  const onLoginClick = useCallback(() => {
    setShowLoginCard(true);
  }, []);

  const googleAuth = (e) => {
    e.preventDefault();
    account.createOAuth2Session("google", "http://localhost:3000/portfolio", "http://localhost:3000/")
  }

  return (
    <div className="login card blur-background">
      <div className="container-32">
        <img
          className="image-41-icon"
          loading="lazy"
          alt=""
          src="/image-41@2x.png"
        />
        <div className="frame-content">
          <div className="sona-headline">
            <h1 className="sona-makes-trading-container">
              <p className="sona-makes-trading">Sona makes trading gold</p>
              <p className="effortless">effortless.</p>
            </h1>
            <div className="container-info">
              <div className="buy-trade-and">
                Buy, trade, and sell old seamlessly.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-31">
        <div className="frame-input">
          <div className="text-username">
            <h1 className="sona">Sona</h1>
          </div>
          <div className="access-trading">Access trading</div>
        </div>
        <div className="container-password">

          {/* Form */}
          <form className="frame-password">
            <div className="forgot-password-label">
              <div className="container-error">
                <div className="log-in-text">
                  <h1 className="log-in">Sign Up</h1>
                </div>
                {/* <div className="username-field">
                  <div className="secure-login-required1">Secure Sign Up Process</div>
                </div> */}
              </div>
            </div>

            {/* Form */}
            <div className="main-container">

              {/* FullName */}
              {/* <div className="access-trading-text">
                <div className="password">First Name</div>
              </div> */}
              <div className="frame-password1">
                <div className="container-29">
                  {/* fullName */}
                  <input
                    className="enter-your"
                    placeholder="Enter your Full Name"
                    type="text"
                    onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                  />
                </div>
              </div>

              {/* Email */}
              {/* <div className="access-trading-text">
                <div className="password">Email ID</div>
              </div> */}
              <div className="frame-password1">
                <div className="container-29">
                  {/* Email */}
                  <input
                    className="enter-your"
                    placeholder="Enter your Valid Email"
                    type="text"
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                  />
                </div>
              </div>

              {/* PhoneNumber */}
              {/* <div className="access-trading-text">
                <div className="password">Phone Number</div>
              </div> */}
              <div className="frame-password1">
                <div className="container-29">
                  {/* PhoneNumber */}
                  <input
                    className="enter-your"
                    placeholder="Enter your Phone Number"
                    type="number"
                    onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                  />
                </div>
              </div>

              {/* Password */}
              {/* <div className="access-trading-text">
                <div className="password">Password</div>
              </div> */}
              <div className="frame-password1">
                <div className="container-29">
                  {/* Password */}
                  <input
                    className="enter-your"
                    placeholder="Enter your Password"
                    type="password"
                    onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                  />
                </div>
              <div className="container-30" onClick={signupFunc}>
                <div className="log-in1">Sign Up</div>
              </div>
              </div>

              <div className="access-trading-text1">
                <div className="forgot-your-password">Forgot your password?</div>
              </div>
            </div>
            <div className="forgot-password-frame">
              <div className="forgot-your-password-container">
                <span className="dont-have-an">{`Already have an Account? `}</span>
                <b className="signup" onClick={onLoginClick}>Login</b>
              </div>
            </div>
            <div className="Or">
              <span>---------------or---------------</span>
            </div>
            <div className="google" onClick={(e) => googleAuth(e)}>
              <Link>
                <div className="g-sign-in-button">
                  <div className="google-wrapper">
                    <div className="logo-wrapper">
                      <img src= "https://developers.google.com/identity/images/g-logo.png" alt="googleImg"/>
                    </div>
                    <div className="text-container">
                      <span>Continue With Google</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
