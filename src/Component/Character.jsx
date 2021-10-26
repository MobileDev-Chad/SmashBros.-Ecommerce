import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {NavLink} from 'react-router-dom';
import CharacterList from "../data/CharacterList";

const Character = () => {
  const { id } = useParams();
  //     const [character, setCharacter] = useState([]);

  //    const { id, images, name, series } = CharacterList;
  //  useEffect(() => {

  //  }, [input])

  const ShowCharacter = () => {
    return (
      <>
        {CharacterList.filter((characters) => {
          if (id === characters.id) {
            return CharacterList;
          }
        }).map(({ id, images, name, series,description }) => {
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
                <button className="btn btn-outline-dark btn-primary px-4 py-2">
                  Add to Cart
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

export default Character;
