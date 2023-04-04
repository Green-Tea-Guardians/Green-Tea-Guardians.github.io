import React from "react";
import io from "socket.io-client";
import Navbar from "../navbar/Navbar";
import Messages from "./Messages";
import ChatInput from "./ChatInput";

class ChatApp extends React.Component {
  socket = {};
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.sendHandler = this.sendHandler.bind(this);

    // Connect to the server
    this.socket = io({ query: `username=${props.username}` }).connect();

    // Listen for messages from the server
    this.socket.on("server:message", (message) => {
      this.addMessage(message);
    });
  }

  sendHandler(message) {
    const messageObject = {
      username: this.props.username,
      message,
    };

    // Emit the message to the server
    this.socket.emit("client:message", messageObject);

    messageObject.fromMe = true;
    this.addMessage(messageObject);
  }

  addMessage(message) {
    // Append the message to the component state
    const messages = this.state.messages;
    messages.push(message);
    this.setState({ messages });
  }

  render() {
    return (
      <div className="container">
        <Navbar></Navbar>
        <div id="chatContainerCenteringDiv">
          <div id="chatContainer">
            <nav id="chatHeader">
              <div id="chatHeaderLeftSide">
                <img
                  id="chatHeaderIcon"
                  src="https://images.unsplash.com/photo-1674574124976-a56d9052c2f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  className="chatHoverable"
                ></img>
                <h1 id="chatHeaderTitle">All Chat</h1>
              </div>
              <div id="chatHeaderRightSide">
                <div id="chatHeaderOptions" className="chatHoverable">
                  <span>...</span>
                </div>
              </div>
            </nav>
            <div id="chatBody">
              <Messages messages={this.state.messages} />
            </div>
            <div id="chatBottom">
              <div id="chatInputFieldButtons">
                <div id="chatAddFile" className="chatHoverable">
                  <span className="material-symbols-outlined">create_new_folder</span>
                </div>
                <div id="chatAddPicture" className="chatHoverable">
                  <span className="material-symbols-outlined">imagesmode</span>
                </div>
                <div id="chatMoreTextOptions" className="chatHoverable">
                  <span className="material-symbols-outlined">add_circle</span>
                </div>
              </div>
              <div id="chatInputField">
                <div id="chatEmojiButton" className="chatHoverable">
                  <span className="material-symbols-outlined">mood</span>
                </div>
                <ChatInput onSend={this.sendHandler} />
                <div id="chatSendButton" className="chatHoverable">
                  <span className="material-symbols-outlined">send</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Messages messages={this.state.messages} />
        <ChatInput onSend={this.sendHandler} /> */}
      </div>
    );
  }
}
ChatApp.defaultProps = {
  username: "Anonymous",
};

export default ChatApp;
