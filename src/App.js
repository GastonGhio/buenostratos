import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar';
import ItemCount from './component/itemCount';


function App() {
  return (
    <div className="App">
       <Navbar></Navbar>
       <ItemCount></ItemCount>
    </div>
  );
}

export default App;
