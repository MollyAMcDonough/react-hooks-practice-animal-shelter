import React, {useState} from "react";

function Pet({ pet, onAdoptPet }) {
  const {age, id, name, type, weight, isAdopted, gender} = pet;
  //const [adopted, setAdopted] = useState(isAdopted);
  let buttons;
  if (isAdopted) {
    buttons = 
      <div className="extra content">
        <button className="ui primary button">Already adopted</button>
      </div>
  } else {
    buttons = 
      <div className="extra content">
        <button className="ui primary button" onClick={()=>onAdoptPet(id)}>Adopt pet</button>
      </div>
  }
  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {gender==='female' ? '♀' : '♂'}
          {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>{`Age: ${age}`}</p>
          <p>{`Weight: ${weight}`}</p>
        </div>
      </div>
      {buttons}
    </div>
  );
}

export default Pet;
