import { useEffect, useState } from "react"
import { Image } from "react-bootstrap"

import backend from "../../backend/backend"

import "./styles.scss"

const MediaCarousel = ({ type, onSelectMedia }) => {
  const [media, setMedia] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await backend.get(`/media/?type=${type}`)
      setMedia(data)
    }
    fetchData()
  }, [type])

  return (
    <div className="media-row">
      {media.map(item => (
        <div className="item-container" key={item.imdbID}>
          <Image src={item.Poster} />
          <div className="arrow-container" onClick={() => onSelectMedia(item)}>
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MediaCarousel
