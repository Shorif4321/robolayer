import React from 'react';
import './Reviews.css';
import Feedback from './Feedback';

const Reviews = () => {
  return (
    <div className="container">
      <div id='reviews-section' className="review_main">
        <section className="text-center col-11 col-md-9  mx-auto sec1">
          <h5 >TESTIMONIALS</h5>
          <h1>What our customers say about us</h1>
          <p>Experience a seamless and empowering legal jou Robolawyer. Our AI-powered platform combines the  Experience a seamless and empowering legal jou Robolawyer.</p>
        </section>
      </div>




      <section className="d-flex justify-content-center">
        <Feedback className="big p-2" size={2} />
        <Feedback className="smal" size={1} />
      </section>
    </div>
  )
}

export default Reviews
