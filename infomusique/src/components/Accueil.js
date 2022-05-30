// import {useEffect,useState} from 'react'
// import acc from './acc.jpg'
// import ContenuItem from '../ContenuItem'
import {useEffect,useState} from 'react'
import React from 'react';
import acc from './acc.jpg'
import axios from "axios";
// import text from './requete';
import Ligneitems from './Ligneitems';
function Accueil() {
  const[cible,setcible]=useState("")
  const[active,setactive]=useState("disabled")
  const[ciblev,setciblev]=useState("")
  const[message,setmessage]=useState("")
  const[vue,setvue]=useState("none")
  function handleChange(e) {
    if (e.currentTarget.value.trim()=="") {
      setvue("block")
      setmessage("veillez entrer le nom d'un artiste ou le titre d'une music")
    } else {
      setvue("none")
      setmessage("")
      setcible(e.currentTarget.value)
    }
}


 function envoie() {
   if (cible=="") {
     setvue("block")
     setmessage("veillez entrer le nom d'un artiste ou le titre d'une music")
   } else {
    setvue("none")
    setmessage("")
    setciblev(cible);
    console.log(ciblev);
   }
   
 }
  return (
    <>
    <div className='container-fluid' id='parent'>
        <div className='row' id='row1' >
            <img src={acc} className='accimg'></img>
        </div>
        <div className='row' id='row2'>
            Top des Music Locales
        </div>
        <div className='row'>
             <div className='row'  id='row3'>
                  <input type={"text"} className='seach col-6' placeholder='Artiste,Titre.....?' onChange={e =>handleChange(e)}></input>
                  <button type="button" class="btn btn-outline-primary col-2 " id='btn2' onClick={envoie} >search</button>
             </div>
             <div className='alert '>
                 <p className='message col-6 ' style={{display:`${vue}`}}>
                    {message}
                 </p>
             </div>
        </div>
    </div>
    <Ligneitems cible={ciblev}/>
    </>
   
  )
  
}

export default Accueil