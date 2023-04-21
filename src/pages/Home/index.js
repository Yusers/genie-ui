import Input from '~/components/Layout/components/Input';
import classNames from 'classnames/bind';
import styles from './Home.scss';
import HeaderText from '~/components/Layout/components/Header/HeaderText';
import Carousel from '~/components/Layout/components/Carousel';

const dataFunction = [
  {
    srcImg: './images/pages/landing_pages_1.png',
    title: 'Welcome to Website',
    descr:
      'Discover your perfect style with Genie - your personal fashion assistant.',
  },
  {
    srcImg: './images/pages/landing_pages_3.png',
    title: 'Weekly Outfit Features',
    descr:
      'Our Weekly Outfit feature helps you create new outfits every week using the clothes you already own',
  },
  {
    srcImg: './images/pages/landing_pages_2.png',
    title: 'ChatBox Features',
    descr:
      'Get expert fashion advice and outfit recommendations with our intelligent chatbox.',
  },
];

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className="home-page">
      <div className="home-img">
        <div className="landing-img">
          <Carousel data={dataFunction} />
        </div>
      </div>
      <div className={`${cx('label-img')}`}>
        <div className={`overlay`}>
          <div className={`label-input`}>
            <h1 className={`label-text`}>Hello</h1>
            <div className={`label-form`}></div>
          </div>
        </div>
      </div>
      <div className="form-input"></div>
    </div>
  );
}

export default Home;
