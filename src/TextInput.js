import {useState} from 'react'

function TextInput(props) {
    const [text, setText] = useState('')

    function sendMessage(){
        if(text==='') return // skips the function
        props.send(text)
        setText('')
    }

    function KeyPressed(e){
        if(e.key==='Enter') {
            sendMessage()
        }
    }

    return <footer className="text-input">
        <input
        placeholder='Write your message'
            value={text}
            onChange={e=> setText(e.target.value)}
            onKeyPress={KeyPressed}
        />
        <button onClick={sendMessage} disabled={!text}>
            Send
        </button>
    </footer>
}

export default TextInput 