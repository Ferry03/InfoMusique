
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import {useState,useEffect} from 'react'
import axios from 'axios'
import Items from './components/Items';
import Navigation from './components/Navigation';
import Accueil from './components/Accueil';
import ContenuItem from './ContenuItem';

function App() {

  const [ip, setIP] = useState('');

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    // console.log(res.data);
    setIP(res.data.country_name)
    console.log()
  }
  const[item,setitem]= useState([])
  
  useEffect( () => {
    //passing getData method to the lifecycle method
  
    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/search',
        params: {term: 'love me', locale: 'fr', offset: '0', limit: '5'},
        headers: {
          'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
          'X-RapidAPI-Key': '4f6b15a00emsh1258650f2b94766p18fef2jsnd19e92f64ae6i'
        }
      };
    
    fetch('https://shazam.p.rapidapi.com/search?term=kiss%20the%20rain&locale=en-US&offset=0&limit=5', options)
        .then(response => response.json())
        .then(response =>   setitem(response.tracks.hits))
            // lien:response.artists.hits[0].artist.avatar,
            // artist:response.artists.hits[0].artist.name,
            // titleSong:response.tracks.hits[0].track.title,
            // description:response.tracks.hits[0].track.share.text,
            // lyric:response.tracks.hits[0].track.url
        
            
            
  }, [])


  return (
    <div >


      
      <BrowserRouter>


           <Navigation/>
           {/* <h6>Votre pays est</h6>
      <h6>{ip}</h6> */}
           
            
           
           
            <Routes>
              <Route  path={'/'} element={<Accueil/>}></Route>
              <Route  path={'/login'} element={<Login/>}></Route>
              <Route  path={'/signup'} element={<Signup/>}></Route>
              
            </Routes>

      </BrowserRouter>
  
    </div>
  );
}

export default App;
