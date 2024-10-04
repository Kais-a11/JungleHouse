import React, { useState } from 'react'
import '../style/Footer.css'
function Footer() {
    const [inputValue,setInputValue]=useState("");
    const [Nbm,setNumber]=useState(20);
    
    const increment=()=>{
        setNumber(Nbm+1);
    }
    const decrement=()=>{
        setNumber(Nbm-1)
    }
    const handleInput=(e)=>{
        setInputValue(e.target.value)
        console.log(e.target.value)
    }
    const handleBlur=()=>{
        if(!inputValue.includes('@')){
            alert('veuillez entrer une adresse mail valid')
        }
    }
  return (
    <footer className='jh-footer'>
        <div className='jh-footer-elem'>
            For plants
        </div>
        <div className='jh-footer-elem'>
            Subscribe to our memsletter
        </div>
        <input placeholder='Enter your email' 
        value={inputValue} onChange={handleInput}
        onBlur={handleBlur}
        />
        <div>
            {Nbm}
        </div>
        <div>
            <button onClick={increment}>
            +
            </button>
            <button onClick={decrement} >
            -
            </button>
        </div>
        
    </footer>
  )
}

export default Footer
