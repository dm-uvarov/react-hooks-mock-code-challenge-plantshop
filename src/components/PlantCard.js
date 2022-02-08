import React,{useState} from "react";





function PlantCard({name, image, price}) {
  const [isStocked,setIsStocked] = useState(true);
  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isStocked ? (
        <button onClick={()=>setIsStocked(false)} className="primary">In Stock</button>
      ) : (
        <button onClick={()=>setIsStocked(true)} >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
