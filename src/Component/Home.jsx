import React from "react";
import Characters from "./Characters";

const Home = () => {
  return (
    <div className="hero" id="home">
      <div className="card bg-dark text-white border-0 ">
        <img
          src="/assets/bg.jpg"
          className="card-img"
          alt="Background"
          height="845px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0 mx-5">
              SMASH ULTIMATE HAS ARRIVED
            </h5>
            <p className="card-text lead fs-2 mx-5">
              YOUR FAVORITE HEROES...AND VILLIANS
            </p>
          </div>
        </div>
      </div>
          </div>
  );
};

export default Home;
