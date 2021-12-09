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
          <Nav className="mr-auto">
            <Nav.Link
              href="#home"
              className="text-white position-relative nav-item"
            >
              <div className="d-flex flex-column">
                <div className="d-flex ">
                  <FaCube className="nav-list" />
                  <IoMdArrowDropdown />
                </div>
                <small>Sets</small>
              </div>
              {/* <ul className="text-left">
                <li>hello</li>
                <li>hello</li>
                <li>hello</li>
              </ul> */}
              <div className="d-flex flex-column drop">
                <small>hello</small>
                <small>hello</small>
                <small>hello</small>
              </div>
            </Nav.Link>

            <Nav.Link href="#features" className="text-white">
              <div className="d-flex flex-column">
                <div className="d-flex">
                  <SiBuildkite className="nav-list" />
                  <IoMdArrowDropdown />
                </div>
                <small>Parts</small>
              </div>
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-white">
              <div className="d-flex flex-column">
                <div className="d-flex">
                  <BsPersonFill className="nav-list" />
                  <IoMdArrowDropdown />
                </div>
                <small>Account</small>
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
