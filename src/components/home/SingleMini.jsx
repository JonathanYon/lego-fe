import { Card } from "react-bootstrap";

const SingleMini = ({ minifig }) => {
  return <Card.Img variant="top" src={minifig.set_img_url} />;
};
export default SingleMini;
