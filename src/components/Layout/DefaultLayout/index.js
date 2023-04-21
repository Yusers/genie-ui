import Header from '~/components/Layout/components/Header';
import Footer from './Footer';
import './DefaultLayout.scss';
import ChatBoxBtn from '~/components/Layout/components/ChatBoxBtn';

function DefaultLayout({ children }) {
  return (
    <>
      <ChatBoxBtn />
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </>
  );
}

export default DefaultLayout;
