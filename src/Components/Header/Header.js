import { Link, useNavigate } from "react-router-dom";
import { useCallback } from "react";
import "./Header.css";

const Logo = () => {

  const navigate = useNavigate();

  const onHomeClick = useCallback(() => {
    navigate("/portfolio");
  }, [navigate]);

  const onTradeClick = useCallback(() => {
    navigate("/search");
  }, [navigate]);

  const onBuyClick = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  return (
    <div className="logo">
      <div className="link-parent">
        <div className="link">
          <Link to="/portfolio">
            <img
              className="image-134-icon"
              loading="lazy"
              alt=""
              src="/image-134@2x.png"
            />
          </Link>
        </div>
        <div className="frame-wrapper">
          <nav className="frame-nav">
            <div className="home-wrapper" onClick={onHomeClick}>
              <div className="home">HOME</div>
            </div>
            <div className="trade-wrapper" onClick={onTradeClick}>
              <div className="trade">TRADE</div>
            </div>
            <div className="buy" onClick={onBuyClick}>BUY</div>
            <div className="sell"onClick={onBuyClick}>SELL</div>
          </nav>
        </div>
        <div className="leftBtn">
          <div className="image-126-wrapper" onClick={onTradeClick}>
            <img
              className="image-126-icon"
              loading="lazy"
              alt=""
              src="/image-126@2x.png"
            />
          </div>
          <div className="image-133-wrapper" onClick={onBuyClick}>
            <img
              className="image-133-icon"
              loading="lazy"
              alt=""
              src="/image-133@2x.png"
            />
          </div>
          {/* <div className="image-139-wrapper">
            <img
              className="image-139-icon"
              loading="lazy"
              alt=""
              src="/image-139@2x.png"
            />
          </div> */}
          <div className="frame-a">
            <img
              className="image-68-icon"
              loading="lazy"
              alt=""
              src="/image-99@2x.png"
            />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
