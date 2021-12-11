import { Button, Col, Container, Row } from "react-bootstrap";
import { FaPlus, FaEquals } from "react-icons/fa";
import { AiFillBuild } from "react-icons/ai";
import { withRouter } from "react-router-dom";
import "./home.css";

const StaticView = (props) => {
  return (
    <Container className="my-4">
      <Row>
        <Col className="d-lg-flex flex-sm-column flex-lg-row">
          <div className="d-flex flex-column">
            <img src={process.env.PUBLIC_URL + "truck.jpg"} alt="" />
            <strong>I have this</strong>
          </div>
          <FaPlus className="plus" />
          <div className="d-flex flex-column">
            <img src={process.env.PUBLIC_URL + "parts.jpg"} alt="" />
            <strong>And a bunch of these</strong>
          </div>
          <FaEquals className="plus" />
          <div className="d-flex flex-column">
            <img src={process.env.PUBLIC_URL + "car.jpg"} alt="" />
            <strong>Now I can build this, woooo!</strong>
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Button variant="success" onClick={() => props.history.push("/info")}>
            <AiFillBuild /> Mangage your LEGO&reg; Collection
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default withRouter(StaticView);
