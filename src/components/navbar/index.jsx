import React from "react";
import "./style.css";

function Navbar() {
  return (
    <>
    <div className="position-t">
      <nav className="navbar">
        <>
          <img
            class="olx-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/4/42/OLX_New_Logo.png"
            alt="olx-logo"
          />
        </>

        <div class="car-logo ">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/025/305/916/small/white-sport-car-on-transparent-background-3d-rendering-illustration-free-png.png"
            alt="car-logo"
          />
          <strong className="hover-col">Motors</strong>
        </div>

        <div class="house-logo ">
          <img
            src="https://www.olx.com.pk/assets/iconProperty.d09c6d2e3621f900c17c9e8330a1a37b.png"
            alt="house-logo"
          />
          <strong className="mg-b hover-col">Property</strong>
        </div>
        <button class="login-btn link-style-button">
          <strong>LogIn</strong>
        </button>
        <button class="sell-btn" type="button">
          SELL
        </button>
      </nav>
      <nav class="second-navbar">
        <div>
          <span className="select_bar">
            <select
              className="locations"
              name="country"
              id="select_bar"
            >
              <option>Pakistan</option>
              <option>Karachi, Sindh</option>
              <option>Lahore, Punjab</option>
              <option>Islamabad, Pakistan</option>
              <option>Peshawar, KPK</option>
              <option>China</option>
              <option>UAE</option>
            </select>
          </span>
        </div>
        <div>
          <input
            type="text"
            list="search"
            placeholder="Find Cars,Mobile Phones and more..."
          />
          <button class="search-btn" type="button">
            search
          </button>
        </div>
      </nav>
      </div>
      <div class="top-nav">
        <select class="categories" name="country" id="select_bar">
            <option class="strong-col">All Categories</option>
          <option>Pakistan</option>
          <option>China</option>
          <option>UAE</option>
        </select>
        <button className="link-style-button">Mobile Phones</button>
        <button className="link-style-button">Cars</button>
        <button className="link-style-button">Motorcycles</button>
        <button className="link-style-button">House</button>
        <button className="link-style-button">Video-Audios</button>
        <button className="link-style-button">Tables</button>
        <button className="link-style-button">Land & Plots</button>
      </div>


      <header>
        <div class="baner">
          <img
            class="baner-one"
            src="https://images.olx.com.pk/thumbnails/588513246-800x600.webp"
            alt="baner"
          />
          <img
            class="baner-two"
            src="https://images.olx.com.pk/thumbnails/536795891-800x600.webp"
            alt="baner"
          />
        </div>
      </header>
    </>
  );
}

export default Navbar;
