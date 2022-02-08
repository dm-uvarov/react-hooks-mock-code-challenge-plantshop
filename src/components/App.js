import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

const link = "http://localhost:6001/plants"





function App() {
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    fetch(link)
      .then(r => r.json())
      .then(setPlants)
      
  
  }, [])

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} />
    </div>
  );
}

export default App;


// [
//   {
//     "id": 1,
//     "name": "Aloe",
//     "image": "./images/aloe.jpg",
//     "price": 15.99
//   },
//   {
//     "id": 2,
//     "name": "ZZ Plant",
//     "image": "./images/zz-plant.jpg",
//     "price": 25.98
//   }
// ]