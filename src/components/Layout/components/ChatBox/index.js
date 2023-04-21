import React, { useState, useRef } from 'react';
import './ChatBox.scss';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';

function ChatBox(props) {
  const [conversation, setConversation] = useState([]);
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState('Guess');
  const inputRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    props.onDataFromChild(isOpen);
    setIsOpen(!isOpen);
  };

  const handleUsers = (user) => {
    setUsers(user);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the user's message to the conversation state
    setConversation((prevConversation) => [
      ...prevConversation,
      {
        user: `${users}`,
        text: message,
      },
    ]);

    axios
      .post('http://localhost:8080/chat', { prompt: message })
      .then((res) => {
        let botMessage = res.data.trim();
        if (message.trim().toLowerCase() === 'hello') {
          botMessage = `Hello ${users}, How can I help you?`;
        } else if (
          message.toLowerCase().includes('tên') ||
          message.toLowerCase().includes('tôi là')
        ) {
          handleUsers();
        } else if (message.toLowerCase().includes('what your name')) {
          botMessage = `I'm chatGPT`;
        }
        // Update the last message in the conversation with the response from the server
        setConversation((prevConversation) => {
          const updatedConversation = [...prevConversation];
          updatedConversation[updatedConversation.length - 1].text = message;
          updatedConversation.push({ user: 'Bot', text: botMessage });
          return updatedConversation;
        });
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
                <button onClick={handleClose}>
                  <FontAwesomeIcon
                    className="chatbox__ic"
                    icon={faXmarkCircle}
                  />
                </button>
                <p>
                  <strong>Bot:</strong>I'm chatGPT, how can I help you?
                </p>
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
