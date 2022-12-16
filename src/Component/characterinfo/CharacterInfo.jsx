import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import CharacterList from "../../data/CharacterList";
import { addToCart, removeItem } from "../../redux/cartSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CharacterInfo = () => {
  const { id } = useParams();

  const [cartBtn, setCartBtn] = useState("Add to Cart");

  const dispatch = useDispatch();

  const cName = cartBtn === "Add to Cart" ? "primary" : "danger";

  const handleCart = ({ id, portrait, name, franchise, price }) => {
    if (cartBtn === "Add to Cart") {
      dispatch(addToCart({ id, portrait, name, franchise, price }));
      setCartBtn("Remove from Cart");
    } else {
      dispatch(removeItem(id));
      setCartBtn("Add to Cart");
    }
  };

  const ShowCharacter = () => {
    return (
      <>
        {CharacterList.filter((character) => {
          if (id === character.id) {
            return CharacterList;
          }
        }).map(
          ({ id, portrait, name, icon, franchise, description, price }) => {
            return (
              <>
                <div className="col-md-6" key={id}>
                  <LazyLoadImage
                    src={portrait}
                    alt={name}
                    height="400px"
                    width="400px"
                  />
                </div>
                <div className="col-md-6">
                  <h4 className="text-uppercase text-black-100 fs-3 fw-bold">
                    <LazyLoadImage src={icon} alt="" height="30px" />
                    {franchise}
                  </h4>
                  <h1 className="display-5">{name}</h1>
                  <h3 className="display-6 fw-bold my-4">$ {price}</h3>
                  <p className="lead">{description}</p>
                  <button
                    className={`btn btn-outline-dark btn-${cName} px-4 py-2`}
                    onClick={() =>
                      handleCart({ id, portrait, name, franchise, price })
                    }
                  >
                    {cartBtn}
                  </button>
                  <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
                    Go to Cart
                  </NavLink>
                </div>
              </>
            );
          }
        )}
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-5">
          <ShowCharacter />
        </div>
      </div>
    </div>
  );
};

export default CharacterInfo;
