import React from "react";
import CharacterList from "../data/CharacterList";

const Characters = () => {
  const ShowCharacters = () => {
    return (
      <>
        <div className="buttons mb-5 pb-5">
          <button className="btn btn-outline-dark me-1">All</button>
          <button className="btn btn-outline-dark me-1">Super Mario</button>
          <button className="btn btn-outline-dark me-1">Donkey Kong</button>
          <button className="btn btn-outline-dark me-1">
            The Legend of Zelda
          </button>
          <button className="btn btn-outline-dark me-1">Metroid</button>
          <button className="btn btn-outline-dark me-1">Yoshi</button>
          <button className="btn btn-outline-dark me-1">Kirby</button>
          <button className="btn btn-outline-dark me-1">Star Fox</button>
          <button className="btn btn-outline-dark me-1">Pokemon</button>
          <button className="btn btn-outline-dark me-1">Earth Bound</button>
          <button className="btn btn-outline-dark me-1">F-Zero</button>
          <button className="btn btn-outline-dark me-1">Ice Climbers</button>
          <button className="btn btn-outline-dark me-1">Fire Emblem</button>
          <button className="btn btn-outline-dark me-1">Game & Watch</button>
          <button className="btn btn-outline-dark me-1">Kid Icarus</button>
          <button className="btn btn-outline-dark me-1">Wario Ware</button>
          <button className="btn btn-outline-dark me-1">Metal Gear</button>
          <button className="btn btn-outline-dark me-1">Sonic</button>
          <button className="btn btn-outline-dark me-1">Pikmin</button>
          <button className="btn btn-outline-dark me-1">R.O.B.</button>
          <button className="btn btn-outline-dark me-1">Animal Crossing</button>
          <button className="btn btn-outline-dark me-1">Mega Man</button>
          <button className="btn btn-outline-dark me-1">Wii Fit</button>
          <button className="btn btn-outline-dark me-1">Punch-Out!!</button>
          <button className="btn btn-outline-dark me-1">Downloadable</button>
        </div>
        {CharacterList.map(({id, images, name, series}) => {
          return (
            <>
              <div className="col-md-3">
                <div className="card" key={id}>
                  <img src={images.portrait} height="275px"className="card-img-top" alt={series.name} />
                  <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
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
