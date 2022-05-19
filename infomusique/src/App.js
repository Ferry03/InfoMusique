
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import {useState,useEffect} from 'react'
import axios from 'axios'
import Navigation from './components/Navigation';

function App() {

  const [ip, setIP] = useState('');

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    console.log(res.data);
    setIP(res.data.country_name)
  }
  
  useEffect( () => {
    //passing getData method to the lifecycle method
    getData()

  }, [])


  return (
    <div className="App">


      
      <BrowserRouter>


           <Navigation/>
            <Routes>
              <Route  path={'/login'} element={<Login/>}></Route>
              <Route  path={'/signup'} element={<Signup/>}></Route>
              
            </Routes>

      </BrowserRouter>
    <h2>Votre pays est</h2>
      <h4>{ip}</h4>
    </div>
  );
}

export default App;
