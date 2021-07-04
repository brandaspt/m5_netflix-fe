import { Col, Container, Row, Image, Button } from "react-bootstrap"
import Reviews from "../reviews/Reviews"

import "./styles.scss"

function MediaDetails({ mediaObj, onHide }) {
  return (
    <Container className="media-details" fluid>
      <Row>
        <Col xs={6} md={7} xl={8}>
          <div className="content-container">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="top-text">
                <h2 className="d-inline-block mr-3 mb-0">{mediaObj.Title}</h2>
                <p className="d-inline-block mb-0">{mediaObj.Year}</p>
              </div>
              <Button className="d-block" variant="dark" onClick={() => onHide()}>
                <i className="fas fa-times"></i>
              </Button>
            </div>
            {mediaObj.Plot && <p>{mediaObj.Plot}</p>}
          </div>
          <Reviews imdbID={mediaObj.imdbID} />
        </Col>
        <Col xs={6} md={5} xl={4}>
          <Image src={mediaObj.Poster} className="w-100" />
        </Col>
      </Row>
    </Container>
  )
}

export default MediaDetails
