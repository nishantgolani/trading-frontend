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
                <h1 id="header-contain-name">Arjuneye </h1>
                <br />
                <h1 id="header-contain">Innovative approach</h1>
                <br />
                <h1 id="header-contain-name">to trading</h1>
                <br />
                <br />
                <p className="company-info">
                  Explore our curated trove of trading wisdom at Arjuneye, where seasoned tips meet the pulse of the market, guiding you towards informed and profitable decisions.
                </p>
                <br />
                <button className="btn" id="access-btn">
                  <a className="btn" href="/Contact">
                    Contact us
                  </a>
                </button>
              </div>
              <div className="col-xl-3" id="desktop-img" >
                <img
                  src={desktopImage}
                  className="desktop-img"
                  alt=""
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
      </div >
    </>

  )
}
