import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import CharacterList from "../../data/CharacterList";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Characters = () => {
  const [franchise, setFranchise] = useState("");

  // Reduces the dublicate franchise names to 1
  const groupedByCategory = CharacterList.reduce((acc, item) => {
    if (!Array.isArray(acc[item.franchise])) {
      acc[item.franchise] = [];
    }
    acc[item.franchise].push(item.name);
    return acc;
  }, {});

  const ShowCharacters = () => {
    return (
      <>
        <section className="buttons mb-5 pb-5" align="center">
          <button
            className="btn btn-outline-dark me-1"
            onClick={() => setFranchise("All")}
          >
            All
          </button>

          {Object.entries(groupedByCategory).map(([franchise]) => (
            <button
              className="btn btn-outline-dark me-1"
              onClick={() => setFranchise(`${franchise}`)}
            >
              {franchise}
            </button>
          ))}
        </section>

        {CharacterList.filter((characters) => {
          if (franchise === "") {
            return CharacterList;
          } else if (franchise === "All") {
            return CharacterList;
          } else if (franchise === characters.availability) {
            return characters;
          } else if (franchise === characters.franchise) {
            return characters;
          } else if (franchise === characters.icon) {
            return characters;
          }
        }).map(({ id, portrait, name, price }) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={id}>
                  <LazyLoadImage
                    src={portrait}
                    max-width= "100%"
                    className="card-img-top"
                    alt={name}
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0  fw-bold">{name}</h5>
                    <p className="card-text lead">${price}</p>
                    <NavLink
                      to={`/characters/${id}`}
                      className="btn btn-primary btn-outline-dark "
                    >
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5" id="characters">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Characters</h1>

            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          <ShowCharacters />
        </div>
      </div>
    </div>
  );
};

export default Characters;
