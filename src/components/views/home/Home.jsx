import CategoryBar from "../../categoryBar/CategoryBar"
import MediaSection from "../../mediaSection/MediaSection"

const Home = props => {
  return (
    <div>
      <CategoryBar title="All" />
      <MediaSection type="movie" />
      <MediaSection type="series" />
    </div>
  )
}

export default Home
