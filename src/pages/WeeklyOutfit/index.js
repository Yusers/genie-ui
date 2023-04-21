import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormInput from '~/components/Layout/components/FormInput';
import './Weekly.scss';
import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Card from '~/components/Layout/components/Card';
import Tabs from 'react-bootstrap/Tabs';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel/dist/assets/owl.carousel.css';

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

const imgs = [
  { srcImg: './images/pages/weekly_pages_1.png', title: '', descr: '' },
];

function WeeklyOutfit() {
  const [key, setKey] = useState('home');
  return (
    <div className="weekly-page">
      <div className="weekly-container">
        <div className="weekly-input">
          <div className="weekly-form">
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab eventKey="profile" title="Chưa có">
                <div className="weekly-wrapper">
                  <div className="weekly-header">
                    <h1 className="title">Weekly Outfit</h1>
                    <h2>
                      "Get creative with your clothes using our Weekly Outfit
                      feature."
                    </h2>
                    <p>
                      "Chưa có" nghĩa là bạn chưa có đồ và bạn muốn tìm một
                      outfit ngẫu nhiên do chức năng đưa ra
                    </p>
                  </div>
                  <Container>
                    <Row>
                      <Col>
                        <FormInput />
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Tab>
              <Tab eventKey="home" title="Có rồi">
                <div className="weekly-wrapper">
                  <div className="weekly-header">
                    <h1 className="title">Weekly Outfit</h1>
                    <h2>
                      "Get creative with your clothes using our Weekly Outfit
                      feature."
                    </h2>
                    <p>
                      <strong>"Có rồi"</strong> có nghĩa là bạn đã có đồ nhưng
                      không biết phối như nào cho phù hợp, sau đó chức năng sẽ
                      phối cho bạn
                    </p>
                  </div>
                  <Container>
                    <Row>
                      <Col>
                        <FormInput boolean={true} />
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
        <div className="weekly-card"></div>
      </div>
    </div>
  );
}

export default WeeklyOutfit;
