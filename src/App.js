import logo from './logo.svg';
import './App.css';
import Presents from './Components/PresentsComponents/Presents';
import AllCategories from './Components/Filter/AllCategories';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <div className='block'>
      <AllCategories/>
      <Cart/>
      </div>
      <div className='block'>
      <Presents/>
      </div>
    </div>
  );
}

export default App;
