import { Avatar } from '@material-ui/core';
import React from 'react'
import { useStateValue } from './StateProvider'
import "./welcomeBoard.css"

function WelcomeBoard() {
    const [{user},dispatch] = useStateValue();
    return (
        <div className = "welcomeBoard">
            
            <h1>Enjoy Chat </h1>
            <h2>Mr/Mrs {user.displayName}</h2>
        </div>
    )
}

export default WelcomeBoard
