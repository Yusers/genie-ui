import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import HeaderText from './HeaderText';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={`blog-header ${cx('header-text')} ${cx('header-bg')}`}>
      <div className={`nav`}>
        <div className={`${cx('navbar-body')}`}>
          <ul className={`${cx('features')} nav justify-content-center`}>
            <li className={`nav-item`}>
              <Link
                className={`nav-link active`}
                aria-current="page"
                to="/genie-ui/weekly-outfit"
              >
                Weekly-Outfit
              </Link>
            </li>
          </ul>
          <div className={`${cx('navbar-brand-img')}`}>
            <a
              className={`text-color-peachPuff4 blog-header-logo text-dark`}
              href="/genie-ui"
            >
              <img className={cx('img-logo')} src={images.logo} />
            </a>
          </div>
          <ul className={`nav justify-content-center`}>
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
        </div>
      </div>
    </header>
  );
}

export default Header;
