import React, { Component } from 'react';
import Button from './styleComponents/Button';

export default class Download extends Component {
  render() {
    const { link, name } = this.props;
    return(
      <Button>
        <a href={link} rel="noopener noreferrer" target="_blank">{name}</a>
      </Button>
    );
  }
}