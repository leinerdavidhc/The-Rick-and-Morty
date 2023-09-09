import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios'; // Importa la librería axios

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Realiza una solicitud a la API para obtener la lista de personajes
    axios.get('https://rickandmortyapi.com/api/character/')
      .then((response) => {
        // Actualiza el estado de los personajes con la información obtenida de la API
        setCharacters(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching characters:', error);
      });
  }, []);

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      <main className="p-4">
        <input
          type="text"
          placeholder="Search by name..."
          className="bg-gray-700 text-white p-2 rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredCharacters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
