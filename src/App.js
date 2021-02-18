import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Button, FormControl, IconButton, Input, InputLabel} from '@material-ui/core';
import Message from './Message';
import db, { auth } from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import { StateProvider, useStateValue } from './StateProvider';
import Login from './Login';
import Home from './Home';
import { toast, ToastContainer } from 'react-toastify';
import { Route, Switch } from 'react-router-dom';
import ChatRoom from './ChatRoom';



function App() {
 
  const showToast = (type,message) =>{
    switch (type){
      case 0:
        toast.warning(message)
        break;
        case 1:
          toast.success(message)
          default:
            break;
    }
  }
  const [{user}, dispatch] = useStateValue();
  return(

    <>
    <ToastContainer
    autoClose = {2000}
    hideProgressBar = {true}
    position ={toast.POSITION.BOTTOM_CENTER}
    />
    <Switch>
      <Route exact path = "/"><Login
      showToast = {showToast}
      /></Route>
      <Route  path = "/home"><Home
       showToast = {showToast}/>
       </Route>
      <Route path = "/chatroom"><ChatRoom showToast ={showToast}/></Route>

    </Switch>

   </>

 
  )
}
 
export default App;
