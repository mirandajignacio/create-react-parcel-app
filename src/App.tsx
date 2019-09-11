import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import { Router, Link, RouteComponentProps } from '@reach/router';
import styled from 'styled-components';

const Container = styled.div``;

const Home: FunctionComponent<RouteComponentProps> = () => (
  <Container>
    Home <br />
    <Link to="/about">About</Link>
  </Container>
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
