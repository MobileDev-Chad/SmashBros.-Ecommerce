import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import CharacterList from "../data/CharacterList";
import { addToCart, removeItem } from "../redux/cartSlice";

const CharacterInfo = () => {
  const { id } = useParams();

  const [cartBtn, setCartBtn] = useState("Add to Cart");

  const dispatch = useDispatch();

  const cName = cartBtn === "Add to Cart" ? "primary" : "danger";

  const handleCart = ({ id, images, name, series }) => {
    if (cartBtn === "Add to Cart") {
      dispatch(addToCart({ id, images, name, series }));
      setCartBtn("Remove from Cart") 
    } else {
      dispatch(removeItem(id));
      setCartBtn("Add to Cart")
    }
  };


  const ShowCharacter = () => {
    return (
      <>
        {CharacterList.filter((character) => {
          if (id === character.id) {
            return CharacterList;
          }
        }).map(({ id, images, name, series, description }) => {
          return (
            <>
              <div className="col-md-6" key={id}>
                <img
                  src={images.portrait}
                  alt={name}
                  height="400px"
                  width="400px"
                />
              </div>
              <div className="col-md-6">
                <h4 className="text-uppercase text-black-100 fs-3 fw-bold">
                  <img src={series.icon} alt="" height="30px" />
                  {series.name}
                </h4>
                <h1 className="display-5">{name}</h1>
                <h3 className="display-6 fw-bold my-4">$ {series.price}</h3>
                <p className="lead">{description}</p>
                <button
                  className={`btn btn-outline-dark btn-${cName} px-4 py-2`}
                  onClick={() => handleCart({id, images, name, series})}
                >
                  {cartBtn}
                </button>
                <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
                  Go to Cart
                </NavLink>
              </div>
            </>
          );
        })}
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
