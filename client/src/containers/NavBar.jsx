import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../store/actions';

const Navbar = ({ auth, logout }) => (
  <nav className="navbar">
    <div className="container">
      <ul className="navbar-container">
        <li>
          <Link className="navbar-brand" to="/">
            Voting app
          </Link>
        </li>
        {!auth.isAuthenticated && (
          <Fragment>
            <li>
              <Link className="navbar-item" to="/register">
                Register
              </Link>
            </li>
            <li>
              <Link className="navbar-in" to="/login">
                Login
              </Link>
            </li>
          </Fragment>
        )}
        {auth.isAuthenticated && (
          <Fragment>
            <li>
              <Link className="navbar-item" to="/poll/new">
                Create New Voting
              </Link>
            </li>

            <li>
              <a className="navbar-item" onClick={logout}>
                {auth.isAuthenticated && `Logged in as ${auth.user.username} `}{' '}
                |{` `} <span className="navbar-out">Logout</span>
              </a>
            </li>
          </Fragment>
        )}
      </ul>
    </div>
  </nav>
);

export default connect(
  store => ({
    auth: store.auth,
  }),
  { logout },
)(Navbar);
