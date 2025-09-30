import React from 'react';
import './subheading.css'
import {images} from '../../constants'
function Subheading({ title }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <p className='p__cormorant'> {title}</p>
      <img src={images.spoon} alt="spoon" className='spoon__image' />
    </div>
  )
}

export default Subheading