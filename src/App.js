import './App.css';
import TextInput from './TextInput';
import {useState} from 'react'
import Message from './Message';
import NamePicker from './NamePicker.js';
 
function App() {
 const [messages,setMessages] = useState([])
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
        return <Message key={i} {...m} />
      })}
    </main>

     <TextInput
       send={t=> setMessages([...messages, {text:t}])}
     />
 
   </div>
 );
}
 
export default App;

