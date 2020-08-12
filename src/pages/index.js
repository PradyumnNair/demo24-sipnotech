import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import ValueProp from "../components/ValueProp";
import SocialProof from "../components/SocialProof";
import ProductBenefits from "../components/ProductBenefits";
import ProductFeatures from "../components/ProductFeatures";
import CallToAction from "../components/CallToAction";

const IndexPage = () => (
  <Layout>

    <SEO title="Home" />
    <ValueProp />
    <SocialProof />
    <ProductBenefits />
    <ProductFeatures />
    <CallToAction />
  </Layout>
);

export default IndexPage;
module.exports = {
  siteMetadata: {
    title: `Sipnotech`,
    // highlight-start
    description: `Digital transformation solutions for small businesses and start ups`,
    author: `sipnotech`,
    // highlight-end
  }'