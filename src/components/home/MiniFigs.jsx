import { useEffect } from "react";
import { Container, Row, ListGroup, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getMiniFigs } from "../../redux/action";
import SingleSet from "./SingleSet";

const MiniFigs = () => {
  const minifigs = useSelector((state) => state.minifigs.data);
  const errors = useSelector((state) => state.minifigs.error);
  const loading = useSelector((state) => state.minifigs.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMiniFigs());
  }, []);

  return (
    <Container>
      <Row sm={2} md={4} className="mx-auto">
        {errors && (
          <ListGroup className="mt-3 mb-5 mx-auto">
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
        {/* <Col className=""> */}
        {minifigs
          .map((data) => <SingleSet key={data.set_num} data={data} />)
          .slice(10, 22)}
        {/* </Col> */}
      </Row>
    </Container>
  );
};
export default MiniFigs;
