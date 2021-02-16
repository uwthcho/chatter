import './App.css';
import TextInput from './TextInput';
import {useState} from 'react'
import Message from './Message';
import NamePicker from './NamePicker.js';
import {db, useDB} from './db';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Wrap() {
  return <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/:room" component={App} />
    </Switch>
  </BrowserRouter>
}

function App(props) {
  
  const room = props.match.params.room || 'home'

  const messages = useDB(room)
  const [username,setUsername] = useState(
  localStorage.getItem('username') || ''
)
  return (
   <div className="App">
     <header className="header">
       <div className="logo"/>
         CHATTER
         <NamePicker saveName={setUsername} />
     </header>
    
     <main className="messages">
      {messages.map((m,i)=> {
        const isMe = m.name===username
        return <Message key={i} {...m} isMe={isMe} />
      })}
    </main>

     <TextInput
       send={t=> db.send({text:t, name:username, date:new Date(), room})}
     />
 
   </div>
 );
}
 
export default Wrap;

