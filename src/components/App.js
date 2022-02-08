import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

const link = "http://localhost:6001/plants"

const [plants, setPlants] = useState([]);


function App() {

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(r => r.json())
      .then(plants => setPlants(plants))
      
  }, [])

  


  // 1 props
  // const plants = data.map((plant => ())

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