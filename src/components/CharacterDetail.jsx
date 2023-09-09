import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [statusColorClass, setStatusColorClass] = useState("text-white"); // Clase CSS para el color del status

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        setCharacter(response.data);
        // Determina el color del punto en función del status
        if (response.data.status === "Alive") {
          setStatusColorClass("text-green-500"); // Verde para Alive
        } else if (response.data.status === "Dead") {
          setStatusColorClass("text-red-500"); // Rojo para Dead
        }
      })
      .catch((error) => {
        console.error("Error fetching character details:", error);
      });
  }, [id]);

  if (!character) {
    return (
      <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center">
        {" "}
        {/* Estilos para centrar */}
        <Header />
        <main className="p-4 text-white">
          <p>Loading...</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center">
      {" "}
      {/* Estilos para centrar */}
      <Header />
      <main className="p-4 text-white flex flex-col items-center">
        {" "}
        {/* Estilos para centrar */}
        <h2 className="text-2xl font-semibold">{character.name}</h2>
        <img
          src={character.image}
          alt={character.name}
          className="w-64 h-64 rounded-lg"
        />{" "}
        {/* Aumenta el tamaño de la imagen */}
        <p>Species: {character.species}</p>
        <p>
          Status: <span className={statusColorClass}>{character.status}</span>
        </p>
        <p>Gender: {character.gender}</p>
        {/* Agrega cualquier otra información que desees mostrar */}
        <Link
          to="/"
          className="bg-gray-700 text-white p-2 rounded-lg absolute top-0 left-0 m-4"
        >
          Volver a la página principal
        </Link>{" "}
        {/* Botón en la esquina superior izquierda */}
      </main>
      <Footer />
    </div>
  );
};

export default CharacterDetail;
