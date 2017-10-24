import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

import InfoForm from './form';


class Heading extends Component {
  render() {
    return (
      <Jumbotron className="heading">
        <h1 bsClass="title">Bitwise</h1>
        <p> {'We are a software engineering camp built for high school students. We strive to build tomorrows bright, young engineers today -- bit by bit.'}</p>
        <InfoForm />
      </Jumbotron>
    );
  }
}

export default Heading;
