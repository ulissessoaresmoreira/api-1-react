import React, {useState, useEffect} from 'react'


import Template from './Template'
//import Loading from './Loading'

const Users = () => {
    const [isLoading, setisLoading] = useState(false) 
    const [users, setUsers] = useState([])

    useEffect(() => {                                                   
        setisLoading(true)
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then(data => {
                setUsers(data)
                setisLoading(false)
            })

    }, [])
    

    return(
        <Template
            title='Usuários'
            children={isLoading} 
        >

        {
            users.map(users => {
                return (
                    <div style={{margin: '10px'}}>
                        <span> <b>Nome: </b>{users.name}<br />  <b>Id: </b> {users.id}<br /> <b>e-mail: </b> {users.email}<br /></span>
                    </div> 
                )
            })
        }
            
        </Template>
    )
}

export default Users