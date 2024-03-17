import './Login.css'
import { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { account } from "../../config/Appwrite";

const Login = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  // APPWRITE CONFIGURATION
  const loginFunc = async () => {
    try {
      await account.createEmailPasswordSession(
        userData.email,
        userData.password
      );
      navigate("/portfolio");
    } catch (error) {
      console.log(error);
    }
  };

  const onSignUpClick = useCallback(() => {
    navigate("/signup");
  });

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
          <div className="frame-password">
            <div className="forgot-password-label">
              <div className="container-error">
                <div className="log-in-text">
                  <h1 className="log-in">Log in</h1>
                </div>
                <div className="username-field">
                  <div className="secure-login-required1">
                    Secure login required
                  </div>
                  <div className="container-28">
                    <input
                      className="enter-your-username"
                      placeholder="Enter your Email address"
                      type="email"
                      onChange={(e) =>
                        setUserData({ ...userData, email: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="main-container">
              <div className="access-trading-text">
                <div className="password">Password</div>
              </div>
              <div className="frame-password1">
                <div className="container-29">
                  <input
                    className="enter-your"
                    placeholder="Enter your   Password"
                    type="password"
                    onChange={(e) =>
                      setUserData({ ...userData, password: e.target.value })
                    }
                  />
                </div>
                <button className="container-30" onClick={loginFunc}>
                  <div className="log-in1">Log in</div>
                </button>
              </div>
              <div className="access-trading-text1">
                <div className="forgot-your-password">
                  Forgot your password?
                </div>
              </div>
            </div>
            <div className="forgot-password-frame">
              <div className="forgot-your-password-container">
                <span className="dont-have-an">{`Don’t have an Account? `}</span>
                <b className="signup" onClick={onSignUpClick}>
                  SignUp
                </b>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
