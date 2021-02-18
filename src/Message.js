import { Card, CardContent, Divider, Typography } from '@material-ui/core'
import React, { forwardRef } from 'react'
import './Message.css';
import { useStateValue } from './StateProvider';

const Message = forwardRef(({message , username, currentPeerUser}, ref) => {
// withChat == >> username === message.username 
    const [{user},dispatch] = useStateValue();
    const isUser = username === message.username;
    //me
 //   const isUserCurrent = user.email === message.idFrom;
    
    
    return (
      <p></p>
    
    )
})

export default Message
