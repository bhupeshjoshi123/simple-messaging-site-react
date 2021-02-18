import React from 'react'
import logo from './logo.svg';
import { useEffect, useState } from 'react';
import { Avatar, Button, FormControl, IconButton, Input, InputLabel } from '@material-ui/core';
import Message from './Message';
import db, { auth } from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import { Send } from '@material-ui/icons';
import { useStateValue } from './StateProvider';
import ChatRoom from './ChatRoom';
import { useHistory } from 'react-router-dom';
import './home.css'
import WelcomeBoard from './WelcomeBoard'
import Welcomeboard from './WelcomeBoard';
function Home() {
  const [{user},dispatch] = useStateValue();
  const [Users,setUsers] = useState([]);
  const history = useHistory();
  const [currentPeerUser,setcurrentPeerUser]=useState(null);

 const profileOfUser=()=>{

 }
  useEffect(() => {
    //get
    db.collection('ClickUser').onSnapshot(onsnapshot => setUsers(onsnapshot.docs.map(doc => ({id: doc.id , ClickUser: doc.data()}))))
    
    }
  , [])
 

return(  
  <> 
  <div className = "home">
 
 
  <div className="leftSideOfChatRoom">
        <div className = "profile__Signout">
        <Avatar src = {user.photoURL}></Avatar> 
        <Button  onClick = {()=>{auth.signOut()
                                history.push('/')
        
                          }}>Sign Out</Button>
          </div>                     
            {Users.map(({id , ClickUser}) =>{
               
               let viewListUser = [];
              
               if(id !== user.email){
                  viewListUser.push(
                   
                    <Button key = {ClickUser.id} className ="button2"
                    
                    onClick = { ()=>{
                      
                      setcurrentPeerUser(ClickUser)
                                                                               
                                                                  }}>
                   <Avatar src = {ClickUser.photoURL} ></Avatar>
    
                   <h4>{ClickUser.displayName}</h4>
                
                   </Button>
            
                  )
                  return viewListUser;
              }
              else{
                return null;
              }

            
            
            })
            
        }
          </div>
          <div className="rightSideOfChatRoom">

        { currentPeerUser?(
          <ChatRoom
          currentPeerUser ={currentPeerUser}

          />

        ):(
            <WelcomeBoard

            />
        )}
          
        </div>
          
      
   </div>
   

  </>
)
 
}

export default Home
