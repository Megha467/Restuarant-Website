import logo from './logo.png';
import './App.css';
import Dishes from './components/Dishes';
import Experiance from './components/Experiance';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
 

function App() {
 
  return (
    <div className="App">
       
        <img src="./background.jpg" className="background" alt="logo" />
        <div className="contents">
            <h1 className="heading">Food Presso</h1>
          <h1 className="heading">Good Food Brings Out A Good Mood</h1> 
        
       </div>
       <Dishes />
       <Experiance />
       <Reviews />
       <Footer/>
    </div>
  );
}

export default App;
