import React from 'react';
import './Partners.css';
import parter1 from '../../assets/partner1.png'
import parter2 from '../../assets/partner2.png'
import parter3 from '../../assets/partner3.png'
import parter4 from '../../assets/partner4.png'
import parter5 from '../../assets/partner5.png'
import parter6 from '../../assets/partner6.png'

const Partners = () => {
  return (
    <div className="container partner_main">
      <div className="">
        <h4>PARTNERS</h4>
        <h2>Our partners</h2>
        <p>Experience a seamless and empowering legal jou Robolawyer. Our AI-powered platform combines the </p>
      </div>

      <div className="partner_log_div">
        <section className="logo_sec">
          <img className="img_1" src={parter1} alt="" />
          <img className="img_2" src={parter2} alt="" />
        </section>
        <section className="logo_sec">
          <img className="img_3" src={parter3} alt="" />
          <img className="img_4" src={parter4} alt="" />
        </section>
        <section className="logo_sec">
          <img className="img_5" src={parter5} alt="" />
          <img className="img_6" src={parter6} alt="" />
        </section>
      </div>

    </div>
  )
}

export default Partners
