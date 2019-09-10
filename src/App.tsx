import React, {FunctionComponent} from 'react'
import ReactDOM from 'react-dom'
import { Router, Link, RouteComponentProps } from "@reach/router"


const Home: FunctionComponent<RouteComponentProps> = () => <div>Home <br></br>
  <Link to="/about">About</Link>
</div>

const About: FunctionComponent<RouteComponentProps> = () => <div>About <br></br>
  <Link to="/">Home</Link>
</div>

const App:FunctionComponent = () => 
  <Router>
    <Home path="/" />
    <About path="/about" />
  </Router>


ReactDOM.render(<App />, document.getElementById('root'));