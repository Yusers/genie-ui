import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormInput from '~/components/Layout/components/FormInput';
import './Weekly.scss';
import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import Modal from '~/components/Layout/components/ModalB';
import { BrowserView } from 'react-device-detect';

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
                    <h1 className="weekly-title">Weekly Outfit</h1>
                    <div className="weekly-des">
                      <h2>
                        "Get creative with your clothes using our Weekly Outfit
                        feature."
                      </h2>
                    </div>
                    <p>
                      <strong>"Chưa có"</strong> nghĩa là bạn chưa có đồ và bạn
                      muốn tìm một outfit ngẫu nhiên do chức năng đưa ra
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
                    <h1 className="weekly-title">Weekly Outfit</h1>
                    <BrowserView className="weekly-des">
                      <h2>
                        "Get creative with your clothes using our Weekly Outfit
                        feature."
                      </h2>
                    </BrowserView>
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
