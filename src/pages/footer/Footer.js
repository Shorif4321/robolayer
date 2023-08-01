import React from "react";
import './Footer.css'
import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="pb-3 pt-0 pt-md-5">
      <div className="container mt-0 pt-md-5 text-center">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 mt-5 mt-lg-0">
            <h5 className="text-center text-md-start">About us</h5>
            <p className="text-center text-md-start">Small Description will be go here Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatem, autem nam dolorem odio fugit eaque quasi iste qui repudiandae assumenda unde officia, possimus voluptatibus optio ipsum dolores nostrum maiores.</p>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mt-5 mt-lg-0">
            <h5 className="text-center">Quick Link</h5>
            <li><a href="#">Home</a></li>
            <li><a href="#"> About</a></li>
            <li><a href="#"> About us</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#"> Product Two</a></li>
            <li><a href="#"> Product one</a></li>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mt-5 mt-lg-0">

            <h5 className="text-center">Product</h5>
            <li><a href="#">Product one items</a></li>
            <li><a href="#"> Product Two</a></li>
            <li><a href="#"> Product one</a></li>
            <li><a href="#">Product one</a></li>
            <li><a href="#"> Product Two</a></li>
            <li><a href="#"> Product one</a></li>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mt-5 mt-lg-0">
            <h5 className="text-center">Product</h5>
            <li><a href="#">Product one items</a></li>
            <li><a href="#"> Product Two</a></li>
            <li><a href="#"> Product one</a></li>
            <li><a href="#">Product one</a></li>
            <li><a href="#"> Product Two</a></li>
            <li><a href="#"> Product one</a></li>
          </div>
        </div>

        <div className="footer_end mt-4 text-center">
          <AiOutlineCopyright />
          <a href="#robolawyer">2023 Robolawyer. All rights reserved. </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
