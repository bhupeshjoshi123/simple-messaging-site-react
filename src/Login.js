import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom';
import db, { auth, provider } from './firebase'
import "./Login.css"
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login({showToast}) {
    //react-toastify == handle notification purposes
    //react-loading 
    //useHistory hook ==>> for info of all routes in browserroute
    
    const [{user},dispatch] = useStateValue();
    const history = useHistory();
   
    const signIn =() =>{
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type:actionTypes.SET_USER,
                user: result.user,
                 })
               
                 history.push('/home');
              
                })
                //error in email data uploading
       .catch((error)=> alert(error.message))
     }
    return (
        <div className ="login">
            <div className="login__logo">
               
                <img src="https://toppng.com/uploads/preview/facebook-messenger-logo-black-and-white-11549681807l9jkugvdt7.png" alt=""
                />
                 

            </div>
            <Button type = "submit" onClick = {signIn}>
                Sign In with google
            </Button>
        </div>
    )
}

export default Login 
