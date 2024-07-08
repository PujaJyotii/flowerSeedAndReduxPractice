import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import classes from "./Detail.module.css";

function Detail(props) {
  const { id } = useParams();
  const flowerData = props.flower.find((item) => item.id === parseInt(id));
  console.log(flowerData);
  const { name, extraImages, price, description, reviews, color } = flowerData;
  if (!flowerData) {
    return <div>Flower not found</div>;
  }
  return (
    <Container>
      <Row>
        <Col md={6}>
          <Carousel className={classes.deco}>
            {extraImages.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image}
                  alt={`Slide ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col md={6}>
          <Card className={classes.card}>
            <Card.Body>
              <h2>{name}</h2>
              <p>
                <strong>Color:</strong> {color}
              </p>
              <p>
                <strong>Price:</strong> ${price}
              </p>
              <p>
                <strong>Description:</strong> {description}
              </p>
              <h4>Reviews:</h4>
              {reviews.length > 0 ? (
                <ul>
                  {reviews.map((review, index) => (
                    <li key={index}>{review}</li>
                  ))}
                </ul>
              ) : (
                <p>No reviews yet.</p>
              )}
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Detail;
