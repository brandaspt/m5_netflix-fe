import { Navbar, Nav, Dropdown, Form, FormControl } from "react-bootstrap"
import { Link, withRouter } from "react-router-dom"
import NavLogo from "../../assets/logoNav.png"
import Avatar from "../../assets/avatar.jpeg"
import "./styles.scss"

import React from "react"

const NavBar = props => {
  const { location, history } = props

  return (
    <Navbar variant="dark" expand="lg">
      <Link to="/" className="nav-link p-0">
        <Navbar.Brand>
          <img alt="" src={NavLogo} width="80" className="d-inline-block align-top" />
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
            Home
          </Link>
          <Link to="/series" className={location.pathname === "/series" ? "nav-link active" : "nav-link"}>
            Series
          </Link>
          <Link to="/movies" className={location.pathname === "/movies" ? "nav-link active" : "nav-link"}>
            Movies
          </Link>
          <Link to="/recent" className={location.pathname === "/recent" ? "nav-link active" : "nav-link"}>
            Recently Added
          </Link>
        </Nav>
        <div className="d-flex align-items-center justify-content-center">
          <Form inline>
            <button type="submit">
              <i className="fas fa-search mr-2"></i>
            </button>
            <FormControl
              id="search-input"
              size="sm"
              type="text"
              placeholder="Search"
              onChange={e => {
                const params = new URLSearchParams(decodeURI(location.search))
                params.set("q", encodeURI(e.currentTarget.value))
                history.push(`/search/?${params.toString()}`)
              }}
            />
          </Form>
          <p className="my-0 mx-3 text-white"> KIDS</p>
          <i className="mr-3 fas fa-bell"></i>
          <Dropdown>
            <Dropdown.Toggle className="text-white p-0" as="button">
              <img src={Avatar} width="30px" alt="avatar" />
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark" align="right">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default withRouter(NavBar)
