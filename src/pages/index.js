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
  <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-T12D9JTHMV"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-T12D9JTHMV');
</script>
    <SEO title="Home" />
    <ValueProp />
    <SocialProof />
    <ProductBenefits />
    <ProductFeatures />
    <CallToAction />
  </Layout>
);

export default IndexPage;
