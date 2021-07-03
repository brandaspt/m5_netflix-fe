import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./styles.scss"

import NavBar from "./components/navbar/NavBar"
import Home from "./components/views/home/Home"

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/series">{/* <Series /> */}</Route>
          <Route path="/movies">{/* <Movies /> */}</Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
