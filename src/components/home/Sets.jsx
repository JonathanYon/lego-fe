import { useEffect, useState } from "react";
import { Form, ListGroup, Container, Row, Col, Spinner } from "react-bootstrap";
// import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getSets } from "../../redux/action";
import SingleSet from "./SingleSet";

const Sets = () => {
  const [search, setSearch] = useState("");
  const [minYear, setMinYear] = useState("");
  const [maxYear, setMaxYear] = useState("");
  const [minParts, setMinParts] = useState("");
  const [maxParts, setMaxParts] = useState("");

  const dispatch = useDispatch();
  const allSets = useSelector((state) => state.sets.data);
  const errors = useSelector((state) => state.sets.error);
  const loading = useSelector((state) => state.sets.loading);
  // const filteredSet = allSets.filter((sets) =>
  //   sets.name.toLowerCase().includes(search)
  // );
  // .filter((time) => time.year >= minYear)
  // .filter((time) => time.year <= maxYear);
  // .filter((time) => time.num_parts >= minParts)
  // .filter((time) => time.num_parts <= maxParts);

  console.log(allSets);

  useEffect(() => {
    dispatch(getSets(search, minYear, maxYear, minParts, maxParts));
  }, [search, minYear, maxYear, minParts, maxParts]);

  const year = new Date().getFullYear();
  const years = Array.from(new Array(73), (val, index) => year - index);

  return (
    <Container>
      <Row>
        <Col className="set-search">
          <Form className="d-flex justify-content-between mt-2">
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="search"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Control
                as="select"
                defaultValue="Choose..."
                value={minYear}
                onChange={(e) => setMinYear(e.target.value)}
              >
                <option>Min year</option>
                {years.map((oneYear) => (
                  <option>{oneYear}</option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Control
                as="select"
                defaultValue="Choose..."
                value={maxYear}
                onChange={(e) => setMaxYear(e.target.value)}
              >
                <option>Max year</option>
                {years.map((oneYear) => (
                  <option>{oneYear}</option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Control
                type="number"
                placeholder="Min parts"
                value={minParts}
                onChange={(e) => setMinParts(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Control
                type="number"
                placeholder="Max parts"
                value={maxParts}
                onChange={(e) => setMaxParts(e.target.value)}
              />
            </Form.Group>
            {/* <Button variant="success" type="submit">
              <FaSearch />
            </Button> */}
          </Form>
        </Col>
      </Row>
      {errors && (
        <ListGroup className="mt-3 mb-5 mx-5">
          <ListGroup.Item variant="danger">
            <strong>
              Something has gone wrong please come back again later
            </strong>
          </ListGroup.Item>
        </ListGroup>
      )}
      {loading && (
        <div className="mx-auto my-5">
          <Spinner animation="grow" className="" />
        </div>
      )}
      <Row className="my-5" sm={2} md={4}>
        {/* <Col className="d-flex"> */}
        {allSets.length > 0 ? (
          allSets.map((data) => <SingleSet key={data.set_num} data={data} />)
        ) : (
          // .slice(0, 10)
          <small>There are no sets in this list.</small>
        )}
        {/* </Col> */}
      </Row>
    </Container>
  );
};
export default Sets;
