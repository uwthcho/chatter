import './App.css';
import TextInput from './TextInput';
import {useState} from 'react'


function App() {
  const[messages, setMessages] = useState([{text:"hello"}])
  return <div className="App">

    <header className="header">
      <div className="logo" />
      CHATTER
    </header>

    <main ClassName="messages">
     <div className="previous-text">
        Hello
      </div>
      <div className="previous-text">
        What's up
      </div>
     {messages.map((m,i)=> {
      return <div key={i} className="message">
       {m.text}
       </div>
     })}
     
    </main>
    <TextInput 
      send={t=> setMessages([...messages, {text:t}])}
    />
    
  </div>
  
}

export default App;
