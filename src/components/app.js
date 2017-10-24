import React, { Component } from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';

import NavbarInstance from './nav';
import Heading from './heading';
import Terminal from './terminal';

export default class App extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col md={6}>
              <Heading />
            </Col>
            <Col md={1}> </Col>
            <Col md={4}>
              <Terminal />
            </Col>
            <Col md={1}> </Col>
          </Row>
        </Grid>
        <Row className="text-center footer">
          <footer>
            <div>
              Made with &#10084; in San Francisco by{' '}
              <a href="https://github.com/danishmughal">@danishmughal</a> and{' '}
              <a href="https://github.com/KaranPhadnisNaik">@karanphadnisnaik</a>.
            </div>
          </footer>
        </Row>
      </div>
    );
  }
}
