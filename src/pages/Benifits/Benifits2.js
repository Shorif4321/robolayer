import React from "react";
import classes from "./Benifits2.module.css";
import ServiceCard from "./customElements/ServiceCard";
import { BsQuestionOctagon } from "react-icons/bs";
import Lawyer from "./customElements/Lawyer";
import svg from '../../assets/ali.png'

const Benifits2 = () => {
  const ServiceCardDetails = [
    {
      svg: <BsQuestionOctagon />,
      heading: "legal information and research",
      para: "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu",
    },
    {
      svg: <BsQuestionOctagon />,
      heading: "legal information and research",
      para: "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu",
    },
    {
      svg: <BsQuestionOctagon />,
      heading: "legal information and research",
      para: "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu",
    },
    {
      svg: <BsQuestionOctagon />,
      heading: "legal information and research",
      para: "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu",
    },
    {
      svg: <BsQuestionOctagon />,
      heading: "legal information and research",
      para: "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu",
    },
    {
      svg: <BsQuestionOctagon />,
      heading: "legal information and research",
      para: "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu",
    },
  ];

  return (
    <div className="container">
      <div className={classes.benifits2_main}>
        <div className={classes.benifits2_main_top}>
          <h1>
            Let Robolawyer answer to <span> your questions. </span>
          </h1>
          <p>
            Experience a seamless and empowering legal journey with Robolawyer.
            Our AI-powered platform combines the{" "}
          </p>
        </div>
        <div className={classes.benifits2_main_bottom}>
          <section className={classes.main_bottom_sec1}>
            <h5>AREA OF DEPLOYMENT</h5>
            <h2>Where Robolawyer can be used</h2>
            <p>
              Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostrrr
            </p>
          </section>

          <div className="row g-4 benifit py-0 py-md-5">
            <div className="col-12 col-md-6 col-lg-4 text-center mb-4">
              <div className="d-flex justify-content-center mb-3">
                <img className="w-25 h-25" src={svg} alt="" />
              </div>
              <h5 className="fw-bold ">legal information and research</h5>
              <p className="mt-0">Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu</p>
            </div>
            <div className="col-12 col-md-6 col-lg-4 text-center mb-4">
              <div className="d-flex justify-content-center mb-3">
                <img className="w-25 h-25" src={svg} alt="" />
              </div>
              <h5 className="fw-bold ">legal information and research</h5>
              <p className="mt-0">Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu</p>
            </div>
            <div className="col-12 col-md-6 col-lg-4 text-center mb-4">
              <div className="d-flex justify-content-center mb-3">
                <img className="w-25 h-25" src={svg} alt="" />
              </div>
              <h5 className="fw-bold ">legal information and research</h5>
              <p className="mt-0">Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu</p>
            </div>
            <div className="col-12 col-md-6 col-lg-4 text-center mb-4">
              <div className="d-flex justify-content-center mb-3">
                <img className="w-25 h-25" src={svg} alt="" />
              </div>
              <h5 className="fw-bold ">legal information and research</h5>
              <p className="mt-0">Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu</p>
            </div>
            <div className="col-12 col-md-6 col-lg-4 text-center mb-4">
              <div className="d-flex justify-content-center mb-3">
                <img className="w-25 h-25" src={svg} alt="" />
              </div>
              <h5 className="fw-bold ">legal information and research</h5>
              <p className="mt-0">Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu</p>
            </div>
            <div className="col-12 col-md-6 col-lg-4 text-center mb-4">
              <div className="d-flex justify-content-center mb-3">
                <img className="w-25 h-25" src={svg} alt="" />
              </div>
              <h5 className="fw-bold ">legal information and research</h5>
              <p className="mt-0">Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu</p>
            </div>
          </div>






          <section className={classes.main_bottom_sec3}>
            <h4>We provide law knowledge to everyone</h4>
            <div className={classes.div_normal}> <Lawyer display={3} />  </div>
            <div className={classes.div_small}> <Lawyer display={2} />  </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Benifits2;
