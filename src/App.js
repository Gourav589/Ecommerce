import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import Camera from './Camera';
import Keyboard from './Keyboard';
import Printers from './Printers';
import Monitor from './Monitor';
import Router from './Router';
import Toy_car from './Toy_car';
import Small_toy from './Small_toy';
import Toy_truck from './Toy_truck';
import Helicopter from './Helicopter';
import Gun from './Gun';
import Belt from './Belt';
import White from './White';
import Shirt from './Shirt';
import Teddy from './Teddy';
import Red from './Red';
import Puma from './Puma';
import Gucci from './Gucci';
import Nike from './Nike';
import RedTape from './RedTape';
import Boat from './Boat';
import Realme from './Realme';
import Noise from './Noise';
import Iwatch from './Iwatch';
import Wrist from './Wrist';
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Navbar/>


  <Routes>
      <Route path="/"element={<Home></Home>}/>
      <Route path="/About"element={<About></About>}/>
      <Route path="/Contact"element={<Contact></Contact>}/> 
      <Route path="/Camera"element={<Camera></Camera>}/> 
      <Route path="/Keyboard"element={<Keyboard></Keyboard>}/> 
      <Route path="/Printers"element={<Printers></Printers>}/> 
      <Route path="/Monitor"element={<Monitor></Monitor>}/> 
      <Route path="/Router"element={<Router></Router>}/> 
      <Route path="/Toy_car"element={<Toy_car></Toy_car>}/> 
      <Route path="/Small_toy"element={<Small_toy></Small_toy>}/> 
        <Route path="/Toy_truck"element={<Toy_truck></Toy_truck>}/>
        <Route path="/Helicopter"element={<Helicopter></Helicopter>}/>
        <Route path="/Gun"element={<Gun></Gun>}/>
        <Route path="/Belt"element={<Belt></Belt>}/>
        <Route path="/White"element={<White></White>}/>
        <Route path="/Shirt"element={<Shirt></Shirt>}/>
        <Route path="/Teddy"element={<Teddy></Teddy>}/>
        <Route path="/Red"element={<Red></Red>}/>
        <Route path="/Puma"element={<Puma></Puma>}/>
        <Route path="/Gucci"element={<Gucci></Gucci>}/>
        <Route path="/Nike"element={<Nike></Nike>}/>
        <Route path="/RedTape"element={<RedTape></RedTape>}/>
        <Route path="/Boat"element={<Boat></Boat>}/>
        <Route path="/Realme"element={<Realme></Realme>}/>
        <Route path="/Noise"element={<Noise></Noise>}/>
        <Route path="/Iwatch"element={<Iwatch></Iwatch>}/>
        <Route path="/Wrist"element={<Wrist></Wrist>}/>
            </Routes>
 <Footer/>
    </>
  );
}

export default App;
