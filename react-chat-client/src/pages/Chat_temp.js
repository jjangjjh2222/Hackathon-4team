import React, {useState, useEffect, useRef} from 'react';
import io from 'socket.io-client';
import '../styles/chat.css';

//const socket =  io.connect('http://localhost:4000')

function Chat_temp() {
  const [state, setState] = useState({message:'', name:''})
  const [chat,setChat] =useState([])

  const socketRef = useRef()

  useEffect(
    () => {
        socketRef.current = io.connect("http://localhost:4000")
        socketRef.current.on("message", ({ name, message }) => {
            setChat([ ...chat, { name, message } ])
        })
        return () => socketRef.current.disconnect()
    },
    [ chat ]
  )

  const onTextChange = e =>{
    setState({...state,[e.target.name]: e.target.value})
  }

  const onMessageSubmit = (e) => {
    const { name, message } = state
    socketRef.current.emit("message", { name, message })
    e.preventDefault()
    setState({ message: "", name })
  }


  const renderChat =()=>{
    return chat.map(({name, message},index)=>(
      <div className="div-message" key={index}>
        <h3 className="message">
            {name}  <span className="massage_contents">{message}</span>
        </h3>
      </div>
    ))
  }

  return (
    <div class="chat">
        <form class="chat-components" onSubmit={onMessageSubmit}>
            {/*방제목 받아오기*/}
            <h1 className="title">Title</h1>
            <div className="name_field">
                {/* <label for="nickname">NICKNAME</label> */}
                <input 
                    name ="name" 
                    onChange={e=> onTextChange(e)} 
                    value={state.name}
                    label="Name"
                    placeholder="NickName"
                />
            </div>
            <div className="render-chat">
                {renderChat()}
            </div>
            <div className="btm_box">
                <input 
                    name ="message" 
                    onChange={e=> onTextChange(e)} 
                    value={state.message}
                    label="Message"
                />
                <button>전송</button>
            </div>
        </form>
    </div>
  );
}

export default Chat_temp;