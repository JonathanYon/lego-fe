import { Card, Col } from "react-bootstrap";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { MiniFigResult, ReduxStore, SetResult } from "../../types/reduxStore";

interface Iprops extends RouteComponentProps {
  data: MiniFigResult | SetResult;
  // data: ReduxStore["fav"]
}

const SingleSet = ({ data, history }: Iprops) => {
  // console.log("data", data);
  return (
    <Col
      className="mb-2 "
      onClick={() => history.push(`/detail/${data?.set_num}`)}
    >
      <Card style={{ height: "18rem", width: "15rem" }} className="mx-auto">
        <Card.Img
          variant="top"
          src={data?.set_img_url}
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
