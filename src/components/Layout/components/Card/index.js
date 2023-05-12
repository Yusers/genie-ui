import classNames from 'classnames/bind';
import styles from './Card.module.scss';
import OffCanvas from '../OffCanvas';

const cx = classNames.bind(styles);

function Card({ card }) {
  return (
    <div className={`${cx('card')}`}>
      <img className={`${cx('card-img')}`} alt={card.title} src={card.imgSrc} />
      <div className={`${cx('card-body')}`}>
        <h5 className={`${cx('card-title')}`}>{card.title}</h5>
        <p className={`${cx('card-descr')}`}>{card.description}</p>
        <div className={`${cx('btn')}`}>
          <OffCanvas card={card} />
        </div>
      </div>
    </div>
  );
}

export default Card;
