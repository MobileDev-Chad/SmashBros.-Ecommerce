import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container py-5 my-5">
          <div className="row">
               <div className="col-md-6">
          <h1 className="text-primary fw-bold mb-4">About</h1>
          <p className="lead mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            officia illo consequatur deserunt nemo quo nesciunt placeat, modi
            facilis aliquam vitae, fuga corporis quis ab totam libero deleniti.
            At a placeat assumenda, nostrum debitis et? Harum rem voluptas
            nesciunt odit adipisci, delectus natus perspiciatis numquam porro
            odio nihil possimus deserunt, dignissimos, voluptatem repudiandae.
            Debitis perspiciatis harum amet ipsam nulla, qui atque distinctio
            soluta. Eaque inventore aliquam ea? Cupiditate iure eaque magnam
            dolorum iusto modi adipisci, aperiam perspiciatis amet
            exercitationem voluptates placeat excepturi. Nam ut dolore officia,
            accusantium doloribus ipsum animi laborum tempore asperiores error
            aliquid officiis qui possimus excepturi eaque!
          </p>
          <NavLink to="/about" className="btn btn-outline-primary px-3">
            ContactUs
          </NavLink>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
            <img src="/assets/about.png" alt="About Us" height="400px" width="400px"/>
        </div>
          </div>
       
      </div>
    </section>
  );
};

export default About;
