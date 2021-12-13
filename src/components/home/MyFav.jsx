import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import SingleSet from "./SingleSet";

const MyFav = () => {
  const like = useSelector((state) => state.fav.liked);

  console.log("myF", like);
  return (
    <Container>
      <Row>
        <h2>Your favourite sets </h2>
      </Row>
      <Row className="my-5" sm={2} md={4}>
        {like.length > 0 ? (
          like.map((data) => <SingleSet key={data.set_num} data={data} />)
        ) : (
          <small>You do not have any favourites yet.</small>
        )}
      </Row>
    </Container>
  );
};
export default MyFav;
