import React from 'react' 
import Header from '../partials/Header'
import Nav from '../partials/Nav'
//import Loading from './Loading'


const Template = ({children, pages, onChangePage, activePage}) => {
    const title = pages[activePage].text
    return (
        <>
            <Header title={title}/>               
            <Nav pages={pages} onChangePage={onChangePage}/>
            {children}
        </>
    )
}


export default Template