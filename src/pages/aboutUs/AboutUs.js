import React from "react";
import "./AboutUs.css";

import aboutImg from "../../assets/aboutImg.png";

const AboutUs = () => {
  return (
    <div className="container">
      <div className="row main py-5 my-0 my-md-5 ">
        <div className="col-12 col-lg-6">
          <img className="img-fluid w-100" src={aboutImg} alt="" />
        </div>
        <div className="col-12 col-lg-6 about">
          <h6 className="fw-bold">ABOUT US</h6>
          <h1 className="my-4 fw-bold" >What is <span>Robolawyer</span></h1>
          <p className="">Robolawyer uses state-of-the-art natural language processing technology to understand complex legal queries and provide accurate responses, making it easy to obtain legal information and guidance. y leveraging the power of AI, the system can analyze and interpret various legal documents, statutes, and case law to provide comprehensive and up-to-date answers.Our goal with Robolawyer is to empower individuals by making legal information more accessible, demystifying complex legal concepts, and promoting legal literac</p>
        </div>
      </div>

    </div>
  );
};

export default AboutUs;
