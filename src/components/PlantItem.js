import React from 'react'
import'../style/plantItem.css'
import CareScale from './CareScale';


function PlantItem({cover,name,price,water,light}) {
  return (
    <div>
      <li className='jh-plant-item'>
        <span className='jh-plant-item-price'>
            {price}$ 
        </span>
        <img className='jh-plant-item-cover' src={cover} alt={`${name} cover`}/>
            
            {name}
            <div>
              <CareScale careType="Water" scaleValue={water}/>
              <CareScale careType="Light" scaleValue={light}/>
            </div>
      </li>
      
    </div>
    
  )
}

export default PlantItem
