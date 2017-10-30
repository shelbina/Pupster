import React from 'react';

const Navbar = () => 
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <img src="http://www.allthingsclipart.com/images_01/chihuahua02.jpg" alt="pup" height="42" width="42"></img>
                <a className="navbar-brand" href="/">Pupster</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li><a href="/search">Search</a></li>
                    <li><a href="/discover">Discover</a></li>
                </ul>
            </div>
        </div>
    </nav>

export default Navbar;