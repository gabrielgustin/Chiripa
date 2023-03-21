import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Context/CartContext';
import Home from './Components/Home/Home';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Contacto from './Components/Contacto/Contacto';
import CartContainer from './Components/CartContainer/CartContainer';
import PgFOF from './Components/PgFOF';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/item" element={<ItemListContainer />} />
          <Route exact path="/item/:categoryId" element={<ItemListContainer />} />
          <Route exact path="/item/:categoryId/:productId" element={<ItemDetailContainer />} />
          <Route exact path="/contacto" element={<Contacto />} />
          <Route exact path="/cart" element={<CartContainer />} />
          <Route exact path="*" element={<PgFOF />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
};

export default App;