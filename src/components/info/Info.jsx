import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { AiOutlineBuild } from "react-icons/ai";
import { FcAdvertising } from "react-icons/fc";
import {
  FaTrophy,
  FaGavel,
  FaRocket,
  FaMoneyBillAlt,
  FaUserFriends,
} from "react-icons/fa";
import { MdPersonAddAlt } from "react-icons/md";
import "./info.css";

const Info = () => {
  return (
    <Container className="my-5">
      <Row className="d-flex">
        <Col sm={8} className="text-left">
          <h5 className="mb-4">Why create a Rebrickable account?</h5>
          <small>
            Find out exactly what LEGO parts you need to build your favorite
            MOCs. You will gain access to lots of free member-only features to
            help you build and share your LEGO creations.
          </small>
          <div className="d-flex mt-4">
            <AiOutlineBuild className="icon mr-3" />
            <span>
              <strong>LEGO Collection</strong> Manage your thousands of LEGO
              sets and loose parts
            </span>
          </div>
          <div className="d-flex mt-4">
            <FcAdvertising className="icon mr-3" />
            <span>
              <strong>Ad-Free</strong> No more display ads for a better browsing
              experience
            </span>
          </div>
          <div className="d-flex mt-4">
            <FaTrophy className="icon mr-3" />
            <span>
              <strong>Prizes</strong> Participate in competitions and raffle
              draws to win LEGO sets!
            </span>
          </div>
          <div className="d-flex mt-4">
            <FaGavel className="icon mr-3" />
            <span>
              <strong>Unlimited Builds</strong> Use your entire LEGO collection
              in your build searches
            </span>
          </div>
          <div className="d-flex mt-4">
            <FaRocket className="icon mr-3" />
            <span>
              <strong>MOCs</strong> Submit and share your custom creations with
              the world
            </span>
          </div>
          <div className="d-flex mt-4">
            <FaMoneyBillAlt className="icon mr-3" />
            <span>
              <strong>Buy Parts</strong> Utilise our free tools to help you buy
              LEGO from thousands of retailers
            </span>
          </div>
          <div className="d-flex mt-4">
            <MdPersonAddAlt className="icon mr-3" />
            <span>
              <strong>Designers</strong> Follow your favorite MOC designers
            </span>
          </div>
        </Col>
        <Col sm={4} className="bg-light mt-1">
          <h2>
            <FaUserFriends /> Register
          </h2>
          <Form className="bg-light">
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
            <Button variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default Info;
