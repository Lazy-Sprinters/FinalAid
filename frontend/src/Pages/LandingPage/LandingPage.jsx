import React from "react";
import { Helmet } from "react-helmet";
import HeroContainer from "../../Components/HeroContainer/HeroContainer";

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="This is the home page for the users"
        />
      </Helmet>
      <HeroContainer/>
    </>
  );
};

export default LandingPage;
