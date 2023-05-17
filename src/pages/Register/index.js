import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Register.scss';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { BrowserView, MobileOnlyView } from 'react-device-detect';

function Register() {
  return (
    <div className="Register">
      <div className="form">
        <div className="form-img">
          <h1>Genie</h1>
          <h5>
            "Tạo tài khoản ngay và phát huy phong cách của bạn với Genie!"
          </h5>
          <BrowserView>
            <p>
              "Khám phá thế giới phối đồ tuyệt vời với Genie - nơi mà phong cách
              của bạn trở nên sống động và đầy sáng tạo. Hãy tạo tài khoản ngay
              hôm nay và khám phá biết bao nhiêu cách để tỏa sáng với phong cách
              riêng của bạn!"
            </p>
          </BrowserView>
        </div>
        <div className="form-login">
          <div className="form-header">
            <h1>Register</h1>
          </div>
          <div className="form-body">
            <input type="text" placeholder="User Name" />
            <input type="password" placeholder="Password" />
            <input type="email" placeholder="email@email.com" />
            <Link className="text" to="/genie-ui/login">
              or login here?
            </Link>
          </div>
          <div className="form-footer">
            <button>Register</button>
            <div className="form-loginApi">
              <a href="/">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="/">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
