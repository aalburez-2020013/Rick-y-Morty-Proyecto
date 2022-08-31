import React from "react";
import "./characters.css";
const Characters = ({ characters = [] }) => {
  return (
    <div className="grid-container">
      {characters.map((item, index) => (
        <div key={index} className="col">
          <div className="card">
            <img src={item.image} alt="" />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <hr />
              <p className="species">species: {item.species}</p>
              <p className="location">location: {item.location.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;
