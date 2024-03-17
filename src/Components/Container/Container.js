import { useMemo } from "react";
import "./Container.css";

const Container = ({ image55, recentTrades, prop, propFlex, propColor }) => {
  const container50Style = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const recentTradesStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="container-50" style={container50Style}>
      <div className="image-55-wrapper">
        <img className="image-55-icon" loading="lazy" alt="" src={image55} />
      </div>
      <div className="recent-trades-parent">
        <div className="recent-trades" style={recentTradesStyle}>
          {recentTrades}
        </div>
        <div className="container">
          <div className="div1">{prop}</div>
        </div>
      </div>
    </div>
  );
};

export default Container;
