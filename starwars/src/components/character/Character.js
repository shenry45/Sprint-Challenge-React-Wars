import React from 'react';
import './character.css';

function Character(props) {

  const eyeColor = { 
    background: props.char.eye_color
  }

  return (
    <div className="character">
      <div className="primary">
        <div className="container-info">
          <h3>{props.char.name}</h3>
          <p>Gender: {(props.char.gender).toUpperCase()}</p>
        </div>
        <div className="container-stats">
          <p>Birth Year: {props.char.birth_year}</p>
          <p>Height: {props.char.height}cm</p>
          <p>Weight: {props.char.mass}kg</p>
        </div>
      </div>
      <div className="secondary" style={eyeColor}></div>
    </div>
  )
}

export default Character;