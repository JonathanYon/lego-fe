import {
  Navbar,
  Nav,
  Container,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
import { FaCube, FaSearch, FaBars } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { SiBuildkite } from "react-icons/si";
import { IoMdArrowDropdown } from "react-icons/io";
import "./nav-foot.css";

const TopNav = () => {
  return (
    <Navbar bg="light">
      <Container className="bg-dark">
        <Navbar.Brand href="#home">
          <div className="d-lg-block d-none">
            <img
              src={process.env.PUBLIC_URL + "title.webp"}
              alt=""
              style={{ width: "70%", height: "20%" }}
              className="ml-n5"
            />
          </div>
          <div className="ml-1 d-flex">
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
                <small>hello</small>
                <small>hello</small>
                <small>hello</small>
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
                <small>he</small>
                <small>he</small>
                <small>he</small>
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
                <small>helu</small>
                <small>helu</small>
                <small>helu</small>
              </div>
            </div>
          </Nav.Link>
        </Nav>
        <Form inline className="mr-5 d-lg-flex d-none">
          <FormControl type="text" placeholder="Search" className="" />
          <Button variant="success">
            <FaSearch />
          </Button>
        </Form>
        <div className="d-lg-none d-flex">
          <div className="d-lg-none d-flex flex-column text-white">
            <FaSearch className="search" />
            <small className="mr-3">Search</small>
          </div>
          <FaBars className="mt-2 mr-1 bar d-lg-none d-sm-block text-white" />
        </div>
      </Container>
    </Navbar>
  );
};
export default TopNav;
