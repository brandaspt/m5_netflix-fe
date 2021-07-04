import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import backend from "../../backend/backend"

import "./styles.scss"

const AddReview = ({ onAddComment, imdbID }) => {
  const [review, setReview] = useState({
    author: "",
    rate: 1,
    comment: "",
  })
  const submitForm = async e => {
    e.preventDefault()
    await backend.post(`/reviews/${imdbID}`, review)
    setReview({
      author: "",
      rate: 1,
      comment: "",
    })
    onAddComment()
  }
  return (
    <div className="add-review-container">
      <h5 className="text-white mt-3">Add review</h5>
      <Form onSubmit={e => submitForm(e)}>
        <div className="d-flex justify-content-between mb-3">
          <Form.Group>
            <Form.Control
              type="text"
              required
              placeholder="Your name..."
              value={review.author}
              onChange={e => setReview({ ...review, author: e.currentTarget.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control value={review.rate} as="select" onChange={e => setReview({ ...review, rate: e.currentTarget.value })}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit" className="btn-sm">
            Submit
          </Button>
        </div>
        <Form.Group>
          <Form.Control
            required
            className="comment-area"
            as="textarea"
            rows={3}
            value={review.comment}
            onChange={e => setReview({ ...review, comment: e.currentTarget.value })}
          />
        </Form.Group>
      </Form>
    </div>
  )
}
export default AddReview
