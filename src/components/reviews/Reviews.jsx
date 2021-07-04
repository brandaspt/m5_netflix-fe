import { useEffect, useState } from "react"
import backend from "../../backend/backend"

function Reviews({ imdbID }) {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const fetchReviews = async () => {
      const { data } = backend.get(`/reviews/${imdbID}`)
      setReviews(data)
    }
    fetchReviews()
  }, [imdbID])

  return (
    <div className="reviews-container">
      <h4>Reviews</h4>
    </div>
  )
}

export default Reviews
