import React, { Component } from 'react';
import Title from './Title';

export default class Contact extends Component {
  render() {
    const { data } = this.props;
    return (
        <div className="contact">          
          <Title title={data.title} />
          Tel: { data.phone } <br />
          Email: <a href={"mailto:" + data.email }>{data.email}</a>
        </div>
    );
  }
}