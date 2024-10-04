import React, { useState } from 'react';
import'../style/Categories.css'

function Categories({ categories,setActiveCategory, activeCategory }) {
 

  return (
    <div className='jh-categorie'>
      <select 
        value={activeCategory}
        className='jh-categorie-select'
        onChange={(e) => setActiveCategory(e.target.value)}
      >
        <option value={''}>none</option>
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}


      </select>
      <button onClick={() => setActiveCategory('')}>reset</button>
      
    </div>
  );
}

export default Categories;
