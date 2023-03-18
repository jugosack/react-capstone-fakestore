import React from 'react';
import { NavLink } from 'react-router-dom';
import mic from '../images/mic.png';
import setting from '../images/setting.png';
import '../App.css';

const Header = () => (
  <div className="ui fixed menu">
    <div className="ui container center">
      <div className="back-btn">
        <NavLink to="/">
          <img alt="Back button" src="https://img.icons8.com/ios-glyphs/30/ffffff/circled-left-2.png" />
        </NavLink>
      </div>
      <div className="headername">
        <h2 className="headerFake">FakeShop</h2>
      </div>
      <div className="position" aria-hidden="true">
        <img className="mic" src={mic} alt="mic" />
        <img className="setting" src={setting} alt="setting" />
      </div>
    </div>
  </div>
);

export default Header;
