import React, { Component } from "react";
import { Link } from "react-router-dom";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-default navbar-static-top"
          role="navigation"
        >
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            />
            <a className="navbar-brand" href="index.html">
              Handallo
            </a>
          </div>

          <ul className="nav navbar-top-links navbar-right">
            <li className="dropdown"> </li>

            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                <i className="fa fa-user fa-fw" />{" "}
                <i className="fa fa-caret-down" />
              </a>
              <ul className="dropdown-menu dropdown-user">
                <li>
                  <a href="#">
                    <i className="fa fa-user fa-fw" /> User Profile
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-gear fa-fw" /> Settings
                  </a>
                </li>
                <li className="divider" />
                <li>
                  <a href="login.html">
                    <i className="fa fa-sign-out fa-fw" /> Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <nav />

          <div className="navbar-default sidebar" role="navigation">
            <div className="sidebar-nav navbar-collapse">
              <ul className="nav" id="side-menu" />
              <li className="sidebar-search">
                <div className="input-group custom-search-form">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />

                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">
                      <i className="fa fa-search" />
                    </button>
                  </span>
                </div>
              </li>
              <li>
                <a href="index.html">
                  <i className="fa fa-dashboard fa-fw" /> Orders
                </a>
              </li>
              <br />
              <li>
                <a href="#">
                  <i className="fa fa-bar-chart-o fa-fw" /> Payments
                </a>
              </li>
              <br />
              <li>
                <a href="#">
                  <Link
                    className="fa fa-bar-chart-o fa-fw"
                    to="/AdminPanel/Promotions"
                  />{" "}
                  Promotions
                </a>
              </li>
              <br />
              <li>
                <a href="#">
                  <i className="fa fa-bar-chart-o fa-fw" />
                  xxxxxxx
                </a>
              </li>
              <br />
              <li>
                <a href="#">
                  <i className="fa fa-wrench fa-fw" /> UI Elements
                </a>
              </li>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
