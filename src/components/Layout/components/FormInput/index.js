import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './FormInput.scss';
import { Link } from 'react-router-dom';

function FormInput({ boolean }) {
  return (
    <Form className="form-container">
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Tên Biệt Danh</Form.Label>
          <Form.Control type="name" placeholder="Tên biệt danh của bạn" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Yêu cầu của bạn</Form.Label>
        <Form.Control placeholder="Nhập ở đây (nếu không có thì để trống)" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridAge">
          <Form.Label>Tuổi</Form.Label>
          <Form.Control placeholder="Nhập tuổi" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Giới Tính</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>Nam</option>
            <option>Nữ</option>
            <option>Không biết...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Cung Hoàng Đạo</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>Bạch Dương (Aries)</option>
            <option>Kim Ngưu (Taurus)</option>
            <option>Song Tử (Gemini) </option>
            <option>Cự Giải (Cancer)</option>
            <option>Sư Tử (Leo)</option>
            <option>Xử Nữ (Virgo)</option>
            <option>Thiên Bình (Libra)</option>
            <option>Thiên Yết (Scorpio)</option>
            <option>Nhân Mã (Sagittarius)</option>
            <option>Ma Kết (Capricorn)</option>
            <option>Bảo Bình (Aquarius)</option>
            <option>Song Ngư (Pisces)</option>
            <option>Không biết...</option>
          </Form.Select>
        </Form.Group>
      </Row>

      {boolean && (
        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>Chọn được nhiều ảnh bạn nhé!</Form.Label>
          <Form.Control type="file" multiple />
        </Form.Group>
      )}

      <Link to="/genie-ui/weekly-outfit/ur-outfit">
        <Button variant="primary">Submit</Button>
      </Link>
    </Form>
  );
}

export default FormInput;
