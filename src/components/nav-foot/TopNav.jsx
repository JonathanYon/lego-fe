import {
  Navbar,
  Nav,
  Container,
  FormControl,
  Form,
  Button,
  Dropdown,
} from "react-bootstrap";
import { FaCube, FaSearch } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { SiBuildkite } from "react-icons/si";
import { IoMdArrowDropdown } from "react-icons/io";
import "./nav-foot.css";

const TopNav = () => {
  return (
    <>
      <Container>
        <Navbar bg="dark" variant="light">
          <Navbar.Brand href="#home">
            <img
              src={process.env.PUBLIC_URL + "title.webp"}
              alt=""
              style={{ width: "70%", height: "20%" }}
              className="ml-n5"
            />
            {/* <img
            src={process.env.PUBLIC_URL + "title-sm.png"}
            alt=""
            style={{ width: "70%", height: "20%" }}
          /> */}
          </Navbar.Brand>
          <Nav
            className="mr-auto d-flex justify-content-between"
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
          <Form inline className="mr-5 d-flex">
            <FormControl type="text" placeholder="Search" className="" />
            <Button variant="success">
              <FaSearch />
            </Button>
          </Form>
        </Navbar>
      </Container>
    </>
  );
};
export default TopNav;
