import React from "react";
import Opporeno from "../assets/opporeno.jpg";

const Hotselling = () => {
  return (
    <div classname="hotproduct-parent">
      <div className="hitsell-tst">
        <h2>On Sale</h2>
      </div>

      <div className="hotsell-box">
        <div className="hotsell-left">
          <div className="sellproduct-box">
            <img src={Opporeno} alt="loading..." className="hotsell-lfimg" />
            <p className="sell-para">Samsung S25 Ultra</p>
            <button className="sale-btn">Add to Cart</button>
            <span>upto 20% Off</span>
          </div>

          <div className="sellproduct-box">
            <img src={Opporeno} alt="loading..." className="hotsell-lfimg" />
            <p className="sell-para">Samsung S25 Ultra</p>
            <button className="sale-btn">Add to Cart</button>
            <span>upto 20% Off</span>
          </div>

          <div className="sellproduct-box">
            <img src={Opporeno} alt="loading..." className="hotsell-lfimg" />
            <p className="sell-para">Samsung S25 Ultra</p>
            <button className="sale-btn">Add to Cart</button>
            <span>upto 20% Off</span>
          </div>

          <div className="sellproduct-box">
            <img src={Opporeno} alt="loading..." className="hotsell-lfimg" />
            <p className="sell-para">Samsung S25 Ultra</p>
            <button className="sale-btn">Add to Cart</button>
            <span>upto 20% Off</span>
          </div>

          <div className="sellproduct-box">
            <img src={Opporeno} alt="loading..." className="hotsell-lfimg" />
            <p className="sell-para">Samsung S25 Ultra</p>
            <button className="sale-btn">Add to Cart</button>
            <span>upto 20% Off</span>
          </div>

          <div className="sellproduct-box">
            <img src={Opporeno} alt="loading..." className="hotsell-lfimg" />
            <p className="sell-para">Samsung S25 Ultra</p>
            <button className="sale-btn">Add to Cart</button>
            <span>upto 20% Off</span>
          </div>
        </div>

        <div className="sellproduct-box">
          <img src={Opporeno} alt="loading..." className="hotsell-rimg" />
          <p className="sell-para">Samsung S25 Ultra</p>
          <div className="rsale-btnbox">
            <button className="hsell-rbtn">Add to Cart</button>
            <span>Get Flat 30% Off</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotselling;
