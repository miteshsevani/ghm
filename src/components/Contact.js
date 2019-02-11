import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    const { data } = this.props;
    return (
        <div className="contact">
          { data.address }<br />
          { data.phone }<br />
          <a href={"mailto:" + data.email }>{ data.email }</a>
        </div>
    );
  }
}