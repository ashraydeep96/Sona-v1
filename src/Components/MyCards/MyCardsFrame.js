import "./MyCardsFrame.css";

const MyCardsFrame = ({ sGBAccount, accountHolder, sGB10Units }) => {
  return (
    <div className="my-cards-frame1">
      <div className="trade-now-button">
        <div className="gold-trading-label-parent">
          <div className="gold-trading-label">
            <div className="gold-account-details">
              <div className="trade-limit2">
                <div className="sgb-account">{sGBAccount}</div>
              </div>
              <div className="current-value1">Current value</div>
            </div>
          </div>
          <div className="image-106-parent">
            <img
              className="image-106-icon"
              loading="lazy"
              alt=""
              src="/image-106@2x.png"
            />
            <div className="r-s">
              <div className="account-holder3">{accountHolder}</div>
            </div>
          </div>
        </div>
        <div className="sgb-10-units-wrapper">
          <h1 className="sgb-10-units1">{sGB10Units}</h1>
        </div>
      </div>
    </div>
  );
};

export default MyCardsFrame;
