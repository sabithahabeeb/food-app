import './App.css';
import Brands from './Components/Brands';
import Delivery from './Components/Delivery';
import FirstOrder from './Components/FirstOrder';
import Footer from './Components/Footer';
import Meal from './Components/Meal';
import Nav from './Components/Nav';

function App() {
  return (
    <div>
  <Nav/>
  <Delivery/>
  <hr/>
  <FirstOrder />
  <Brands/>
  <Meal/>
  <hr/>
    <Footer/>
    </div>
  );
}

export default App;
