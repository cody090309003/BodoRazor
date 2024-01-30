import React from 'react';
import '../components/styles/home.css';
import "../components/json/homes"
import { card, imageUrls } from '../components/json/homes';
import  {  useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

function Home() {

  const [currentImage, setCurrentImage] = useState(0);

  const cardsAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const image = document.querySelector('.hero .image-container img');
      image.classList.add('fade-out');

      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % imageUrls.length);
        image.classList.remove('fade-out');
      }, 500);

    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  
  return (

    <div className="container">
      <section className="hero">
        <div className="image-container">
        <img src={imageUrls[currentImage]} alt="Imagen Principal" />
          <div className="overlay">
            <div className="text-box">
              <h1>BIENVENIDO</h1>
              <p>Descubre nuestros productos </p>
              <button>Ver más</button>
            </div>
          </div>
        </div>
      </section>
      <div className='row'>
        {card.map((item,index) => (
           <animated.div className='col-sm-4 col-12' key={index} style={cardsAnimation}>
           <section className="cards">
             <div className="cards-container">
               <div className="card">
                 <img className='image' src={item.imageURL} alt={`Imagen ${index + 1}`} />
                 <h3>{item.title}</h3>
                 <p>{item.content}</p>
               </div>
             </div>
           </section>
         </animated.div>
       ))};
      </div>
    </div>
  );
}

export default Home;
