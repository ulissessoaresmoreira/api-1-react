import React, {useState, useEffect} from 'react'
import './album.css'

import Template from './Template'
//import Loading from './Loading'

const Album = () => {
    const [isLoading, setisLoading] = useState(false)
    const [album, setAlbum] = useState([])

    useEffect(() => {
        setisLoading(true)
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then((response) => response.json())
            .then(data => { 
                setAlbum(data)
                setisLoading(false)
            })
            
    }, [])

    return(

        
        <Template
            title='Albuns'
            children={isLoading}
        >
            
    
            {
            album.map(album => {
                return(
                <div style={{margin: '10px'}}>
                    <span> <b>Id: </b> {album.id}<br /> <b>Title: </b>{album.title}<br />   </span>
                </div>
                )
            })
            }
        </Template>
        
    )    
}



export default Album

