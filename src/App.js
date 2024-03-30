// import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from 'react-router-dom';
// import Arrval from './componet/Arrval';
// import Footer from './componet/Footer';
import Navbar from './componet/Navbar';
import Product from './componet/Product';
import Blog from './componet/Blog';
import Contact from './componet/Contact';
// import Setion from './componet/Setion';
// import Setion1 from './componet/Setion1';
// import Setion2 from './componet/Setion2';
// import Slider from './componet/Slider';
// import Subscribe from './componet/Subscribe';

function App() {
  return (
    <div className="App">
      
      {/* <Slider />
      <Setion />
      <Arrval/>
      <Setion1 />
      <Subscribe />
      <Setion2 />
      <Footer/> */}
      <Routes>
        <Route path='/' element={<Navbar/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
