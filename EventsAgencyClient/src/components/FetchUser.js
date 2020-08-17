import React,{ Component } from "react"
import axios from 'axios'


 
 class FetchUser extends React.Component{
    
    constructor(props){
        super(props)

        this.state={
            users:[]
        }
    }

    componentDidMount(){
        axios.get("http://localhost:3001/users")
        .then(response=>{
            console.log(response)
            this.setState({users:response.data
        })
        })
        .catch(error =>{
            console.log(error)
        })
    }

render(){
    const {users}=this.state
return(
    <div>List of users
    {users.length?
        users.map(users => <div key={users.id}>{users.title}</div>):
        null

    }
    
    </div>
)

}


}

export default FetchUser;
