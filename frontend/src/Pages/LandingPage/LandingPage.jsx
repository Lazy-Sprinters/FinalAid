import React from "react";
import { Helmet } from "react-helmet";
import HeroContainer from "../../Components/HeroContainer/HeroContainer";
import Navbar1 from "../../Components/Navbar";

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>Final Aid | Home</title>
        <meta
          name="description"
          content="This is the home page for the users"
        />
      </Helmet>
      <Navbar1/ >
      <HeroContainer/>
    </>
  );
};

export default LandingPage;
