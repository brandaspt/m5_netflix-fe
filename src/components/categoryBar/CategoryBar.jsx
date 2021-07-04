import { Container, Dropdown } from "react-bootstrap"
import "./styles.scss"

const genres = ["Action", "Comedy", "Documentary", "Horror", "Scifi", "Drama"]

const CategoryBar = props => {
  const { title } = props
  return (
    <Container className="category-bar d-flex justify-content-between align-items-center" fluid>
      <div className="d-flex justify-content-start align-items-baseline py-3">
        <h3 className="section-title text-white mr-5 my-0">{title}</h3>
        {props.title !== "All" && (
          <Dropdown>
            <Dropdown.Toggle className="p-1" as="div" id="dropdown-basic">
              Genre
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark" align="left">
              {genres.map(genre => (
                <Dropdown.Item key={genre}>{genre}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        )}
      </div>
      <div className="d-flex ml-auto right-icons">
        <i className="px-3 py-2 fas fa-align-left"></i>
        <i className="px-3 py-2 fas fa-th-large"></i>
      </div>
    </Container>
  )
}
export default CategoryBar
