import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={require('../../img/udg.svg')} className="webLogo" />
        <div className="userInfo">
          <img src={require('../../img/abstract-user-flat-3.svg')} className="userIcon" />
          <div className="userName">USEEEER</div>
        </div>
      </div>
    );
  }
}


