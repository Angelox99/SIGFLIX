import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/nome-SIGFLIX.png';
import search_icon from '../../assets/search_icon.png';
import profile_icon from '../../assets/profile.png';

const Navbar = () => {
  const navRef = useRef();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark');
      } else {
        navRef.current.classList.remove('nav-dark');
      }
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate('/login');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchTerm}`);
  };

  return (
    <div ref={navRef} className='navbar'>
      <div className='navbar-left'>
        <img src={logo} alt="" onClick={handleLogoClick} style={{ cursor: 'pointer' }} />
        <ul>
          <li onClick={() => navigate('/recent-movies')}>Minha Lista</li>
        </ul>
      </div>
      <div className='navbar-center'>
        <form onSubmit={handleSearch} className='search-form'>
          <input
            type='text'
            placeholder='Search...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type='submit'>
            <img src={search_icon} alt="Search" className='icons'/>
          </button>
        </form>
      </div>
      <div className='navbar-right'>
        <p>{user ? user.name : "Nome do Usuário"}</p>
        <div className='navbar-profile'>
          <img src={profile_icon} alt="" className='profile'/>
          <div className="dropdown">
            <p onClick={handleLogout}>Sair da conta</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

