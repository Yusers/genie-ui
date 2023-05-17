import Page404 from '~/components/Layout/components/Page404';
import './About.scss';

function About() {
  return (
    <div className="About">
      {<Page404 pageName={'About'} /> || (
        <div className="About-intro">
          <div className="About-header w-80">
            <h3>---GENIE---</h3>
            <h1>
              "Genie - Đắp ước thời trang của bạn, tạo nên phong cách cá nhân
              với sự thông minh và tiện lợi."
            </h1>
          </div>
          <div className="About-header">
            <h1>2022</h1>
          </div>
          <img src="/images/pages/landing_pages_5.png" />
        </div>
      )}
    </div>
  );
}

export default About;
