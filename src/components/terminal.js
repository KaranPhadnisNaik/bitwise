import React, { Component } from 'react';

class Terminal extends Component {
  render() {
    return (
      <div className="terminal">
        <div className="fakeMenu">
          <div className="fakeButtons fakeClose"></div>
          <div className="fakeButtons fakeMinimize"></div>
          <div className="fakeButtons fakeZoom"></div>
        </div>
        <div className="fakeScreen">
          <p className="line line1">$ ssh me@bitwise -p 8080<span className="cursor cursor1">#</span></p>
          <p className="line line1a">Connecting to bitwise... <span className="cursor cursor1a"></span></p>
          <p className="line line2">$ chmod u+x mySuccess<span className="cursor cursor2">#</span></p>
          <p className="line line3">$ ./mySucess<span className="cursor cursor3">#</span></p>
          <p className="line line4">Building your success...<span className="cursor cursor4"></span></p>
        </div>
      </div>
    );
  }
}

export default Terminal;
