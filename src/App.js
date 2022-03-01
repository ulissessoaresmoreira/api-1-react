import React, {useState} from 'react'
import './App.css'

import Template from './template/Template'
import Home from './pages/Home'
import Calc from './pages/Calc'
import Album from './pages/Album'
import Users from './pages/Users'

const defaultPage = 'home'

const pages = {
  home: {
    text: 'Home',
    component: Home,
  },
  calc: {
    text: 'Calculadora',
    component: Calc,
  },
  album: {
    text: 'Álbum',
    component: Album,
  },
  users: {
    text: 'Usuários',
    component: Users,
  }
}

function App (){
  const [page, setPage] = useState(defaultPage)

  const handleChangePage = page => {
    setPage(page)    
  }

  const Page = pages[page].component  
  
  
                // ↓ PASSADO POR PROP E RECEBIDO NO TEMPLATE POR PROP E DEPOIS ENVIADA AO NAV POR PROP. DENTRO DA VARIÁVEL PAGE TEM A PÁGINA QUE ESTÁ ATIVA E DENTRO DELA TEM O NOME QUE PODE SER USADO NO TÍTULO, ENTÃO PASSEI NA ACTIVEPAGE PARA USAR NO TITLE NO TEMPLATE
  return (
    <Template pages={pages} activePage={page} onChangePage={handleChangePage}>    
      {Page && <Page />}
    </Template>     
  )
}

export default App;
