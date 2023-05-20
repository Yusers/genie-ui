import React, { useState, useRef } from 'react';
import './ChatBox.scss';
import axios from 'axios';
import '../Header/Responsive.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
const severAddress = 'https://yusers.github.io/genie-ui/chat';

function ChatBox(props) {
  const [conversation, setConversation] = useState([]);
  const [message, setMessage] = useState('');
  // const [users, setUsers] = useState('Guess');
  const inputRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    props.onDataFromChild(isOpen);
    setIsOpen(!isOpen);
  };

  // const handleUsers = (user) => {
  //   setUsers(user);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the user's message to the conversation state
    setConversation((prevConversation) => [
      ...prevConversation,
      {
        user: `${'Guess'}`,
        text: message,
      },
    ]);

    axios
      .post('http://localhost:443/chat', { prompt: message })
      .then((res) => {
        let botMessage = res.data.trim();
        if (message.trim().toLowerCase() === 'hello') {
          botMessage = `Hello ${'Guess'}, How can I help you?`;
        } else if (message.toLowerCase().includes('website')) {
          botMessage = `Website Genie giúp các bạn mở rộng gu ăn mặc, thời trang nói chung.`;
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
                <p style={{ fontSize: '14px' }}>
                  <strong>Bot:</strong> Hello, tôi là thần đèn, hãy nói cho tôi
                  về <br></br> điều ước của bạn nhé^^
                </p>
              </div>
              {conversation.map((msg, index) => (
                <p
                  key={index}
                  className={`chatbox__message chatbox__message--${
                    msg.user === 'Bot' ? msg.user : 'Human'
                  }`}
                >
                  <span className="chatbox__user">{'Guess'}:</span> {msg.text}
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
