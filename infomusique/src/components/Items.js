import React from 'react'
import axios from 'axios';
import { useEffect,useState} from 'react';

function Items(lien,artist,description,titleSong,lyric) {
 
  return (


    <div className="card" >
                    <img src={lien} className="card-img-top" ></img>
                    <div className="card-body">
                      <h4 className="card-title">{artist}</h4>
                      <h5 className="card-titles">{titleSong}</h5>
                      <p className="card-text">{description}</p>
                      <a href={lyric} className="btn btn-primary" target={lyric}>aller AU LYRIC</a>
                    </div>
          </div>
      
    // <div className='row pitem'>
    //       <div className="row ppitem col-8">
    //             <div className='col-2'>
    //                 <img className="img" src={item.lien} />
    //             </div>
    //             <div className='col'>
    //                 <div className='row'>
    //                     <span className='artiste'>{item.artist}</span>
    //                 </div>
    //                 <div className='row'>
    //                     <span className='titredusong'>{item.titleSong}</span>
    //                 </div>
    //                 <div className='row'>
    //                         <div className='col'>
    //                         <span>{item.description}</span>
    //                         </div>
    //                         <div className='col'>
    //                     <a href=""> <span>{item.lyric}</span></a>
    //                         </div>
    //              </div>

    //       </div>
        //   </div>
    // </div>
  )
}

export default Items