import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });
  function onFindPetsClick () {
    if (filters.type === "all") {
      fetch("http://localhost:3001/pets")
      .then((response) => response.json())
      .then((petsdb) => setPets(petsdb))
    } else {
      fetch(`http://localhost:3001/pets?type=${filters.type}`)
      .then((response) => response.json())
      .then((petsdb) => setPets(petsdb))
    }
  }

  function onAdoptPet(id) {
    const petsUpdate = pets.map((pet) => {
      if (pet.id === id) return {...pet, isAdopted: true};
      return {...pet};
    });
    setPets(petsUpdate);
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={setFilters} onFindPetsClick={onFindPetsClick}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={onAdoptPet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
