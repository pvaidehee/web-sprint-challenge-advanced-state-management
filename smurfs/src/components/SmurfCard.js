import React from "react";

const SmurfCard = (props) => {
  return (
    <div className="smurf">
      <h2>Name: {props.smurfs.name}</h2>
      <h3>Age: {props.smurfs.age}</h3>
      <h3>Height: {props.smurfs.height}</h3>
    </div>
  );
};

export default SmurfCard;