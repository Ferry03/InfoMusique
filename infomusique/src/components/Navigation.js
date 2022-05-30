import Login from "./Login";
import { Link } from 'react-router-dom'
// import logo1 from './logo1.png'
// import logo2 from './logo2.png'
// import { Navbar, NavDropdown,Nav,Button ,Container,Row,Col} from 'react-bootstrap'
import React from 'react'
import icone from './icone.png'
import user from  './user.png'
import {useState,useEffect} from 'react'

const Navigation =()=>{
//     return(
       
//         <>
//       <nav className="navbar navbar-expand-lg navbar-dark  background-red" >
//           {/* <a className="navbar-brand" href="#">Navbar</a> */}
//           {/* <img src={acc} className='accimg' ></img> */}
//          <Link  to="/"> <button className="logo11">On AIR</button></Link>
//          {/* <a href="#"> <img src={logo2} className=" logo" alt=""></img></a> */}
//           {/* <img src={logo2} width="30" height="30" alt=""></img> */}
//           <button className="navbar-toggler" type="button" data-toggle="collapse" 
//           data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//             <ul className="navbar-nav textColor">
//               {/* <li className="nav-item active">
//                 <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//               </li> */}
            
//               <li className="nav-item ">
//                 <Link className="nav-link " to="/login">Login</Link>
//               </li>
//               <li className="nav-item textColor">
//                 <Link className="nav-link cadre" to="/signup">SignUp</Link>
//               </li>
//             </ul>
//           </div>
//       </nav>
    

 
       

//         </>
//     );
// } const [geo,setgeo]=useState("q")

const [geo,setgeo]=useState("q")
useEffect( () => {
       
        
  fetch(`https://geolocation-db.com/json/ d802faa0-10bd-11ec-b2fe-47a0872c6708`)
      .then(response => response.json())
      .then(response =>   setgeo(response.country_name))
      console.log(geo);
      
          // lien:response.artists.hits[0].artist.avatar,
          // artist:response.artists.hits[0].artist.name,
          // titleSong:response.tracks.hits[0].track.title,
          // description:response.tracks.hits[0].track.share.text,
          // lyric:response.tracks.hits[0].track.url
        }, [])
return (

  <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" id='nav'>
      <div className="container-fluid" id='nav'>
          <a class="navbar-brand col-6" href="#"><img src={icone} id='icon'></img></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse col-5" id="navbarSupportedContent">
          <ul className="navbar-nav" >
              <li className="nav-item" id='li1'>
              <Link className="nav-link " to="/login">Login</Link>
              </li>
              <li className="nav-item">
                 <Link className="nav-link cadre" to="/signup">SignUp</Link>                
              </li>
          </ul>
          <div className='pcompte'>
                      <div className='pimagep'>
                          <img src={user} className='pimage'></img>
                      </div>
                      <div className='info'>
                          <span className='info1'>nom</span><br/>
                          <span className='info1'>Cameroun,douala</span>
                      </div>
                  </div>
          </div>
      </div>
  </nav>
)
}
export default Navigation