import { useEffect, useState, useRef } from "react"
import { Image } from "react-bootstrap"

import backend from "../../backend/backend"

import "./styles.scss"

const MediaCarousel = ({ type, onSelectMedia }) => {
  const [media, setMedia] = useState([])
  const mediaRowRef = useRef()

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await backend.get(`/media/?type=${type}`)
      setMedia(data)
    }
    fetchData()
  }, [type])

  const handleScroll = amount => {
    mediaRowRef.current.scrollLeft += (amount / 100) * mediaRowRef.current.offsetWidth
  }

  return (
    <div className="media-row-container">
      <div className="media-row" ref={mediaRowRef}>
        {media.map(item => (
          <div className="item-container" key={item.imdbID}>
            <Image src={item.Poster} />
            <div className="arrow-container" onClick={() => onSelectMedia(item)}>
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
        ))}
      </div>
      <div className="left-arrow" onClick={() => handleScroll(-50)}>
        <i className="fas fa-chevron-left"></i>
      </div>
      <div className="right-arrow" onClick={() => handleScroll(50)}>
        <i className="fas fa-chevron-right"></i>
      </div>
    </div>
  )
}

export default MediaCarousel
