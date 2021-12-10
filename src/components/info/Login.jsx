import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Login = () => {
  return (
    <Container>
      <Row>
        <Col sm={4}></Col>
        <Col sm={4} className="bg-light my-5">
          <Form>
            <h4 className="mt-4">Login</h4>
            <div className="my-4 text-left">
              Your username will be visible to others and can be changed later
              if you need to.
            </div>
            <Form.Group controlId="formBasicUser" className="mb-2">
              <Form.Control type="user" placeholder="User Name" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail" className="mb-2">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword" className="mb-2">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="success" type="submit" className="mb-5">
              Submit
            </Button>
          </Form>
        </Col>
        <Col sm={4}></Col>
      </Row>
    </Container>
  );
};
export default Login;
