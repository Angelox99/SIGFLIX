import React, { useState } from 'react';
import './Home.css';
import '../Player/Player.css';
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../assets/solo_banner.png';
import hero_title from '../../assets/solo_tittle.png';
import play_icon from '../../assets/play_icon.png';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import TitleCardsAvaliados from '../../components/TitleCards/TitleCards-Avaliados';
import TitleCardsPopulares from '../../components/TitleCards/titleCards-Populares';
import TitleCardsTrend from '../../components/TitleCards/TitleCards-Trending';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  const [showTrailer, setShowTrailer] = useState(false);

  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p>
            Em um mundo onde caçadores humanos que possuem habilidades mágicas devem lutar contra monstros mortais para proteger a raça humana de certa aniquilação, um caçador notoriamente fraco chamado <b>Sung Jinwoo</b> se encontra em uma luta aparentemente interminável pela sobrevivência.
          </p>
          <div className="hero-btns">
            <button
              className='btn'
              onClick={() => setShowTrailer(!showTrailer)}
            >
              <img src={play_icon} alt="" />Assistir
            </button>
          </div>
          {showTrailer && (
            <div className='player'>
              <img
                src={back_arrow_icon}
                alt="Fechar"
                onClick={() => setShowTrailer(false)}
              />
              <div className="iframe-container">
                <iframe
                  src="https://www.youtube.com/embed/ujv2fLp3lU8"
                  title='trailer'
                  frameBorder='0'
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
          <h2><u>Mais Recentes :</u></h2>
          <TitleCardsTrend />
          <h2><u>Mais Vistos :</u></h2>
          <TitleCardsPopulares />
          <h2><u>Mais Avaliados :</u></h2>
          <TitleCardsAvaliados />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;