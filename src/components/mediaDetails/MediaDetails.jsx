import { Col, Container, Row, Image, Button } from "react-bootstrap"

import "./styles.scss"

function MediaDetails({ mediaObj, onHide }) {
  return (
    <Container className="media-details" fluid>
      <Row>
        <Col xs={6} md={7} xl={8}>
          <div className="content-container">
            <h2 className="d-inline-block mr-3">{mediaObj.Title}</h2>
            <p className="d-inline-block">{mediaObj.Year}</p>
            {mediaObj.Plot && <p>{mediaObj.Plot}</p>}
            <Button className="d-block" variant="dark" onClick={() => onHide()}>
              Hide
            </Button>
          </div>
        </Col>
        <Col xs={6} md={5} xl={4}>
          <Image src={mediaObj.Poster} className="w-100" />
        </Col>
      </Row>
    </Container>
  )
}

export default MediaDetails
