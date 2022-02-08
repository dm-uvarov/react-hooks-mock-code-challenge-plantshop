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
  
  const [searchValue,setSearchValue] = useState("");

  const searchPlant = e => {setSearchValue(e.target.value )}

  const searchedPlants = plants.filter(plantObj => {
    const lowerName = plantObj.name.toLowerCase()
    const lowerSearch = searchValue.toLowerCase()
    return lowerName.includes( lowerSearch )
  }) 

  console.log(plants)
  return (
    <main>
      <NewPlantForm addNewPlantCardToState= { addNewPlantCardToState} />
      <Search searchPlant={searchPlant}/>
      <PlantList  plants={searchedPlants} />
    </main>
  );
}

export default PlantPage;
