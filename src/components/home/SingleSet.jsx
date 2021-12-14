import { Card, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

const SingleSet = ({ data, history }) => {
  // console.log("data", data);
  return (
    <Col
      className="mb-2 "
      onClick={() => history.push(`/detail/${data.set_num}`)}
    >
      <Card style={{ height: "18rem", width: "15rem" }} className="mx-auto">
        <Card.Img
          variant="top"
          src={data.set_img_url}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        {/* <Card.Body>
     <Card.Text>.</Card.Text>
       </Card.Body> */}
      </Card>
    </Col>
  );
};
export default withRouter(SingleSet);
