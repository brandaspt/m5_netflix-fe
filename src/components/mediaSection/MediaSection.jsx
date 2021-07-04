import { useState } from "react"
import { Container } from "react-bootstrap"

import MediaCarousel from "../mediaCarousel/MediaCarousel"
import MediaDetails from "../mediaDetails/MediaDetails"

import "./styles.scss"

function MediaSection(props) {
  const [selectedMedia, setSelectedMedia] = useState(null)

  const handleSelectMedia = mediaObj => {
    setSelectedMedia(mediaObj)
  }

  return (
    <Container className="media-section" fluid>
      <h5>{props.type !== "series" ? `${props.type}s` : props.type}</h5>
      <MediaCarousel type={props.type} onSelectMedia={handleSelectMedia} />
      {selectedMedia && <MediaDetails mediaObj={selectedMedia} onHide={() => setSelectedMedia(null)} />}
    </Container>
  )
}

export default MediaSection
