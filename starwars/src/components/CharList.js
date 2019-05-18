import React from 'react';
import Character from './character/Character';

function CharList(props) {
  return (
    <div className="character-list">
      {props.starwarsChars.map( char => (
        <Character char={char} />
      ))}
    </div>
  )
};

export default CharList;