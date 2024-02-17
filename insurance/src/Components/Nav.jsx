import React from "react";
import life from "../assets/images/LIFE-INSURANCE.png";
import car from "../assets/images/Car-Insurance1.jpg";
import bike from "../assets/images/bike-insurance-plan.jpg";
import logo from "../assets/images/logo.jpg";

function Nav() {
  return (
    <div>
      {/* Nav */}

      
      <nav
          className="navbar navbar-expand-lg navbar-light justify-content-between d-flex "
          id="home"
        >
          <div className="container-fluid ">
          <div className="d-flex">
            <img src={logo} className="img-fluid logo" alt="" />
            <h3 class="nav-item g-0">Insurance Policy</h3>
          </div>
            {/* <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button> */}
            <div
              className="collapse navbar-collapse" 
              id="navbarSupportedContent"
            >
              <ul class="nav  ">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Term Insurance
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Investment Plans
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Health Insurance Plans
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Renew Policy
              </a>
            </li>
          </ul>
            </div>
          </div>
        </nav>
      {/* Banner */}
      <section className="herobanner banner" id="home">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={life}
                className="d-block  imgsz img-fluid"
                alt="Slide 1"
              />
            </div>
            <div className="carousel-item">
              <img
                src={bike}
                className="d-block imgsz img-fluid"
                alt="Slide 2"
              />
            </div>
            <div className="carousel-item">
              <img
                src={car}
                className="d-block imgsz img-fluid "
                alt="Slide 3"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Nav;
