import React, { useState } from "react";

export default function SetState() {
  const [count, setCount] = useState(1);

  function Increment() {
    if (count < 5) {
      setCount(count + 1);
      console.log("count is increasing:", count);
    }
  }
  function Decrement() {
    if (count > 1) {
      setCount(count - 1);
      console.log("count is decreasing:", count);
    }
  }

  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="image">
              <img
                src="https://dosa.finance/img/nft_mint.png"
                alt="left-side-img"
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="right-hand-side d-flex justify-content-between">
              <div className="bnb-container">
                <p>PRICE PER DOSACRAT</p>
                <h3 className="text">- BNB</h3>
              </div>
              <div className="bnb-container">
                <p className="text-center">TOTAL</p>
                <h3 className="text">- BNB</h3>
              </div>
            </div>

            <div className="newcontainer">
              <p className="text-center mt-5">MINT YOUR</p>
              <p className="text-center">DOSACRAT</p>
            </div>

            <div className="input-text">
              <div class="input-group mb-3">
                <button class="input-group-text" onClick={() => Decrement()}>
                  -
                </button>
                <input
                  type="text"
                  class="form-control text-center"
                  aria-label="Amount (to the nearest dollar)"
                  value={count}
                />

                <button class="input-group-text" onClick={() => Increment()}>
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
