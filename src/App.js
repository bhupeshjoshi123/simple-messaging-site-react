import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Button, FormControl, IconButton, Input, InputLabel } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import { Send } from '@material-ui/icons';


function App() {

  const [input, setInput] = useState('');
  const [messages , setMessages] = useState([]);
  const [username , setUsername] = useState('');

  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, [])
  
  useEffect(() => {
    //get
    db.collection('messages').orderBy('timestamp','desc').onSnapshot(onsnapshot => setMessages(onsnapshot.docs.map(doc => ({id: doc.id , message: doc.data()}))))
    
    }
  , [])
  
  const sendMessage = (event) =>{
    event.preventDefault();
    db.collection('messages').add({
      message:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    })
    setInput('');

  }
  console.log(input);
  return (
    
    <div className = "App">
      <h1>Welcome to Messenger</h1>

      <img src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100" alt=""/>

      <h2>{username}</h2>

     <form className = "app__form"> 
      <FormControl className = "class__formControl">
          <Input className = "app__input" placeholder = "Write a message..."value = {input} onChange = {e => setInput(e.currentTarget.value)} />

          <IconButton className = "app__iconButton" disabled = {!input} variant =  "contained" type = "submit" color = "primary" onClick  = {sendMessage}>
          <Send/>
          </IconButton>
      </FormControl>
      </form> 
     
     <FlipMove>
        {messages.map(({id,message}) => (
        <Message
            key = {id}
            message = {message}
            username= {username}

        />
      ))}
      </FlipMove>
    
    
    </div>
   
    
    );
}

export default App;
