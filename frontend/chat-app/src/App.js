import React, { useState, useEffect } from "react";
import io from 'socket.io-client'

const socket = io('http://localhost:7000')
const userName = 'User '+parseInt(Math.random()*10)



function App() {
  const [message, setMessage] = useState('')

  const[chat, setChat]=useState([])

  useEffect(()=>{
    socket.on('message', payload => {
      setChat([...chat, payload])
    })  
  } )

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(message)
    socket.emit('message',{userName ,message})
    //Send message on socket
    setMessage(' ')
  };
  return (
    <div className="App custom">
      <h2>Ranomenjanahary Fiainana IMTIC3 N°7</h2>
      <h1>Welcome to e-fandray</h1>
      
            <form onSubmit={sendMessage}>
            <input type="text" name="message" placeholder='Type message' value={message} onChange={(e)=>{setMessage(e.target.value)}}
            required>
          
            </input>
            <button type='submit'>Send</button>
            </form>
            {chat.map((payload, index)=>{
              return(
                <h3 key={index}>{payload.userName}:<span>{payload.message}</span> </h3>
             )
            })}

    </div>
  );
}

export default App;
