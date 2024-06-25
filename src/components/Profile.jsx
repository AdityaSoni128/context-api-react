import React, { useContext } from 'react'
import Userinfo from './Userinfo'
import { Usercontext } from '../context/Usercontext.js'
import Card from './Card.jsx';
import ThemeBtn from './ThemeBtn.jsx';

function Profile() {
const {user} = useContext(Usercontext);
  return (
   <>
    <h1>Profile: {user}</h1>
    <Userinfo />
    <ThemeBtn />
    <Card/>
   </>

  )
}

export default Profile