import React from "react";
import { useDispatch } from "react-redux";
import { openQuickView } from "../redux/btns/quickviewSlice.js";
import { saleProducts } from "../ProductData/saleProducts";
import Btnaddcart from "../buttons/btnaddcart";

const Hotselling = () => {
  const dispatch = useDispatch();
  const hotProducts = saleProducts.slice(0, 7);

  return (
    <div className="hotproduct-parent">
      <div className="hitsell-tst">
        <h2 className="mt-2">On Sale</h2>
      </div>

      <div className="hotsell-box">
        <div className="hotsell-left">
          {hotProducts.slice(0, 4).map((product) => (
            <div
              key={product.id}
              className="sellproduct-box"
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "10px",
                textAlign: "center",
                width: "48%",
              }}
            >
              <img
                src={product.image}
                alt=" loading..."
                className="hotsell-lfimg"
              />
              <p className="sell-para">{product.name}</p>
              <div className="flex flex-row  items-center justify-center gap-3 mb-1 ">
                <Btnaddcart product={product} />
                <button
                  onClick={() => dispatch(openQuickView(product))}
                  className="bg-[#b5d331] text-[#222] font-semibold py-2 px-4 rounded-lg 
             hover:bg-green-700 hover:text-[#222] transform hover:scale-105 
             transition duration-300"
                >
                  Quick View
                </button>
              </div>

              <span>upto 20% Off</span>
            </div>
          ))}
        </div>

        <div
          className="sellproduct-box"
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
            textAlign: "center",
          }}
        >
          <img
            src={hotProducts[6]?.image}
            alt="Loading..."
            className="hotsell-rimg w-full "
          />
          <p className="sell-para">{hotProducts[6]?.name}</p>
          <div className="rsale-btnbox flex flex-row  items-center justify-center gap-3 mb-1 ">
            <Btnaddcart product={hotProducts[6]} />
            <span>Get Flat 30% Off</span>

            <button
              className="bg-[#b5d331] text-[#222] font-semibold py-2 px-4 rounded-lg 
             hover:bg-green-700 hover:text-[#222] transform hover:scale-105 
             transition duration-300"
              onClick={() => dispatch(openQuickView(hotProducts[6]))}
            >
              Quick View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotselling;
