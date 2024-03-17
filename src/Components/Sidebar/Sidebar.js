import "./Sidebar.css";
import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { account } from "../../config/Appwrite";

const Sidebar = () => {
  const navigate = useNavigate();

  const onGetStartedClick = useCallback(() => {
    navigate("/portfolio");
  }, [navigate]);

  const onSearchClick = useCallback(() => {
    navigate("/search");
  }, [navigate]);

  const onBuyGoldClick = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  const onPortfolioClick = useCallback(() => {
    navigate("/accounts");
  }, [navigate]);

  const onSignOutClick = async (e) => {
    e.preventDefault();
    navigate("/");

    try {
      await account.deleteSession("current");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mainSidebar">
      <div className="container-39">
        <div className="container-37">
          <h1 className="sona2" onClick={onGetStartedClick}>
            Sona
          </h1>
          <div className="restaurants">
            <div className="coffee-investments" onClick={onGetStartedClick}>
              <div className="house-1-wrapper">
                <img
                  className="house-1-icon"
                  loading="lazy"
                  alt=""
                  src="/house-1.svg"
                />
              </div>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                className="get-started hoverLink"
                onClick={onGetStartedClick}
              >
                <div onClick={onGetStartedClick}>Get Started</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="first-column">
          <div className="grocery-gold-delivery-parent">
            <button className="grocery-gold-delivery" onClick={onSearchClick}>
              <img className="search-1-icon" alt="" src="/search-1.svg" />
              <Link
                style={{ textDecoration: "none", color: "white" }}
                className="search1 hoverLink"
              >
                <div>Search</div>
              </Link>
            </button>
            <div className="tech-investments">
              <div
                className="recent-transactions-label"
                onClick={onPortfolioClick}
              >
                <div className="clear-button-label" onClick={onPortfolioClick}>
                  <img
                    className="image-84-icon"
                    loading="lazy"
                    alt=""
                    src="/image-84@2x.png"
                  />
                </div>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  className="my-portfolio2 hoverLink"
                  onClick={onPortfolioClick}
                >
                  <div onClick={onPortfolioClick}>My Portfolio</div>
                </Link>
              </div>
              <div className="january1" onClick={onBuyGoldClick}>
                <img className="add-icon" alt="" src="/add.svg" />
                <div className="buy-gold-wrapper">
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    className="buy-gold hoverLink"
                    onClick={onBuyGoldClick}
                  >
                    <div>Buy Gold</div>
                  </Link>
                </div>
              </div>
              <div className="january2" onClick={onSearchClick}>
                <img className="favorite-icon" alt="" src="/favorite.svg" />
                <div className="favorites-wrapper">
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    className="favorites hoverLink"
                  >
                    <div>Favorites</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="parent-a">
          <div className="child-a">
            <div className="child-b" onClick={onPortfolioClick}>
              <img
                className="settings-gear-1"
                loading="lazy"
                alt=""
                src="/settings-gear-1.svg"
              />
              <Link
                style={{ textDecoration: "none", color: "white" }}
                className="child-d hoverLink"
              >
                <div className="settings">Settings</div>
              </Link>
            </div>
            <Link
              to={"/"}
              style={{ textDecoration: "none", color: "white" }}
              className="parent-b hoverLink"
              onClick={onSignOutClick}
            >
              <img
                className="lungs-1-icon"
                loading="lazy"
                alt=""
                src="/lungs-1.svg"
              />
              <div className="sign-out" onClick={(e) => onSignOutClick(e)}>
                Sign out
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
