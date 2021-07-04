import { useState } from "react"

import MediaCarousel from "../mediaCarousel/MediaCarousel"
import MediaDetails from "../mediaDetails/MediaDetails"

import "./styles.scss"

function MediaSection(props) {
  const [selectedMedia, setSelectedMedia] = useState(null)

  const handleSelectMedia = mediaObj => {
    setSelectedMedia(mediaObj)
  }

  return (
    <div className="media-section">
      <h4>{props.type !== "series" ? `${props.type}s` : props.type}</h4>
      <MediaCarousel type={props.type} onSelectMedia={handleSelectMedia} />
      {selectedMedia && <MediaDetails mediaObj={selectedMedia} onHide={() => setSelectedMedia(null)} />}
    </div>
  )
}

export default MediaSection
