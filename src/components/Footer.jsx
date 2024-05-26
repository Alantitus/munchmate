import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-zinc-900 py-5 text-white mt-5">
      <div className="container container-fluid mt-5 w-100 ">
        <div className="d-lg-flex justify-content-between">
          <div className="intro ">
            <h5 className="py-2 text-orange-500">
            <i class="fa-solid fa-plate-wheat"></i> MunchMate
            </h5>
            <p>
              Lorem ipsum dolor sit,
              <br /> amet consectetur adipisicing elit. <br /> Inventore soluta
              nulla hic quibusdam ipsa.
            </p>
            <p>Code Licensed Ruchi, docs CC by 6.0</p>
            <p>Currently v4.3.2.</p>
          </div>
          <div className="links d-flex flex-column">
            <h5 className="py-2 text-orange-500">Links</h5>
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}> Home</Link>
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}> Cart</Link>
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}> Offers</Link>

          </div>
          <div className="Guides d-flex flex-column">
            <h5 className="py-2  text-orange-500">Guides</h5>
            <a style={{ textDecoration: "none", color: "white" }} target="_blank">React</a>
            <a style={{ textDecoration: "none", color: "white" }} target="_blank">Redux</a>
            <a style={{ textDecoration: "none", color: "white" }} target="_blank">Bootstrap</a>
          </div>
          <div className="Contact d-flex flex-column">
            <h5 className="py-2  text-orange-500">Contact Us</h5>
            <div className="d-flex">
              <input
                type="text"
                placeholder="Email id Please"
                className="form-control"
              />
              <button className="btn btn-danger ms-2">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className="icons d-flex justify-content-between mt-3">
              <a
                href=""
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href=""
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href=""
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href=""
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href=""
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href=""
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
              >
                <i className="fa-solid fa-phone"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center p-4">
          <p>Copyright © 2024 MunchMate.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;