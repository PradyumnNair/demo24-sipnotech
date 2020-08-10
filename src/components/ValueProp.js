import React from 'react';
import Button from "./Button";

const ValueProp = props => {

  return (
    <section className="value-prop">
      <div className="value-prop-content">
        <div className="main-message">
          <h1>We are Sipnotech</h1>
          <p className="main-subtitle">SipnoTech provides Digital Transformation Services for small businesses and Startups</p>
          <Button label="Get Started" />
        </div>
        <div className="main-photo"></div>
      </div>
    </section>
  )
};

export default ValueProp;
