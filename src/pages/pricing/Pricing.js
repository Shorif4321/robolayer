import React, { useState } from "react";
import "./Pricing.css";
import Switch from "react-switch";

const Pricing = () => {
  const [checked, setChecked] = useState(true);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };

  return (
    <div className="container mx-auto pricing_main py-5">

      <div id="pricing-section" className="col-12 col-md-7 mx-auto py-0 py-md-5">
        <div className=" pricing_main_top">
          <h5>PRICING</h5>
          <h1>Flat price for everyone</h1>
          <p className="">
            Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostr
          </p>
          <div className="pricing_main_top_toggle">
            {checked && <p> Billed Monthly </p>}
            {!checked && <p className="toggled"> Billed Monthly </p>}
            <Switch
              onChange={handleChange}
              checked={checked}
              className="react_switch"
              onColor="#4169E3"
            />

            {checked && <p className="toggled"> Billed Yearly </p>}
            {!checked && <p> Billed Yearly </p>}
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6 col-lg-3"></div>
        </div>

      </div>

      <div className="row mx-3 mt-3 mt-md-0 p-0 pb-lg-5">
        <div className="col-12 col-md-6 col-lg-3 ">
          <div className=" card border-0 shadow p-5 mb-5 mb-lg-0 ">
            <h5>Firebase</h5>
            <p className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, rem.</p>
            <h3 className="">$10 <span>/ month</span></h3>
            <button className="mt-4 mb-5 btn btn-large btn-outline-primary">Start Today</button>
            <p><i class="me-2 fas fa-check"></i> Text will be show</p>
            <p><i class="me-2 fas fa-check"></i> Text will be show</p>
            <p><i class="me-2 fas fa-times"></i> Text will be show</p>
            <p><i class="me-2 fas fa-times"></i> Text will be show</p>
            <p><i class="me-2 fas fa-times"></i> Text will be show</p>
            <p><i class="me-2 fas fa-times"></i> Text will be show</p>
            <p><i class="me-2 fas fa-times"></i> Text will be show</p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 ">
          <div className="card border-0 shadow p-5 mb-5 mb-lg-0">
            <h5>Firebase</h5>
            <p className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, rem.</p>
            <h3 className="">$10 <span>/ month</span></h3>
            <button className="mt-4 mb-5 btn btn-large btn-outline-primary">Start Today</button>
            <p><i class="me-2 fas fa-check"></i> Text will be show</p>
            <p><i class="me-2 fas fa-check"></i> Text will be show</p>
            <p><i class="me-2 fas fa-times"></i> Text will be show</p>
            <p><i class="me-2 fas fa-times"></i> Text will be show</p>
            <p><i class="me-2 fas fa-times"></i> Text will be show</p>
            <p><i class="me-2 fas fa-times"></i> Text will be show</p>
            <p><i class="me-2 fas fa-times"></i> Text will be show</p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 ">
          <div className="card bg-primary text-white border-0 shadow p-5 mb-5 mb-lg-0">
            <h5>Firebase</h5>
            <p className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, rem.</p>
            <h3 className="">$10 <span>/ month</span></h3>
            <button className="bg-white border-white text-black mt-4 mb-5 btn btn-large btn-outline-primary">Start Today</button>
            <p><i class="me-2 fas fa-check"></i> Text will be show</p>
            <p><i class="me-2 fas fa-check"></i> Text will be show</p>
            <p><i class="me-2 fas fa-times"></i> Text will be show</p>
            <p><i class="me-2 fas fa-times"></i> Text will be show</p>
            <p><i class="me-2 fas fa-times"></i> Text will be show</p>
            <p><i class="me-2 fas fa-times"></i> Text will be show</p>
            <p><i class="me-2 fas fa-times"></i> Text will be show</p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 ">
          <div className="card border-0 shadow p-5 mb-5 mb-lg-0">
            <h5>Firebase</h5>
            <p className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, rem.</p>
            <h3 className="">$10 <span>/ month</span></h3>
            <button className="mt-4 mb-5 btn btn-large btn-outline-primary">Start Today</button>
            <p><i class="me-2 fas fa-check"></i> Text will be show</p>
            <p><i class="me-2 fas fa-check"></i> Text will be show</p>
            <p><i class="me-2 fas fa-times"></i> Text will be show</p>
            <p><i class="me-2 fas fa-times"></i> Text will be show</p>
            <p><i class="me-2 fas fa-times"></i> Text will be show</p>
            <p><i class="me-2 fas fa-times"></i> Text will be show</p>
            <p><i class="me-2 fas fa-times"></i> Text will be show</p>
          </div>
        </div>


      </div>






    </div>
  );
};

export default Pricing;
