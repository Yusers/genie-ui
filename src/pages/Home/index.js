import Card from '~/components/Layout/components/Card';
import OwlCarousel from 'react-owl-carousel';
import Input from '~/components/Layout/components/Input';
import 'owl.carousel/dist/assets/owl.carousel.css';
import { useState } from 'react';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Button } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './Home.scss';
import HeaderText from '~/components/Layout/components/Header/HeaderText';
import { Link } from 'react-router-dom';
import ChatBox from '~/components/Layout/components/ChatBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
const DataCard = [
  {
    id: 1,
    imgSrc: './images/outfit/home_outfit.jfif',
    title: 'Monday',
    description:
      "Today's outfit is all about comfort and style. The loose-fitting shirt paired with the high-waisted Continue...",
    link: '/',
  },
  {
    id: 2,
    imgSrc: './images/outfit/home_outfit2.jfif',
    title: 'Tuesday',
    description:
      "Today's outfit is all about comfort and style. The loose-fitting shirt paired with the high-waisted Continue...",
    link: '/',
  },
  {
    id: 3,
    imgSrc: './images/outfit/home_outfit3.jfif',
    title: 'Wednesday',
    description:
      "Today's outfit is all about comfort and style. The loose-fitting shirt paired with the high-waisted Continue...",
    link: '/',
  },
  {
    id: 4,
    imgSrc: './images/outfit/home_outfit4.jfif',
    title: 'Thursday',
    description:
      "Today's outfit is all about comfort and style. The loose-fitting shirt paired with the high-waisted Continue...",
    link: '/',
  },
  {
    id: 5,
    imgSrc: './images/outfit/home_outfit5.jfif',
    title: 'Friday',
    description:
      "Today's outfit is all about comfort and style. The loose-fitting shirt paired with the high-waisted Continue...",
    link: '/',
  },
  {
    id: 6,
    imgSrc: './images/outfit/home_outfit6.jfif',
    title: 'Saturday',
    description:
      "Today's outfit is all about comfort and style. The loose-fitting shirt paired with the high-waisted Continue...",
    link: '/',
  },
  {
    id: 7,
    imgSrc: './images/outfit/home_outfit7.jfif',
    title: 'Sunday',
    description:
      "Today's outfit is all about comfort and style. The loose-fitting shirt paired with the high-waisted Continue...",
    link: '/',
  },
];

const cx = classNames.bind(styles);

function Home() {
  const [showComponent, setShowComponent] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);
  const [chatBoxOpen, setChatBoxOpen] = useState(false);

  function handleChatBoxClose() {
    setShowComponent(false);
    setChatBoxOpen(false);
    setButtonVisible(true);
  }

  function handleButtonClick() {
    setShowComponent(true);
    setButtonVisible(false);
    setChatBoxOpen(true);
  }

  return (
    <div className="home-page">
      <div>
        {buttonVisible && (
          <button className="chatbox-btn" onClick={handleButtonClick}>
            <FontAwesomeIcon icon={faRobot} />
          </button>
        )}
        {showComponent && <ChatBox onClose={handleChatBoxClose} />}
      </div>
      <div className="home-img">
        <div className="test"></div>
        <div className="intro-page">
          <div className="intro-text">
            <h1>
              <FontAwesomeIcon icon={faRobot} />
              Chat-AI
            </h1>
            <p>
              Description Description Description <br></br> Description
              Description Description Description
            </p>
            <div className="intro-btn">
              <Button>
                <Link to="/form-input">Click here</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="card-carousel">
        <OwlCarousel
          items="4"
          dots
          loop={true}
          autoplay={true}
          autoplaySpeed={500}
        >
          {DataCard.map((card, index) => {
            return <Card card={card} key={index} />;
          })}
        </OwlCarousel>
      </div>
      <HeaderText number={10} />
      <div className={`${cx('label-img')}`}>
        <div className={`overlay`}>
          <div className={`label-input`}>
            <h1 className={`label-text`}>Hello</h1>
            <div className={`label-form`}>
              <Input />
            </div>
          </div>
        </div>
      </div>
      <div className="form-input"></div>
    </div>
  );
}

export default Home;
