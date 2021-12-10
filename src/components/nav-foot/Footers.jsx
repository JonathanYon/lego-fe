import {
  Container,
  Row,
  Button,
  Col,
  Form,
  FormControl,
} from "react-bootstrap";
import { CgSweden } from "react-icons/cg";

const Footers = () => {
  return (
    <Container fluid className="my-5">
      <Container className="">
        <Row className="d-flex flex-column">
          <Col className="d-flex">
            <div className="col-7">
              <h4>Need help?</h4>
              <div>
                <Button className="rounded-pill mr-2 bg-success">
                  Customer service
                </Button>
                <Button className="rounded-pill mr-2 mt-1 bg-success">
                  Ordering
                </Button>
                <Button className="rounded-pill mr-2 mt-1 bg-success">
                  Payment method
                </Button>
                <Button className="rounded-pill mr-2 mt-1 bg-success">
                  Deliveries
                </Button>
                <Button className="rounded-pill mr-2 mt-1 bg-success">
                  Discounts
                </Button>
                <Button className="rounded-pill mr-2 mt-2 bg-success">
                  Returns
                </Button>
              </div>
            </div>
            <div className="col-5">
              <h4>Inspiration & offer</h4>
              <Form inline className=" d-flex search-under">
                <FormControl
                  type="text"
                  placeholder="john@gmail.com"
                  className=""
                />
                <Button variant="warning">
                  {/* <FaSearch /> */}
                  Subscribe
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
        <Row className="d-flex flex-column mt-5">
          <Col className="d-flex">
            <div className="col-12 d-flex justify-content-between">
              <div>
                <h6>My page</h6>
                <div className="d-flex flex-column">
                  <small>My order</small>
                  <small>My invoice</small>
                  <small>My offer</small>
                  <small>My profile</small>
                </div>
              </div>
              <div>
                <h6>My page</h6>
                <div className="d-flex flex-column">
                  <small>My order</small>
                  <small>My invoice</small>
                  <small>My offer</small>
                  <small>My profile</small>
                </div>
              </div>
              <div>
                <h6>My page</h6>
                <div className="d-flex flex-column">
                  <small>My order</small>
                  <small>My invoice</small>
                  <small>My offer</small>
                  <small>My profile</small>
                </div>
              </div>
              <div>
                <h6>My page</h6>
                <div className="d-flex flex-column">
                  <small>My order</small>
                  <small>My invoice</small>
                  <small>My offer</small>
                  <small>My profile</small>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="d-flex flex-column mt-4">
          <Col className="d-flex justify-content-between">
            <div className="">
              <img src={process.env.PUBLIC_URL + "robo.png"} alt="robot" />
            </div>
            <div className="mt-4">
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </div>
            <div className="mt-4">
              <small>hjej</small>
              <small>hjej</small>
              <small>hjej</small>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default Footers;
