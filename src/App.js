import React from 'react'
import './App.css';
import  Profile from './profile/Profile'
import image from './John-Doe.jpg'


function App() {
  function btn(name){
   alert(`my name is : `)
}

  return (
    <>
       <Profile name="anouar" bio="bio1" profession="dev1" data={btn}><img src={image }style={{borderRadius: '50%'}}/></Profile>
       <Profile name="anouar" bio="bio2" profession="dev2" ><img src={image}style={{borderRadius: '50%'}}/></Profile>
       <Profile name="anouar" bio="bio3" profession="dev3" ><img src={image}style={{borderRadius: '50%'}}/></Profile>
    </>
  );
}

export default App;
