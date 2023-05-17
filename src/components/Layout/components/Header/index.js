import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect';
import './Responsive.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import OffCanvas from '../OffCanvas';

const cx = classNames.bind(styles);

function Header() {
  const [showItemsDrop, setShowItemsDrop] = useState(false);
  const dropdownRef = useRef(null);

  const handleShow = () => {
    setShowItemsDrop(!showItemsDrop);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowItemsDrop(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className={`blog-header ${cx('header-text')} ${cx('header-bg')}`}>
      <div className={`nav`}>
        <div className={`${cx('navbar-body')}`}>
          <MobileView>
            <div className={cx('dropdowMenu')} ref={dropdownRef}>
              <FontAwesomeIcon
                className={cx('bars')}
                icon={faBars}
                onClick={() => handleShow()}
              />
              {showItemsDrop && (
                <div>
                  <ul className={`nav justify-content-center ${cx('pc-nav')}`}>
                    <li className={`nav-item`}>
                      <a className={`nav-link active`} href="/genie-ui">
                        Home
                      </a>
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
                      <Link className="nav-link" to="/genie-ui/weekly-outfit">
                        Weekly-Outfit
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </MobileView>
          <ul className={`${cx('features')} weekly nav justify-content-center`}>
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
            {/* <a
              className={`text-color-peachPuff4 blog-header-logo text-dark`}
              href="/genie-ui"
            >
              <img className={cx('img-logo')} src={images.logo} />
            </a> */}
            <ul className={`nav`}>
              <li className={`nav-item`}>
                <a
                  className={`nav-link active ${cx('nav-brand')}`}
                  href="/genie-ui"
                  style={{ fontSize: '32px' }}
                >
                  GENIE
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-right">
            <BrowserView>
              <ul className={`nav justify-content-center ${cx('pc-nav')}`}>
                <li className={`nav-item`}>
                  <a className={`nav-link active`} href="/genie-ui">
                    Home
                  </a>
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
            </BrowserView>
            <MobileView>
              <Link className={`nav-link`} to="/genie-ui/login">
                <div className={`login`}>
                  <FontAwesomeIcon icon={faUser} />
                </div>
              </Link>
            </MobileView>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
