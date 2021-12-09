import {
  Navbar,
  Nav,
  Container,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
import { FaCube, FaSearch } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { SiBuildkite } from "react-icons/si";

const TopNav = () => {
  return (
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
          <Nav.Link href="#home" className="text-white">
            <div className="d-flex flex-column">
              <FaCube />
              <small>Sets</small>
            </div>
          </Nav.Link>
          <Nav.Link href="#features" className="text-white">
            <div className="d-flex flex-column">
              <SiBuildkite />
              <small>Parts</small>
            </div>
          </Nav.Link>
          <Nav.Link href="#pricing" className="text-white">
            <div className="d-flex flex-column">
              <BsPersonFill />
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
  );
};
export default TopNav;
