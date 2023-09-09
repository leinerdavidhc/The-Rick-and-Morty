import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
  const [statusColorClass, setStatusColorClass] = useState("text-white"); // Clase CSS para el color del status
  useEffect(()=>{
    // Determina el color del punto en función del status
    if (character.status === "Alive") {
      setStatusColorClass("text-green-500"); // Verde para Alive
    } else if (character.status === "Dead") {
      setStatusColorClass("text-red-500"); // Rojo para Dead
    }
  },[])
  return (
    <div className="bg-gray-700 text-white rounded-lg p-4 m-4">
      <Link to={`/character/${character.id}`}>
        {" "}
        {/* Agrega un enlace */}
        <img src={character.image} alt={character.name} />
        <h2>{character.name}</h2>
        <p>Species: {character.species}</p>
        <p>
          Status: <span className={statusColorClass}>{character.status}</span>
        </p>
        <p>Gender: {character.gender}</p>
        {/* Add any additional information you want to display */}
      </Link>
    </div>
  );
};

export default CharacterCard;
