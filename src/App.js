import React from 'react';
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import  './App.css';

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm/>
    return (
        <ChatEngine 
            height="100vh"
            projectID="a04bf130-a811-4dd5-860f-32850434df43"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}

            
            renderChatFeed={ (chatAppProps) =>  <ChatFeed {...chatAppProps}/>}
        />

    );
}

export default App;