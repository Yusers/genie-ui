import Header from '~/components/Layout/components/Header';
import Footer from './Footer';
import './DefaultLayout.scss';

function DefaultLayout({ children }) {
  return (
    <div className="containerApp">
      <Header />
      <div>
        <div className="content">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
