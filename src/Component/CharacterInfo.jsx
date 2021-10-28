import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, delItem } from "../redux/action";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import CharacterList from "../data/CharacterList";

const CharacterInfo = () => {
  const { id } = useParams();

  const [cartBtn, setCartBtn] = useState("Add to Cart");

  const dispatch = useDispatch();

  const cName = cartBtn === "Add to Cart" ? "primary" : "danger";

  const handleCart = (character) => {
    if (cartBtn === "Add to Cart") {
      dispatch(addItem(character));
      setCartBtn("Remove from Cart");

    } else {
      dispatch(delItem(character));
      setCartBtn("Add to Cart");
    }
  };

  const ShowCharacter = ({ character }) => {
    return (
      <>
        {CharacterList.filter((characters) => {
          if (id === characters.id) {
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
                  onClick={() => handleCart(character)}
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
