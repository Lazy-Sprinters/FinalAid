import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import DonateModal from "../../Components/DonateModal/DonateModal";
import CardComponent from "../../Components/CardComponent/CardComponent";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import * as actionTypes from "../../actions/actions";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  FormLabel,
} from "@material-ui/core";
import Navbar1 from "../../Components/Navbar/Navbar";

const DonatePoorPage = () => {
  const [modalShow1, setModalShow1] = React.useState(false);
  const [organisationData, setOrganisationData] = React.useState("");
  const [data, setData] = React.useState(null);
  const [showOrganisations, setShowOrganisations] = React.useState("");
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();
  const history = useHistory();

  const donate = (data1) => {
    setData(data1);
    setModalShow1(true);
  };

  const displayOrganisation = (data1) => {
    const code = [];
    console.log(data1)
    // console.log(data.length)
    data1.map((value) => {
      code.push(<CardComponent value={value} flag={false} onEdit={0} donate={donate}/>);
    });
    setShowOrganisations(code);
  };
  
  useEffect(() => {
    //Call Api
    const x = { user, token };
    Axios.post("http://localhost:5000/donate/allopenrequests", x)
      .then((res) => {
        if (res.data.success) {
          console.log("Organisations displayed");
          console.log(res.data.response);
          //Store all organisation Data -> setOrganisationData();
          setOrganisationData(res.data.response);
          displayOrganisation(res.data.response)
          // dispatch({type:actionTypes.CHANGE_USER , user:res.data.response.user})
        } else {
          console.log(res.data.message);
        }
      })
      .catch((err) => {
        console.log("Axios", err);
      });
  }, []);
  return (
    <>
      <Navbar1 />
      <Helmet>
        <title>FinalAid | Donate to Poor</title>
        <meta
          name="description"
          content="This is the Organisation page for the admins"
        />
      </Helmet>
     <DonateModal
        show={modalShow1}
        data={data}
        onHide={() => setModalShow1(false)}
        size="lg"
     />
     
      <div style={{ margin: "3vw 5vw 3vw 5vw" }}>{showOrganisations}</div>{" "}
    </>
  );
};

export default DonatePoorPage;
