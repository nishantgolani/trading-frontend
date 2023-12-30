import React from 'react'
import "./home.css"
import desktopImage from './desktop-img.jpg';

export default function home() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossOrigin="anonymous"
  />
  <div className="container-fuild">
    <div className="container-fluid">
      <div className="container" id="main-container">
        <div className="row">
          <div className="col-xl-6">
            <h1 id="header-contain-name">ArjunEye solutions &amp;</h1>
            <br />
            <h1 id="header-contain">Innovative approach</h1>
            <br />
            <h1 id="header-contain-name">to trading</h1>
            <br />
            <p className="company-info">
              Stay on top of the market with our innovating technology,
              extensive product access, personailzed eduction, and award-winning
              service.
            </p>
            <br />
            <button className="btn" id="access-btn">
              <a className="btn" href="/login">
                Contact us
              </a>
            </button>
          </div>
          <div className="col-xl-3" id="desktop-img" >
            <img
              src={desktopImage}
              className="desktop-img"
            />
          </div>
        </div>
      </div>
      {/* <div class="container" >
    <div class="row">
      <div class="col-sm-2" id="stock-info">
        <p class = "stock-country">BTC/INR </p>
        <p class="stock-price">10000000</p>
      </div>
      <div class="col-sm-2" id="stock-info">
        <p class = "stock-country">BTC/INR </p>
        <p class="stock-price">10000000</p>
      </div>
      <div class="col-sm-2" id="stock-info">
        <p class = "stock-country">BTC/INR </p>
        <p class="stock-price">10000000</p>
      </div>
      <div class="col-sm-2" id="stock-info">
        <p class = "stock-country">BTC/INR </p>
        <p class="stock-price">10000000</p>
      </div>
      <div class="col-sm-2" id="stock-info">
        <p class = "stock-country">BTC/INR </p>
        <p class="stock-price">10000000</p>
      </div>
      <div class="col-sm-2" id="stock-info">
        <p class = "stock-country">BTC/INR </p>
        <p class="stock-price">10000000</p>
      </div>
    </div>

  </div> */}
    </div>
  </div>
</>

  )
}
