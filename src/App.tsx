import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import { Router, Link, RouteComponentProps } from '@reach/router';

import {
  useCountUpdater,
  useCountState,
  CountProvider
} from './context/AppContext';

const Home: FunctionComponent<RouteComponentProps> = () => {
  const count = useCountState();
  const increment = useCountUpdater();
  return (
    <div>
      Home <br />
      {count} <br></br>
      <button
        onClick={() => {
          increment();
        }}
      >
        +1
      </button>
      <Link to="/about">About</Link>
    </div>
  );
};

const About: FunctionComponent<RouteComponentProps> = () => (
  <div>
    About <br></br>
    <Link to="/">Home</Link>
  </div>
);

const App = () => {
  return (
    <CountProvider>
      <Router>
        <Home path="/" />
        <About path="/about" />
      </Router>
    </CountProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
