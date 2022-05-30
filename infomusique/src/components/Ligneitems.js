import React from 'react'
import {useState,useEffect} from 'react'
import Items from './Items'
import Accueil from './Accueil';




function Ligneitems({cible}) {
    const[item,setitem]= useState([])
  
    useEffect( () => {
      //passing getData method to the lifecycle method
    
      const options = {
          method: 'GET',
          url: 'https://shazam.p.rapidapi.com/search',
          headers: {
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
            'X-RapidAPI-Key': 'e7fefcac4amshdc0948309ce7edfp1d913bjsn14e187352f80'
          }
        };
      
      fetch('https://shazam.p.rapidapi.com/search?term=${cible}&limit=13&min=10', options)
          .then(response => response.json())
          .then(response =>   setitem(response.tracks.hits))
          console.log(item);
              // lien:response.artists.hits[0].artist.avatar,
              // artist:response.artists.hits[0].artist.name,
              // titleSong:response.tracks.hits[0].track.title,
              // description:response.tracks.hits[0].track.share.text,
              // lyric:response.tracks.hits[0].track.url
            }, [cible])
            
           
  return (
    <div className='row ligne'>
            {
                  item.map((element)=>{
                       return(
                           
                        <div className="card mb-3" >
                            
                            <div className="row g-0" id='bor'>
                            <div className="col-md-3">
                                <img src={element.track.images.background}  className="img-fluid rounded-start" alt="..."/>
                            </div>
                                
                                <div className="col-md-8" id='vu'>
                                <div className="card-body">
                                <h5 className="card-title">{element.track.subtitle}</h5>
                                <p className="card-text">{element.track.title}</p>
                                <p className="card-text"><small className="text-muted">{element.track.share.text}</small></p>
                                <p className="card-text"><a href={element.track.url} class="btn btn-outline-primary col-4" id='btn1'>Lyric</a></p>
                                </div>
                            </div>
                                
                            </div>
                         </div>
                       )
                        
                  })

               
                  
              }
    </div>
  )
}

export default Ligneitems