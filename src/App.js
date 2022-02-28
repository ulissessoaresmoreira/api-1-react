import React, {useState} from 'react'
import './App.css'

import Home from './Home'
//import Header from './Header'
import Calc from './Calc'
import Album from './Album'
import Users from './Users'

const defaultPage = 'calc'

const pages = {
  home: {
    text: 'Home',
    component: Home,
  },

  calc: {
    text: 'Calc',
    component: Calc,
  },
  album: {
    text: 'Album',
    component: Album,
  },
  users: {
    text: 'Users',
    component: Users,
  }
}



function App (){
  const [page, setPage] = useState(defaultPage)

  const handleChangePage = page => {
    setPage(page)
  }

  const Page = pages[page].component
  
  const pageNames = Object.keys(pages)
  

  return (
    <>   
        {
          pageNames.map(page => <button onClick={() => handleChangePage(page)}> {pages[page].text} </button>)
        }
          
        {Page && <Page />}
    </>
  )
}

export default App;
