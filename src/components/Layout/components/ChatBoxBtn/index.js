import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ChatBox from '../ChatBox';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import '../Header/Responsive.scss';

function ChatBoxBtn() {
  const [showComponent, setShowComponent] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);
  const [chatBoxOpen, setChatBoxOpen] = useState(null);

  const handleButtonClick = () => {
    console.log('trans');
    setShowComponent(true);
    setButtonVisible(false);
  };

  const handleChatBoxOpen = (data) => {
    console.log('trans');
    console.log('data: ', data);
    setShowComponent(false);
    setButtonVisible(data);
    setChatBoxOpen(data);
  };

  return (
    <div>
      {buttonVisible && (
        <button className="chatbox-btn" onClick={handleButtonClick}>
          <FontAwesomeIcon icon={faRobot} />
        </button>
      )}
      {showComponent && (
        <ChatBox boolean={!buttonVisible} onDataFromChild={handleChatBoxOpen} />
      )}
    </div>
  );
}

export default ChatBoxBtn;
