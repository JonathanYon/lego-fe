import {
  Navbar,
  Nav,
  Container,
  FormControl,
  Form,
  Button,
  Modal,
  ListGroup,
} from "react-bootstrap";
import { FaCube, FaSearch, FaBars } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { SiBuildkite } from "react-icons/si";
import { IoMdArrowDropdown } from "react-icons/io";
import { RouteComponentProps, withRouter } from "react-router-dom";
import "./nav-foot.css";
import { useState } from "react";

const TopNav = (props: RouteComponentProps) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="modal-container " onClick={handleClose}>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Body>
            <ListGroup variant="flush">
              <ListGroup.Item action variant="light">
                <div className="d-flex justify-content-between">
                  <h2>Hello 👋</h2>
                  <h5 onClick={() => props.history.push("/login")}>Login</h5>
                </div>
              </ListGroup.Item>
              <ListGroup.Item
                action
                variant="warning"
                className="mb-2"
                onClick={() => props.history.push("/sets")}
              >
                Sets
              </ListGroup.Item>
              <ListGroup.Item action variant="warning" className="mb-2">
                Minifigs
              </ListGroup.Item>
              <ListGroup.Item action variant="warning">
                Parts
              </ListGroup.Item>
            </ListGroup>
          </Modal.Body>
        </Modal>
      </div>
      <Navbar bg="light">
        <Container className="bg-dark">
          <Navbar.Brand href="#home">
            <div
              className="d-lg-block d-none"
              onClick={() => props.history.push("/")}
            >
              <img
                src={process.env.PUBLIC_URL + "title.webp"}
                alt=""
                style={{ width: "70%", height: "20%" }}
                className="ml-n5"
              />
            </div>
            <div className="ml-4 d-flex">
              <img
                src={process.env.PUBLIC_URL + "title-sm.png"}
                alt=""
                style={{ width: "70%", height: "20%" }}
                className=" d-lg-none d-sm-block"
              />
            </div>
          </Navbar.Brand>
          <Nav
            className="mr-auto d-lg-flex justify-content-between d-none"
            style={{ width: "40%" }}
          >
            <Nav.Link
              href="#home"
              className="text-white position-relative nav-item"
            >
              <div className="d-flex flex-column nav-list-container">
                <div className="d-flex ">
                  <FaCube className="nav-list" />
                  <IoMdArrowDropdown />
                </div>
                <small>Sets</small>
              </div>
              <div className="drop">
                <div className="d-flex flex-column text-left ml-2 mt-1">
                  <small
                    className="mb-2"
                    onClick={() => props.history.push("/sets")}
                  >
                    Find Sets
                  </small>
                  <small className="mb-2">Find Minifigs</small>
                </div>
              </div>
            </Nav.Link>
            <Nav.Link
              href="#features"
              className="text-white position-relative nav-item"
            >
              <div className="d-flex flex-column nav-list-container">
                <div className="d-flex">
                  <SiBuildkite className="nav-list" />
                  <IoMdArrowDropdown />
                </div>
                <small>Parts</small>
              </div>
              <div className="drop">
                <div className="d-flex text-left ml-2 flex-column mt-1">
                  <small className="mb-2">Find Parts</small>
                  <small className="mb-2">Part Colors</small>
                </div>
              </div>
            </Nav.Link>
            <Nav.Link
              href="#pricing"
              className="text-white position-relative nav-item"
            >
              <div className="d-flex flex-column nav-list-container">
                <div className="d-flex">
                  <BsPersonFill className="nav-list" />
                  <IoMdArrowDropdown />
                </div>
                <small>Account</small>
              </div>
              <div className="drop">
                <div className="d-flex text-left ml-2 flex-column mt-1">
                  <Button
                    variant="success"
                    className="mb-1 mr-2"
                    onClick={() => props.history.push("/login")}
                  >
                    LOGIN
                  </Button>
                  <Button
                    variant="danger"
                    className="mb-1 mr-2"
                    onClick={() => props.history.push("/info")}
                  >
                    REGISTER
                  </Button>
                </div>
              </div>
            </Nav.Link>
          </Nav>
          <Form d-flex className="mr-5 d-lg-flex d-none">
            <FormControl type="text" placeholder="Search" className="" />
            <Button variant="success">
              <FaSearch />
            </Button>
          </Form>
          <div className="d-lg-none d-flex mr-3">
            <div className="d-lg-none d-flex flex-column text-white">
              <FaSearch className="search" />
              <small className="mr-3">Search</small>
            </div>
            <FaBars
              className="mt-2 mr-1 bar d-lg-none d-sm-block text-white"
              onClick={handleShow}
            />
          </div>
        </Container>
      </Navbar>
      <Form d-flex className="d-lg-none d-flex search-under">
        <FormControl type="text" placeholder="Search" className="" />
        <Button variant="success">
          <FaSearch />
        </Button>
      </Form>
    </>
  );
};
export default withRouter(TopNav);
