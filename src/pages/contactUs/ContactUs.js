import React from "react";
import "./ContactUs.css";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";

const ContactUs = () => {
  const [value, setValue] = useState();
  return (
    <div className="py- py-md-5 contact">
      <div className="container py-5 contact_main">
        <div className="main_top">
          <h4>Contact us</h4>
          <h1>Get in touch</h1>
          <p className="text-white">We'd love to hear from you. Please fill out this form.</p>
        </div>
        <div className="main_bottom">
          <form>
            <div class="row g-3">
              <div class="col-12 col-md-6">
                <span className="text-white">First name</span>
                <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
              </div>
              <div class="col-12 col-md-6">
                <span className="text-white">Last name</span>
                <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
              </div>
            </div>



            <section className="row_2">
              {" "}
              <span className="text-white">Email</span>
              <input type="email" placeholder="you@company.com" />{" "}
            </section>
            <section className="row_3">
              {" "}
              <span className="text-white">Phone number</span>
              <PhoneInput
                placeholder={value}
                value={value}
                onChange={setValue}
              />{" "}
            </section>



            <section className="row_4">
              <span className="text-white">Message</span>
              <textarea placeholder="Leave us a message..."></textarea>
            </section>


            <section className="row_5 text-white"> <input type="checkbox" value={"agreee"} /> You agree to our friendly privacy policy. </section>
            <section className="row_6"> <button>Send message</button> </section>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
