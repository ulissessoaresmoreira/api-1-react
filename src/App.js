import React, {useState} from 'react'
import './App.css'

import Home from './Home'
import Header from './Header'
import Calc from './Calc'
import Album from './Album'
import Users from './Users'


const pages = {
  home: {
    text: "Home",
    component: Home,
  },
  header: {
    text: "Header",
    component: Header,
  },
  calc: {
    text: "Calc",
    component: Calc,
  },
  album: {
    text: "Album",
    component: Album,
  },
  users: {
    text: "Users",
    component: Users,
  }
}

function App (){
  const [page, setPage] = useState("Home")
    const handleChangePage = 
}


function App() {
  return (
    <>
      <Header /> 
      <Home />
      <Calc />
      <Album />
      <Users />
    </>
  )
}

export default App;
