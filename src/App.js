import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBar from './Components/TopBar'
import NavBar from './Components/NavBar'
import Shop from './Pages/Shop';
import Detail from './Pages/Detail';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import Contactus from './Pages/Contactus';
import Home from './Pages/Home';
import Footer from './Components/Footer';


function App() {

  return (
    <>
      <BrowserRouter>
        <TopBar />
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Shop' element={<Shop />} />
          <Route path='/Detail' element={<Detail />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Checkout' element={<Checkout />} />
          <Route path='/Contactus' element={<Contactus />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
