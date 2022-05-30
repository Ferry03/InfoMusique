import React from 'react'
import {useState,useEffect} from 'react'
import Items from './components/Items'

 function ContenuItem() {
    const[item,setitem]= useState([])
  
    useEffect( () => {
      //passing getData method to the lifecycle method
    
      const options = {
          method: 'GET',
          url: 'https://shazam.p.rapidapi.com/search',
          params: {term: 'gims', locale: '', offset: '0', limit: '90'},
          headers: {
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
            'X-RapidAPI-Key': '6f22c16246msh324ebd775ab24e0p1e7f66jsn6a8bdf8ba94ci'
          }
        };
      
      fetch('https://shazam.p.rapidapi.com/search?term=fally&offset=0&limit=10', options)
          .then(response => response.json())
          .then(response =>   setitem(response.tracks.hits))
              // lien:response.artists.hits[0].artist.avatar,
              // artist:response.artists.hits[0].artist.name,
              // titleSong:response.tracks.hits[0].track.title,
              // description:response.tracks.hits[0].track.share.text,
              // lyric:response.tracks.hits[0].track.url
          
              
              
    }, [])
   
  return (
    <div className='row ligne'>
       
        
         {
                  item.map((element)=>{
                       return(
                        <div className="card" >
                        <img src={element.track.images.background} className="card-img-top" key={ Math.random().toString(36).substr(2, 9) }></img>
                        <div className="card-body">
                          <h4 className="card-title" key={ Math.random().toString(36).substr(2, 9) }>{element.track.subtitle}</h4>
                          <h5 className="card-titles" key={ Math.random().toString(36).substr(2, 9) }>{element.track.title}</h5>
                          <p className="card-text">{element.track.share.text}</p>
                          <a href={element.track.share.snaptchat} className="btn btn-primary" key={ Math.random().toString(36).substr(2, 9) }>aller AU LYRIC</a>
                        </div>
              </div>
                        
                       )
                        
                  })

               
                  
              }
    </div>
  )
}
{/* <Items
                                lien={element.track.images.background}
                                artist={element.track.subtitle}
                                titleSong={element.track.title}
                                lyric={element.track.share.snaptchat}
                                description={element.track.share.text}
                                /> */}
export default ContenuItem
