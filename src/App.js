
import './App.css';
import { GroceryList } from './GroceryList';
import image from './pic1.jpeg';
import imageTwo from './pic2.jpeg';

function App() {
  return (
    <div className="app">
    <div className="container">
      <img src={ image } alt='shopping' width='200px'/>
      </div>
      <div className="container">
        <h1>Grocery List</h1>
        </div>
        <GroceryList />
        <div className="container">
        <img src={ imageTwo } alt='delivery' width='200px'/>
        </div>
    </div>
  );
}

export default App;
