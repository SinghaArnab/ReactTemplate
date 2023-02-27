import React from 'react'
import Login from '../Login';
import Logout from '../Logout';

const Home = () => {

    const condition=true;
    const user=()=>{
         if(condition){
            return <Login/>  
        }
        else{
            <Logout/>
        }
    }
  return (
    <div>Home
    {
        user()
    }
    
    </div>
    
  )
}

export default Home