import React, { useState } from 'react';
import Login from './Login';
import Home from './Home';

function Footer() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showHome, setShowHome] = useState(false);

  const handleLoginClick = () => {
    setShowLoginModal(true);
    setShowHome(false);
  };

  const handleHomeClick = () => {
    setShowHome(true);
    setShowLoginModal(false);
  };

  const handleModalClose = () => {
    setShowLoginModal(false);
  };

  return (  
    <footer class="fixed-bottom">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" />
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
          <a class="navbar-brand" href="#">React Activity</a>
          <label class="navbar-toggler" type="label" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </label>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                  <a class="nav-link" href="#Home" onClick={handleHomeClick} >Home</a>
                  </li>
                  <li class="nav-item">
                  <a class="nav-link" href="#about" >About</a>
                  </li>
                  <li class="nav-item">
                  <a class="nav-link" href="#Login" onClick={handleLoginClick} >Login</a>
                  </li>
              </ul>
            </div>
      </div>
      </nav>
      {showLoginModal && (
        <div className="Login">
          <div className="modal-content">
            <span className="close" onClick={handleModalClose}>&times;</span>
            <Login />
          </div>
        </div>
      )}
      {showHome && (
        <div className="Home">
          <Home />
        </div>
      )}
    </footer>
  );
}

export default Footer;