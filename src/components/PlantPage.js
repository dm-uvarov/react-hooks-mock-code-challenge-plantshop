import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const link = "http://localhost:6001/plants";


function PlantPage() {

  const [plants, setPlants] = useState([]);
  useEffect(() => {
    fetch(link)
      .then(r => r.json())
      .then(setPlants)
      
  
  }, [])

  const addNewPlantCardToState = newPlant =>{
    setPlants([...plants, newPlant])
  } 
  


  console.log(plants)
  return (
    <main>
      <NewPlantForm addNewPlantCardToState= { addNewPlantCardToState} />
      <Search />
      <PlantList  plants={plants} />
    </main>
  );
}

export default PlantPage;
