import { Carousel as CarouselB } from 'react-bootstrap';
import './Carousel.scss';
import '../Header/Responsive.scss';

function Carousel({ data }) {
  return (
    <>
      <CarouselB variant="dark">
        {data.map((item, index) => {
          return (
            <CarouselB.Item key={index}>
              <img
                className="d-block"
                src={item.srcImg}
                alt={item.title}
                style={{ height: '100vh', width: '100%' }}
              />
              <CarouselB.Caption className="caption">
                <h3>{item.title}</h3>
                <p style={{ marginBottom: `10px` }}>{item.descr}</p>
              </CarouselB.Caption>
            </CarouselB.Item>
          );
        })}
      </CarouselB>
    </>
  );
}

export default Carousel;
