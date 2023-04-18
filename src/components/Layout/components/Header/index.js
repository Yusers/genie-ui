import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import HeaderText from './HeaderText';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={`blog-header ${cx('header-text')} ${cx('header-bg')}`}>
      <div
        className={`row flex-nowrap justify-content-between align-items-center`}
      >
        <div className={`${cx('navbar-app')}`}>
          <div className={`text-center`}>
            <a
              className={`text-color-peachPuff4 blog-header-logo text-dark`}
              href="/"
            >
              <img className={cx('img-logo')} src={images.logo} />
            </a>
          </div>
        </div>
        <div
          className={`col-4 d-flex justify-content-end align-items-center`}
        ></div>
      </div>

      <ul className={`nav justify-content-center`}>
        <li className={`nav-item`}>
          <a
            className={`nav-link active`}
            aria-current="page"
            href="index.html"
          >
            Trang Chủ
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/community">
            Cộng Đồng
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/intro">
            Giới Thiệu
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
