import classNames from 'classnames/bind';
import styles from '../Header.module.scss';
import './HeaderText.scss';

const cx = classNames.bind(styles);

function HeaderText({ number, styles }) {
  return (
    <div
      style={{ marginBottom: `${number}px` }}
      className={`jumbotron p-3 p-md-4 text-white rounded ${cx('bg-brown')}`}
    >
      <nav className="navbar bg-body-tertiary">
        <div className={`container-fluid ${cx('bg-brown')}`}>
          <a href="/about" className="navbar-brand">
            <h1 className={`${cx('header')}`}>Weekly Outfit</h1>
          </a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className={`${cx(`${styles}`)} btn btn-outline-danger`}
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default HeaderText;
