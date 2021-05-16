import React from "react";
import { Helmet } from "react-helmet";
import AdminFeaturesComponent from "../../Components/AdminFeaturesComponent/AdminFeaturesComponent";
import AdminNavbar from "../../Components/AdminNavbar/AdminNavbar";
import Footer from "../../Components/Footer/Footer"

const LandingPage = () => {
  return (
    <>
    <AdminNavbar/>
      <Helmet>
        <title>FinalAid | Admin</title>
        <meta
          name="description"
          content="This is the home page for the admins"
        />
      </Helmet>
      <AdminFeaturesComponent />
      <Footer />
    </>
  );
};

export default LandingPage;
