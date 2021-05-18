import React from 'react'
import './App.css';
import  Profile from './profile/Profile'
import image from './John-Doe.jpg'


function App() {
  function btn(name){
   alert(`my name is : ${name} `)
}

  return (
    <>
       <Profile name="anouar1" bio="bio1" profession="dev1" data={btn}><img src={image }style={{borderRadius: '50%'}}/></Profile>
       <Profile name="anouar2" bio="bio2" profession="dev2"data={btn} ><img src={image}style={{borderRadius: '50%'}}/></Profile>
       <Profile name="anouar3" bio="bio3" profession="dev3" data={btn}><img src={image}style={{borderRadius: '50%'}}/></Profile>
       <Profile bio="bio4"  data={btn}></Profile>
    </>
  );
}

export default App;
