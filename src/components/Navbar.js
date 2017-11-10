import React from 'react';

const Navbar = () => 

<nav className="navbar navbar-expand-lg navbar-light bg-light border-info">
    <img src="http://www.allthingsclipart.com/images_01/chihuahua02.jpg" alt="pup" height="42" width="42"></img>
  <a className="navbar-brand text-info" href="/">Pupster</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor03">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">About<span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/search">Search</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/discover">Discover</a>
      </li>
    </ul>
  </div>
</nav>

export default Navbar;