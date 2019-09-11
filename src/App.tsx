import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import { Router, Link, RouteComponentProps } from '@reach/router';

const Home: FunctionComponent<RouteComponentProps> = () => (
  <div>
    Home <br />
    <Link to="/about">About</Link>
  </div>
);

const About: FunctionComponent<RouteComponentProps> = () => (
  <div>
    About <br />
    <Link to="/">Home</Link>
  </div>
);

const App = () => {
  return (
    <Router>
      <Home path="/" />
      <About path="/about" />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
