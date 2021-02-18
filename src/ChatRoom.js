import React from 'react'
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Avatar, Button, FormControl, IconButton, Input, InputLabel } from '@material-ui/core';
import Message from './Message';
import db, { auth, provider } from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import { Send } from '@material-ui/icons';
import { useStateValue } from './StateProvider';
import { useHistory } from 'react-router-dom';
import { Card, CardContent, Typography } from '@material-ui/core'



function ChatRoom({currentPeerUser}) {

    const [input, setInput] = useState('');
    const [messages , setMessages] = useState([]);
    //const [username , setUsername] = useState('');
    const [{user} , dispatch] = useStateValue();
    const history = useHistory();
    const [chatroom,setChatroom] = useState(true);
  //  const [chatwithUser,setChatWithUser] = useState([]);
   // useEffect(() => {
    //  setUsername(prompt('Please enter your name'));
   // }, [])
   
  console.log(currentPeerUser)
    useEffect(() => {
      //get
      db.collection('messages').orderBy('timestamp','desc').onSnapshot(onsnapshot => setMessages(onsnapshot.docs.map(doc => ({id: doc.id , message: doc.data()}))))
      
      }
    , [])
    
    db.collection("ClickUser").doc(user.email).set({
      displayName:user.displayName,
      photoURL:user.photoURL,
      id : user.email
     })
    
    const sendMessage = (e) =>{
      e.preventDefault();
      db.collection('messages').add({
        message:input,
        username:user.displayName,
        idTo: currentPeerUser.id,
        idFrom:user.email,
        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      
      })
      setInput('');
  
    }
    const profileOfUser =()=>{
      history.push("./profile");
    }
    return (
      
    

      <div className = "App">
        
        
        
        <Avatar src = {currentPeerUser.photoURL}></Avatar> 

  
        
  
       <form className = "app__form"> 
        <FormControl className = "class__formControl">

            <Input className = "app__input" placeholder = "Write a message..."value = {input} onChange = {e => setInput(e.currentTarget.value)} />

            <IconButton className = "app__iconButton" disabled = {!input} variant =  "contained" type = "submit" color = "primary" onClick  = {sendMessage}>
            <Send/>
            </IconButton>
        </FormControl>
        </form> 
       
       <FlipMove>
          {messages.map(({id,message}) => {
            
            let listUserMessages =[]
               if(message.idFrom === user.email && currentPeerUser.id === message.idTo)
               {

               listUserMessages.push( 
                <div ref  = {id} className = 'message__user'>
                <Card className = {'message__userCard'}>
                    <CardContent>
                        <Typography
                            variant = "h5"
                            component = "h2"
                        >   
                            {message.message}
                            
                        </Typography>
                    </CardContent>
        
                </Card>
            </div>
               )

               }
               else if(message.idFrom === currentPeerUser.id && user.email === message.idTo){
                listUserMessages.push( 
                  <div ref  = {id} className = 'message'>
                  <Card className = 'message__guestCard'>
                      <CardContent>
                          <Typography
                              variant = "h5"
                              component = "h2"
                          >   
                              <Avatar src={currentPeerUser.photoURL}></Avatar>{message.message}
                              
                          </Typography>
                      </CardContent>
          
                  </Card>
              </div>
                 )
               }
               return listUserMessages;

          }
          )
          }
  
          
        </FlipMove>
      
      
      </div>
     
      
      );
}

export default ChatRoom
