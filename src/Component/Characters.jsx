import React, { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";
import CharacterList from "../data/CharacterList";

const Characters = () => {
  const [franchise, setFranchise] = useState("");

  const ShowCharacters = () => {
    return (
      <>
        <div className="buttons mb-5 pb-5" align="center">
          <button
            className="btn btn-outline-dark me-1"
            onClick={() => setFranchise("All")}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-1"
            onClick={() => setFranchise("Super Mario")}
          >
            Super Mario
          </button>
          <button
            className="btn btn-outline-dark me-1"
            onClick={() => setFranchise("Donkey Kong")}
          >
            Donkey Kong
          </button>
          <button
            className="btn btn-outline-dark me-1"
            onClick={() => setFranchise("The Legend of Zelda")}
          >
            The Legend of Zelda
          </button>
          <button
            className="btn btn-outline-dark me-1"
            onClick={() => setFranchise("Metroid")}
          >
            Metroid
          </button>
          <button
            className="btn btn-outline-dark me-1"
            onClick={() => setFranchise("Yoshi")}
          >
            Yoshi
          </button>
          <button
            className="btn btn-outline-dark me-1"
            onClick={() => setFranchise("Kirby")}
          >
            Kirby
          </button>
          <button
            className="btn btn-outline-dark me-1"
            onClick={() => setFranchise("Star Fox")}
          >
            Star Fox
          </button>
          <button
            className="btn btn-outline-dark me-1"
            onClick={() => setFranchise("Pokemon")}
          >
            Pokemon
          </button>
          <button
            className="btn btn-outline-dark me-1"
            onClick={() => setFranchise("EarthBound")}
          >
            EarthBound
          </button>
          <button
            className="btn btn-outline-dark me-1"
            onClick={() => setFranchise("F-Zero")}
          >
            F-Zero
          </button>
          <button
            className="btn btn-outline-dark me-1"
            onClick={() => setFranchise("Ice Climbers")}
          >
            Ice Climbers
          </button>
          <button
            className="btn btn-outline-dark me-1"
            onClick={() => setFranchise("Fire Emblem")}
          >
            Fire Emblem
          </button>
          <button
            className="btn btn-outline-dark me-1"
            onClick={() => setFranchise("Game & Watch")}
          >
            Game & Watch
          </button>
          <button
            className="btn btn-outline-dark me-1"
            onClick={() => setFranchise("Kid Icarus")}
          >
            Kid Icarus
          </button>
          <button
            className="btn btn-outline-dark me-1"
            onClick={() => setFranchise("Wario Ware")}
          >
            Wario Ware
          </button>
          <button
            className="btn btn-outline-dark me-1"
            onClick={() => setFranchise("Metal Gear")}
          >
            Metal Gear
          </button>
          <button
            className="btn btn-outline-dark me-1"
            onClick={() => setFranchise("Sonic")}
          >
            Sonic
          </button>
          <button
            className="btn btn-outline-dark me-1"
            onClick={() => setFranchise("Pikmin")}
          >
            Pikmin
          </button>
          <button
            className="btn btn-outline-dark me-1"
            onClick={() => setFranchise("R.O.B.")}
          >
            R.O.B.
          </button>
          <button
            className="btn btn-outline-dark me-1"
            onClick={() => setFranchise("Animal Crossing")}
          >
            Animal Crossing
          </button>
          <button
            className="btn btn-outline-dark me-1"
            onClick={() => setFranchise("Mega Man")}
          >
            Mega Man
          </button>
          <button
            className="btn btn-outline-dark me-1"
            onClick={() => setFranchise("Xenoblade Chronicles")}
          >
            Xenoblade Chronicles
          </button>
          <button
            className="btn btn-outline-dark me-1"
            onClick={() => setFranchise("Wii Fit")}
          >
            Wii Fit
          </button>
          <button
            className="btn btn-outline-dark me-1"
            onClick={() => setFranchise("Punch-Out!!")}
          >
            Punch-Out!!
          </button>
          <button
            className="btn btn-outline-dark me-1"
            onClick={() => setFranchise("Downloadable")}
          >
            Downloadable
          </button>
        </div>
        {CharacterList.filter((characters) => {
          if (franchise === "") {
            return CharacterList;
          } else if (franchise === "All") {
            return CharacterList;
          } else if (franchise === characters.availability) {
            return characters;
          } else if (franchise === characters.series.name) {
            return characters;
          } else if (franchise === characters.series.icon) {
            return characters;
          }
        }).map(({ id, images, name, series }) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={id}>
                  <img
                    src={images.portrait}
                    height="275px"
                    className="card-img-top"
                    alt={name}
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0  fw-bold">{name}</h5>
                    <p className="card-text lead">${series.price}</p>
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
