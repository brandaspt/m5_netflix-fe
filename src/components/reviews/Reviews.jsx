import { useEffect, useState } from "react"
import { Badge } from "react-bootstrap"

import AddReview from "../addReview/AddReview"

import backend from "../../backend/backend"
import "./styles.scss"
import { useCallback } from "react"

function Reviews({ imdbID }) {
  const [reviews, setReviews] = useState([])

  const fetchReviews = useCallback(async () => {
    const { data } = await backend.get(`/reviews/${imdbID}`)
    setReviews(data)
  }, [imdbID])
  useEffect(() => {
    fetchReviews()
  }, [fetchReviews])
  return (
    <div className="reviews-container">
      <h4>Reviews</h4>
      <div className="reviews">
        {reviews.length ? (
          reviews
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .map(review => (
              <div key={review._id}>
                <div className="d-flex align-items-end">
                  <div className="stars">{buildRating(review.rate)}</div>
                  <p className="m-0 text-white">by {review.author}</p>
                  <p className="mb-0 ml-3 date">{new Date(review.createdAt).toDateString()}</p>
                </div>
                <p>{review.comment}</p>
              </div>
            ))
        ) : (
          <h5>No comments yet</h5>
        )}
      </div>
      <AddReview imdbID={imdbID} onAddComment={fetchReviews} />
    </div>
  )
}

const buildRating = score => {
  const stars = []
  for (let i = 0; i < 5; i++) {
    if (i < score)
      stars.push(
        <Badge key={i}>
          <i className="fas fa-star"></i>
        </Badge>
      )
    else
      stars.push(
        <Badge key={i}>
          <i className="far fa-star"></i>
        </Badge>
      )
  }
  return stars
}

export default Reviews
