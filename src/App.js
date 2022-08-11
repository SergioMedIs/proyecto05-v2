import Product from './components/Product'
import Navbar from './components/Navbar'
import Products from './components/Porducts'
import products from './Product-data'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Products/>
{/*      <Product/> */}
    </div>
  );
}

export default App;
