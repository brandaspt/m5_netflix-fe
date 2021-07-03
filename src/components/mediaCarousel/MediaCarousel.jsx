import { Container, Carousel, Row, Col } from "react-bootstrap"

import "./styles.scss"

const MediaCarousel = () => {
  return (
    <Carousel className="media-carousel" indicators={false}>
      <Carousel.Item>
        <Row>
          <Col md={3} className="px-1">
            <img className="d-block w-100" src="https://via.placeholder.com/800x400.png" alt="First slide" />
          </Col>
          <Col md={3} className="px-1">
            <img className="d-block w-100" src="https://via.placeholder.com/800x400.png" alt="First slide" />
          </Col>
          <Col md={3} className="px-1">
            <img className="d-block w-100" src="https://via.placeholder.com/800x400.png" alt="First slide" />
          </Col>
          <Col md={3} className="px-1">
            <img className="d-block w-100" src="https://via.placeholder.com/800x400.png" alt="First slide" />
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row>
          <Col md={3}>
            <img className="d-block w-100" src="https://via.placeholder.com/800x400.png" alt="First slide" />
          </Col>
          <Col md={3}>
            <img className="d-block w-100" src="https://via.placeholder.com/800x400.png" alt="First slide" />
          </Col>
          <Col md={3}>
            <img className="d-block w-100" src="https://via.placeholder.com/800x400.png" alt="First slide" />
          </Col>
          <Col md={3}>
            <img className="d-block w-100" src="https://via.placeholder.com/800x400.png" alt="First slide" />
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row>
          <Col md={3}>
            <img className="d-block w-100" src="https://via.placeholder.com/800x400.png" alt="First slide" />
          </Col>
          <Col md={3}>
            <img className="d-block w-100" src="https://via.placeholder.com/800x400.png" alt="First slide" />
          </Col>
          <Col md={3}>
            <img className="d-block w-100" src="https://via.placeholder.com/800x400.png" alt="First slide" />
          </Col>
          <Col md={3}>
            <img className="d-block w-100" src="https://via.placeholder.com/800x400.png" alt="First slide" />
          </Col>
        </Row>
      </Carousel.Item>
    </Carousel>
  )
}

export default MediaCarousel
