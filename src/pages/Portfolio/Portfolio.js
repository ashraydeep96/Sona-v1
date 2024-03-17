import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Portfolio.css";
import Container from "../../Components/Container/Container";
import { useState, useEffect } from "react";
import { account } from "../../config/Appwrite";

const Portfolio = () => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    const userData = account.getSession('current');
    userData.then(
      function (response) {
        setUserData(response);
      },
      function (error) {
        console.log(error);
      }
      );
  });

  return (
    <div className="portfolio">
      <Sidebar />
      <main className="child-h">
        <section className="child-i">
          <div className="parent-c">
            <button className="container-49">
              <div className="div2">₹10050.09</div>
            </button>
            <div className="child-k">
              <div className="child-l">
                <div className="child-m">
                  <div className="container-53">
                    <input
                      className="search-for-sgb"
                      placeholder="Search for Gold Services"
                      type="text"
                    />
                    <img
                      className="image-64-icon"
                      alt=""
                      src="/image-64@2x.png"
                    />
                  </div>
                </div>
                <div className="child-p">
                  <div className="portfolio-overview-wrapper">
                    <div className="portfolio-overview">Portfolio Overview</div>
                  </div>
                  <div className="container-56">
                    <div className="total-assets">Total assets</div>
                    <div className="frame">
                      <b className="b">₹ 39,876.33</b>
                    </div>
                  </div>
                </div>
                <div className="frame-div">
                  <div className="this-months-summary-wrapper">
                    <div className="this-months-summary">
                      This Month's Summary
                    </div>
                  </div>
                  <div className="container-50-parent">
                    <Container
                      image55="/image-55@2x.png"
                      recentTrades="Recent Trades"
                      prop="₹325,920"
                    />
                    <Container
                      image55="/image-59@2x.png"
                      recentTrades="Total income"
                      prop="₹320,850"
                      propFlex="0.9217"
                      propColor="#fff"
                    />
                    <Container
                      image55="/image-58@2x.png"
                      recentTrades="Total expenses"
                      prop="₹10,100"
                      propFlex="1"
                      propColor="#bdc1ca"
                    />
                  </div>
                </div>
                <div className="weekly-gold-statistics-wrapper">
                  <div className="weekly-gold-statistics">
                    Weekly Gold Statistics
                  </div>
                </div>
              </div>
              <div className="child-k-inner">
                <div className="parent-a-parent">
                  <div className="parent-a1">
                    <div className="frame-a">
                      <img
                        className="image-68-icon"
                        loading="lazy"
                        alt=""
                        src="/image-99@2x.png"
                      />
                      <div className="frame-b">
                        <div className="welcome-to">
                          Welcome{" "}
                          {userData ? <b>{userData.userId}</b> : "to Sona"}
                        </div>
                      </div>
                    </div>
                    <div className="restaurants1">
                      <div className="container-c">
                        <div className="frame-d">
                          <div className="trade-history">Trade History</div>
                        </div>
                        <nav className="symbol">
                          <div className="all">All</div>
                          <div className="january-month">
                            <div className="tota">Total</div>
                          </div>
                          <div className="total-expenses">Total expenses</div>
                        </nav>
                      </div>
                    </div>
                  </div>
                  <div className="italian-restaurants">
                    <div className="gold-beauty-products">
                      <div className="pending-transactions">
                        Pending transactions
                      </div>
                      <div className="frame-e">
                        <div className="restaurantsand-cafes">
                          <div className="frame-f">
                            <div className="frame-g">
                              <img
                                className="image-70-icon"
                                loading="lazy"
                                alt=""
                                src="/image-70@2x.png"
                              />
                            </div>
                            <div className="parent-container1">
                              <div className="sona-menu">Sona Menu</div>
                              <div className="text-frame">
                                <div className="restaurants-and-cafes">
                                  Restaurants and Cafes
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="current">Current</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="main-container1">
                    <div className="inner-frame-parent">
                      <div className="inner-frame">
                        <div className="header-frame">
                          <div className="todays-transactions">
                            Today's Transactions
                          </div>
                          <div className="transaction-frame">
                            <div className="investment-label">
                              <div className="coffee-gold-investments">
                                <div className="image-54-wrapper">
                                  <img
                                    className="image-54-icon"
                                    loading="lazy"
                                    alt=""
                                    src="/image-54@2x.png"
                                  />
                                </div>
                                <div className="coffee-investments-parent">
                                  <div className="coffee-investments1">
                                    Coffee Investments
                                  </div>
                                  <div className="food-gold-delivery">
                                    <div className="restaurants-and-cafes1">
                                      Restaurants and Cafes
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="investment-wrapper">
                                <div className="investment">Investment</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="container-54">
                        <div className="image-71-wrapper">
                          <img
                            className="image-71-icon"
                            loading="lazy"
                            alt=""
                            src="/image-71@2x.png"
                          />
                        </div>
                        <div className="rupee-symbol">
                          <div className="grocery-gold-delivery1">
                            Grocery Gold Delivery
                          </div>
                          <div className="food-and-gold-delivery-service-wrapper">
                            <div className="food-and-gold">
                              Food and gold delivery services
                            </div>
                          </div>
                        </div>
                        <div className="div3">₹3500.00</div>
                      </div>
                    </div>
                    <div className="gold-delivery-frame-wrapper">
                      <div className="gold-delivery-frame">
                        <div className="tech-investments1">
                          <div className="pizza-gold-deals-frame">
                            <img
                              className="image-67-icon"
                              loading="lazy"
                              alt=""
                              src="/image-67@2x.png"
                            />
                          </div>
                          <div className="tech-investments-parent">
                            <div className="tech-investments2">
                              Tech Investments
                            </div>
                            <div className="electronics-investments-wrapper">
                              <div className="electronics-investments">
                                Electronics Investments
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="investment1">Investment</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gold-beauty-products-frame">
            <div className="image-63-parent">
              <img
                className="image-63-icon"
                loading="lazy"
                alt=""
                src="/image-63@2x.png"
              />
              <div className="investment-area">
                <div className="gold-image-frame">
                  <div className="january-frame">
                    <div className="pizza-deals-frame">
                      <div className="january-2022">January 2022</div>
                      <div className="pizza-deals-frame-inner">
                        <div className="frame-parent1">
                          <div className="image-56-wrapper">
                            <img
                              className="image-56-icon"
                              loading="lazy"
                              alt=""
                              src="/image-56@2x.png"
                            />
                          </div>
                          <div className="gold-beauty-frame">
                            <div className="pizza-gold-deals1">
                              Pizza Gold Deals
                            </div>
                            <div className="italian-restaurants-investment">
                              Italian Restaurants Investments
                            </div>
                          </div>
                          <div className="investment2">Investment</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="january-frame1">
                    <div className="gold-products-frame">
                      <img
                        className="image-73-icon"
                        loading="lazy"
                        alt=""
                        src="/image-73@2x.png"
                      />
                    </div>
                    <div className="tech-investments-frame">
                      <div className="gold-beauty-products1">
                        Gold Beauty Products
                      </div>
                      <div className="grocery-gold-products">
                        <div className="beauty-and-skincare">
                          Beauty and skincare products
                        </div>
                      </div>
                    </div>
                    <div className="div4">₹3500.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br/>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
