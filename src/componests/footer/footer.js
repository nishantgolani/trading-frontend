import React from 'react'
import './footer.css'
export default function Footer() {
  return (
    <>
      <footer className="main-footer">
        
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 column">
                <div className="copyright">
                  <a href="/">Arjun eye</a> © 2024 All Right Reserved
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 column">
                <ul className="footer-nav">
                  <li>
                    <a href="/">Terms of Service</a>
                  </li>
                  <li>
                    <a href="/">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
