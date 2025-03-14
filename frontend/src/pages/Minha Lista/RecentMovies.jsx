import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './RecentMovies.css';

const RecentMovies = () => {
  const [recentMovies, setRecentMovies] = useState([]);

  useEffect(() => {
    const storedMovies = localStorage.getItem('recentMovies');
    if (storedMovies) {
      setRecentMovies(JSON.parse(storedMovies));
    }
  }, []);

  return (
    <div className='recent-movies'>
      <Navbar />
      <div className='movies-grid'>
        {recentMovies.length > 0 ? (
          recentMovies.map((movie, index) => (
            <div key={index} className='movie-card'>
              <img src={movie.image} alt={movie.title} />
              <h3>{movie.title}</h3>
            </div>
          ))
        ) : (
          <p>Nenhum filme encontrado.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default RecentMovies;