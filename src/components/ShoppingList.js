import React, { useState } from 'react';
import { plantList } from '../datas/plantList';
import '../style/ShoppingList.css';
import Categories from './Categories';
import PlantItem from './PlantItem';

function ShoppingList({cart,updateCart}) {
  const [activeCategory, setActiveCategory] = useState('');

  let sameWaterLight = plantList.find(plant => plant.light === plant.water);
  let maxWater = plantList.filter(plant => plant.water === 3);
  let minLight = plantList.filter(plant => plant.light === 1);
  let maxPrice = plantList.reduce((max, plant) => plant.price > max.price? plant : max, plantList[0]);
  console.log("Objet avec la même valeur pour 'light' et 'water':", sameWaterLight);
  console.log("Objets avec une valeur de 3 pour 'water':", maxWater);
  console.log("Objets avec une valeur de 1 pour 'light':", minLight);
  console.log("Objet avec la valeur maximale pour 'price':", maxPrice);


  function addToCart (name, price){
    const currentPlantAdded= cart.find (plant=>plant.name ===name)
    if (currentPlantAdded){
      const cartFiltered=cart.filter(plant=>plant.name!==name)
      updateCart ([...cartFiltered,{name,price,amount:currentPlantAdded.amount+1}])}
    else {updateCart([...cart,{name,price,amount:1}])}
    
  }

  const categories = plantList.reduce((acc, plant) =>
    acc.includes(plant.category) ? acc : acc.concat(plant.category), []);

  return (
    <div className='jh-shoppingList'>
      <Categories
        categories={categories}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />
      <ul className='jh-plant-list'>
        {plantList.map(({ id, cover, name, price, category,water, light }) => {
          if (activeCategory === '' || activeCategory === category) {
            return (
              <div key={id}>
                <PlantItem
                  cover={cover}
                  name={name}
                  price={price}
                  water={water}
                  light={light}
                />
                <button onClick={()=>addToCart(name,price)}> Add </button>
              </div>
            );
          }
          return null;
        })}
      </ul>
    </div>
  )
}

export default ShoppingList;