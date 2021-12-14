import { useEffect, useState } from "react";
import { Col, Container, Row, ListGroup, Spinner } from "react-bootstrap";
import { AiOutlineHeart, AiFillHeart, AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toggleFav } from "../../redux/action";
import "./home.css";

const SetDetail = ({ match, history }) => {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(false);

  const like = useSelector((state) => state.fav.liked);
  const dispatch = useDispatch();

  useEffect(() => {
    const getSetsDetail = async () => {
      const { id } = match.params;
      const idArr = Array.from(id);
      const fig = idArr[0] + idArr[1] + idArr[2];
      const url =
        fig === "fig"
          ? `${process.env.REACT_APP_URL}/minifigs/${id}`
          : `${process.env.REACT_APP_URL}/sets/${id}`;

      try {
        setLoading(true);
        const response = await fetch(url, {
          headers: {
            Authorization: `Key ${process.env.REACT_APP_KEY}`,
          },
        });
        if (response.ok) {
          setLoading(false);
          const res = await response.json();
          console.log("detail", res);
          setDetail(res);
        } else {
          setLoading(false);
          setErrors(true);
        }
      } catch (error) {
        setLoading(false);
        setErrors(true);
        console.log(error);
      }
    };
    getSetsDetail();
  }, []);
  console.log("det", like);
  return (
    <Container className="my-5">
      <Row>
        {errors && (
          <ListGroup className="mt-3 mb-5 mx-5">
            <ListGroup.Item variant="danger">
              <strong>
                Something has gone wrong please come back again later
              </strong>
            </ListGroup.Item>
          </ListGroup>
        )}
        <Col sm={8} className="d-flex flex-column">
          {loading && <Spinner animation="grow" className="mx-auto mb-5" />}
          <img src={detail?.set_img_url} alt="" />
          <div className="bg-warning">
            {!like.includes(detail) ? (
              <AiOutlineHeart
                className="heart"
                onClick={() => dispatch(toggleFav(detail))}
              />
            ) : (
              <AiFillHeart
                className="heart"
                onClick={() => dispatch(toggleFav(detail))}
              />
            )}
          </div>
          <div
            className="bg-success mt-2"
            onClick={() => history.push("/favourite")}
          >
            <AiFillStar /> <strong>My Favourite Sets</strong>
          </div>
        </Col>
        <Col sm={4} className="bg-light mt-1">
          <small>Login to hide the ads</small>
          <h3>{detail?.set_num}</h3>
          <ListGroup variant="flush">
            <ListGroup.Item className="d-flex justify-content-between">
              <span>Name</span>
              <span>{detail?.name}</span>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between">
              <span>Released</span>
              <span>{detail?.year}</span>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between">
              <span>Inventory</span>
              <span>{detail?.num_parts} parts</span>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between">
              <span>Theme</span>
              <span>BrickLink</span>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between">
              <span>Reviews</span>
              <span>Brickset</span>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between ">
              <span>Catalog</span>
              <span>BrickOwl</span>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between ">
              <span>Investing</span>
              <span>Brick Picker</span>
            </ListGroup.Item>
          </ListGroup>
          <h3 className="mt-5">Buy this LEGO Set</h3>
        </Col>
      </Row>
    </Container>
  );
};
export default SetDetail;
