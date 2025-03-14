import React, { useEffect, useState } from 'react';
import './TitleCards.css';
import { Link } from 'react-router-dom';
import { FaSmile, FaFrown } from 'react-icons/fa';

const TitleCards = () => {
  const [apiData, setApiData] = useState([]);
  const [recommendations, setRecommendations] = useState(() => {
    // Carrega as recomendações do localStorage ao inicializar
    const savedRecommendations = localStorage.getItem('recommendations');
    return savedRecommendations ? JSON.parse(savedRecommendations) : {};
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGQ4NmEyMzA4ZjUwZDYwMmE0ODI3OTlhODg5ZWZhMSIsIm5iZiI6MTc0MTI5OTE0My43NDcsInN1YiI6IjY3Y2ExZGM3ZGJhMTQ5MTYwNjJiMzczNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iNFPwr7VCM76NOA2LZJBQdBpCdrYuLuJKkPNhPotwCg'
    }
  };

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err));
  }, []);

  const handleRecommendation = (id, type) => {
    const currentRecommendation = recommendations[id];
    let newType;

    if (currentRecommendation === type) {
      newType = null; // Remove a recomendação se clicar novamente no mesmo ícone
    } else {
      newType = type;
    }

    const newRecommendations = {
      ...recommendations,
      [id]: newType
    };
    setRecommendations(newRecommendations);
    // Salva as recomendações no localStorage
    localStorage.setItem('recommendations', JSON.stringify(newRecommendations));
  };

  // Ordena os filmes com base nas recomendações
  const sortedApiData = [...apiData].sort((a, b) => {
    const recommendationA = recommendations[a.id];
    const recommendationB = recommendations[b.id];

    if (recommendationA === 'good' && recommendationB !== 'good') {
      return -1;
    }
    if (recommendationA !== 'good' && recommendationB === 'good') {
      return 1;
    }
    if (recommendationA === 'bad' && recommendationB !== 'bad') {
      return 1;
    }
    if (recommendationA !== 'bad' && recommendationB === 'bad') {
      return -1;
    }
    if (recommendationA === null && recommendationB !== null) {
      return -1;
    }
    if (recommendationA !== null && recommendationB === null) {
      return 1;
    }
    return 0;
  });

  return (
    <div className='title-cards'>
      <div className="card-list">
        {sortedApiData.map((card, index) => {
          return (
            <div className="card" key={index}>
              <Link to={`/player/${card.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" />
                <div className="card-title">
                  <p>
                    {card.title.length > 40 ? card.title.slice(0, 37) + "..." : card.title}
                  </p>
                </div>
              </Link>
              <div className="recommendation-icons">
                <FaSmile
                  onClick={() => handleRecommendation(card.id, 'good')}
                  style={{ color: recommendations[card.id] === 'good' ? 'green' : 'inherit', cursor: 'pointer' }}
                />
                <FaFrown
                  onClick={() => handleRecommendation(card.id, 'bad')}
                  style={{ color: recommendations[card.id] === 'bad' ? 'red' : 'inherit', cursor: 'pointer' }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
