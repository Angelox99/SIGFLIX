import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './SearchResults.css';

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    const fetchResults = async () => {
      const response = await fetch(`/api/search?query=${query}`);
      const data = await response.json();
      setResults(data);
    };

    fetchResults();
  }, [query]);

  return (
    <div className='search-results'>
      <Navbar />
      <div className='results-grid'>
        {results.length > 0 ? (
          results.map((result, index) => (
            <div key={index} className='result-card'>
              <img src={result.image} alt={result.title} />
              <h3>{result.title}</h3>
            </div>
          ))
        ) : (
          <p>No results found for "{query}".</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SearchResults;