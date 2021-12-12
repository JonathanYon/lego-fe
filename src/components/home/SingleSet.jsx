import { Card } from "react-bootstrap";

const SingleSet = ({ data }) => {
  return (
    <Card style={{ width: "10rem" }}>
      <Card.Img variant="top" src={data.set_img_url} />
      <Card.Body>
        <Card.Text>.</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default SingleSet;
