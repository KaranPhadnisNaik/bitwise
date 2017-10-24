import React, { Component } from 'react';

class InfoForm extends Component {
  render() {
    return (
      <form id="signup-form" method="post" action="#">
        <input type="email" name="email" id="email" placeholder="Email Address" />
        <input type="submit" value="Learn More" />
      </form>
    );
  }
}

export default InfoForm;
