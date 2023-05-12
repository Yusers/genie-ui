import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './OffCanvas.scss';

function OffCanvas({ card, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    console.log(card);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <span onClick={handleShow}>More...</span>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="title">{card.title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
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
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvas;
