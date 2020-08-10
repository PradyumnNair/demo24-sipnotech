import React from 'react';
import Button from "./Button";

const CallToAction = props => {

  return (
    <section className="cta">
      <h1>Partner with us to create amazing digital solutions</h1>
      <p>One stop destination for building and delivering your ideas into reality</p>
      <Button href="https://wa.me/917989854956" label="Get Started" />
    </section>
  )
};

export default CallToAction;
