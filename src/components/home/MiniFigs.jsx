import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getMiniFigs } from "../../redux/action";
import SingleSet from "./SingleSet";

const MiniFigs = () => {
  const minifigs = useSelector((state) => state.minifigs.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMiniFigs());
  }, []);

  return (
    <Container>
      <Row sm={2} md={4}>
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
