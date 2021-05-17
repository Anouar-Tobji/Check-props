import React from 'react'
import PropTypes from "prop-types";
// import '../App.css'

const Profile=({name,children,bio,profession})=>{
    
    function btn(){
    return alert('my name is :' +{name})
}
return (
<div style={ { backgroundColor: 'white',
  width: '400px' ,
margin:'5px auto',
padding: '50px',
border: '1px solid rgba(0, 0, 0, 0.205)'

}}>
    <h1>Fullname :{name}</h1>
     <p>{children}</p>
    
    <h1>Bio :{bio}</h1>
    <h1>Profession :{profession}</h1>
    <button onClick={()=>{btn()}}>ClickMe </button>
   
    </div>
)
}
export default Profile