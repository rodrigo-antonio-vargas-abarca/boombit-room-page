import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import imageCarousel1 from '../images/pages/axes/img-1.png';
import imageCarousel2 from '../images/pages/axes/img-2.png';
import imageCarousel3 from '../images/pages/axes/img-3.png';
import imageCarousel4 from '../images/pages/axes/img-4.png';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={imageCarousel1} onDragStart={handleDragStart} role="show" alt=""/>,
  <img src={imageCarousel2} onDragStart={handleDragStart} role="show" alt=""/>,
  <img src={imageCarousel3} onDragStart={handleDragStart} role="show" alt=""/>,
  <img src={imageCarousel4} onDragStart={handleDragStart} role="show" alt=""/>,
  <img src={imageCarousel1} onDragStart={handleDragStart} role="show" alt=""/>,
  <img src={imageCarousel2} onDragStart={handleDragStart} role="show" alt=""/>,
  <img src={imageCarousel3} onDragStart={handleDragStart} role="show" alt=""/>,
  <img src={imageCarousel4} onDragStart={handleDragStart} role="show" alt=""/>,
];

function Axes() {
  return (
    <div className='section-axes my-5'>
      <h1 className='pt-5 mb-5'>Nuestra pasión</h1>
      <AliceCarousel mouseTracking items={items} autoWidth={true}/>
    </div>
  )
}

export default Axes
