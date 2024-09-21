
import './Carousel.css'
import { useEffect, useState } from 'react';

import cheeseburger from '../../images/browser/cheeseburger.png'
import happyHomer from '../../images/browser/happyHomer.jpg'
import happyCow from '../../images/browser/happyCow.jpeg'
import threeBurgers from '../../images/browser/threeBurgers.jpg'
import smashBurgerBrosSmall from '../../images/browser/smashBurgerBrosSmall.png'

export default function Carousel() {

    const images = [
        cheeseburger,
        happyHomer,
        happyCow,
        threeBurgers,
        cheeseburger,
        happyHomer,
        smashBurgerBrosSmall,
        threeBurgers,
        cheeseburger,
        happyHomer
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  
      }, 3000); 
  
      return () => clearInterval(intervalId); 
    }, [images.length]);

  return (
    <div>
        
        <div className="carousel">
            <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
        </div>
  
  </div>
  )
}
