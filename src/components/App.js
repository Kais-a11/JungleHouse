import { useState , useEffect} from 'react';
import logo from '../assets/logo.png';
import Banner from './Banner';
import Cart from './Cart';
import Footer from './Footer';
import ShoppingList from './ShoppingList';
import '../style/layout.css'
function App() {
  const savedCart = localStorage.getItem("cart");
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="App">
      <Banner>
        <img
          src={logo}
          alt=''
          className="jh-logo"
        />
        <h2 className="jh-title">Jungle house</h2>        
      </Banner>
      <div className='jh-layout-inner'>
        <Cart cart={cart} updateCart={updateCart}/>
        <ShoppingList cart={cart} updateCart={updateCart}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
