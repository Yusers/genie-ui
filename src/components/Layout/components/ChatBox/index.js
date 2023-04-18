import React, { useState, useRef, useEffect } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import './ChatBox.scss';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
const person = {
  name: 'Guess',

  get getName() {
    return `${this.name}`;
  },

  set setName(name) {
    this.name = name;
  },
};

function ChatBox(props) {
  const [conversation, setConversation] = useState([]);
  const [message, setMessage] = useState('');
  const inputRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);

  function handleClose(boolean) {
    setIsOpen(boolean);
    props.onClose();
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8080/chat', { prompt: message })
      .then((res) => {
        if (message.trim().toLowerCase() === 'hello') {
          res.data = `Hello ${person.getName}, How can I help you?`;
        } else if (message.toLowerCase().includes('tên:')) {
          person.setName = message.split(':')[1];
        }
        setConversation((prevConversation) => [
          ...prevConversation,
          {
            user: `${person.getName}`,
            text: message,
          },
          { user: 'Bot', text: res.data.trim() },
        ]);
      })
      .catch((err) => {
        console.error(err);
      });

    // Clear the message input field
    setMessage('');
  };

  return (
    <>
      {isOpen && (
        <div className="chat-ui">
          <div className="chatbox">
            <div className="chatbox__conversation">
              <div className="chatbox__header">
                <p>
                  <strong>Bot:</strong>I'm chatGPT, how can I help you?
                </p>
                <button onClick={handleClose}>
                  <FontAwesomeIcon
                    className="chatbox__ic"
                    icon={faXmarkCircle}
                  />
                </button>
              </div>
              <p>
                <strong>Bot:</strong> Enter your name ex:"tên: Tân"
              </p>
              {conversation.map((msg, index) => (
                <p
                  key={index}
                  className={`chatbox__message chatbox__message--${
                    msg.user === 'Bot' ? msg.user : 'Human'
                  }`}
                >
                  <span className="chatbox__user">{msg.user}:</span> {msg.text}
                </p>
              ))}
            </div>
            <form onSubmit={handleSubmit}>
              <div className="chatbox__input-container">
                <input
                  type="text"
                  className="chatbox__input"
                  placeholder="Type your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  ref={inputRef}
                />
                <button className="chatbox__send-button" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBox;
