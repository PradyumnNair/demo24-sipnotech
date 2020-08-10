import React from 'react';
import { Link } from "gatsby";
import Button from "./Button";

const CallToAction = props => {

  return (
    <section className="cta">
    
   <section className="Partner">
      <h1>Partner with us to create amazing digital solutions</h1>
      <p>One stop destination for building and delivering your ideas into reality</p>
      <Link to="https://wa.me/917989854956"> <Button label="Get Started" /></Link>
    </section></section>
  )
};

export default CallToAction;
