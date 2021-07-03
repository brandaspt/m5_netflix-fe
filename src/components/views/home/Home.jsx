import CategoryBar from "../../categoryBar/CategoryBar"
import MediaCarousel from "../../mediaCarousel/MediaCarousel"

const Home = props => {
  return (
    <div>
      <CategoryBar title="Browse" />
      <MediaCarousel />
    </div>
  )
}

export default Home
