import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './OffCanvas.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from '../Header/Header.module.scss';

const cx = classNames.bind(styles);

function OffCanvas({ card, isCardChildren, btn, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <span onClick={handleShow}>{btn}</span>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="title">
            {isCardChildren && card.title}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {isCardChildren ? (
            <div className="offcanvas-descr">
              <div className="offcanvas-img">
                <img src={card.imgSrc} width="300" height="200" />
              </div>
              <p>{card.description}</p>
              <p>Link Áo: </p>
              <a href={card.link.tShirt}>{card.link.tShirt}</a>
              <p>Link Quần: </p>
              <a href={card.link.pants}>{card.link.pants}</a>
            </div>
          ) : (
            <ul className={`nav justify-content-center ${cx('pc-nav')}`}>
              <li className={`nav-item`}>
                <Link
                  className={`nav-link active`}
                  aria-current="page"
                  to="/genie-ui"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/genie-ui/community">
                  Community
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/genie-ui/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link`} to="/genie-ui/login">
                  <div className={`${cx('register')}`}>
                    <a style={{ margin: 0 }}>Log in</a>
                  </div>
                </Link>
              </li>
            </ul>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvas;
