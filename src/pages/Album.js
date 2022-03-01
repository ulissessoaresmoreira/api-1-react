import React, {useState, useEffect} from 'react'
import '../album.css'

import Loading from '../components/Loading'


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

        
        <>
            <Loading visible={isLoading} />
            {
            album.map(album => {
                return(
                <div style={{margin: '10px'}}>
                    <span> <b>Id: </b> {album.id}<br /> <b>Title: </b>{album.title}<br />   </span>
                </div>
                )
            })
            }
        </>
        
    )    
}



export default Album

