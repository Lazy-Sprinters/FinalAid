import React from "react";
import { Helmet } from "react-helmet";
import HeroContainer from "../../Components/HeroContainer/HeroContainer";
import LoginModal from "../../Components/LoginModal/LoginModal";
import Navbar1 from "../../Components/Navbar/Navbar";

const LandingPage = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
    <Navbar1 setModalShow={setModalShow}/>
    <LoginModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
      />
      <Helmet>
        <title>FinalAid | Home</title>
        <meta
          name="description"
          content="This is the home page for the users"
        />
      </Helmet>
      {/* <Navbar1/ > */}
      <HeroContainer/>
    </>
  );
};

export default LandingPage;
