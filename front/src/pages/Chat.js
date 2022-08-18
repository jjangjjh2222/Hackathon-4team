import React from 'react';
import "../styles/chat.css";
import WebSocketInstance from '../websocket';

class Chat extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
        this.waitForSocketConnection(() => {
            WebSocketInstance.addCallbacks(
                this.setMessages.bind(this), 
                this.addMessage.bind(this))
            WebSocketInstance.fetchMessages(this.props.currentUser);
        })
    }

    waitForSocketConnection(callback) {
        const component = this;
        setTimeout(
            function () {
                if(WebSocketInstance.state() === 1) {
                    console.log('connection is secure');
                    callback();
                    return;
                } else {
                    console.log('waiting for connection...');
                    component.waitForSocketConnection(callback);
                }
            }, 100);
    }

    addMessage(message) {
        this.setState({ 
            messages: [...this.state.messages, message]
        });
    }

    setMessages(messages) {
        this.setState({messages: messages.reverse()});
    }

    renderMessages = (messages) => {
        const currentUser = 'admin';
        return messages.map(massage => (
            <li key={massage.id} className={message.author === currentUser ? 'sent' : 'replies'}>
                <p>{message.content}</p>
            </li>
        ));
    }

    sendMessageHandler = e => {
        e.preventDefault();
        const messageObject = {
            from: 'admin',
            content: this.stage.message
        }
        WebSocketInstance.newChatMessage(messageObject);
        this.setState({
            message:''
        });
    }
    messageChangeHandler = event => {
        this.setState({messages: event.target.value})
    }

    render(){
        const messages = this.state.messages;
        return (
            <div className="frame">
                <div className='topWrap'>
                    <h1 id="title"></h1>
                    <div className="user-container">
                        <label htmlFor="nickname">NICKNAME</label>
                        <input type="text" id="nickname" spellCheck="false" />
                    </div>
                    <div className='timeBox'>TODO 시간에 따라 움직이는 바 넣기</div>
                </div>
                {/* <textarea className='chatArea' id="chat-log" cols="100" rows="20"> */}
                <div className="display-container" id="chat-log" cols="100" rows="20">
                    <ul className="chatting-list">
                            {/* <li className="sent">
                                <div className="user">윤이</div>
                                <p className="message">반갑쇼</span>
                            </li>
                            <li className="received">
                                <div className="user">우니</div>
                                <p className="message">안녕하쇼</span>
                            </li> */}
                            {
                                messages && 
                                this.renderMessages(messages)
                            }
                    </ul>
                </div>
                {/* </textarea><br>
                    <input id="chat-message-input" type="text" size="100"><br>
                    <input id="chat-message-submit" type="button" value="Send"> */}
                <div className='btmBox'>
                    <form onSubmit={this.sendMessageHandler}>
                        <div className="div1">
                            <div className="div2">
                                <input 
                                    onChange={this.messageChangeHandler}
                                    value={this.stage.message}
                                    className='textInput' 
                                    id="chat-message-input" 
                                    type="text" 
                                    size="100" />
                                <div className="div3">
                                    <input className='send-button' id="chat-message-submit" type="button" value="전송" />
                                    {/* {{ room_name|json_script:"room-name" }} */}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
};

export default Chat;

