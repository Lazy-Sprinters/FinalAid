import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
// import DonateModal from "../../Components/DonateModal/DonateModal";
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
import AdminNavbar from "../../Components/AdminNavbar/AdminNavbar";

const DonatePoorPage = () => {
  const [modalShow1, setModalShow1] = React.useState(false);
  const [organisationData, setOrganisationData] = React.useState("");
  const [data, setData] = React.useState(null);
  const [name, setName] = React.useState("");
  const [showOrganisations, setShowOrganisations] = React.useState("");
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();
  const history = useHistory();

  const displayOrganisation = (data1) => {
    const code = [];
    console.log(data1)
    // console.log(data.length)
    data1.map((value) => {
      code.push(<CardComponent value={value} flag={false} onEdit={0} />);
    });
    setShowOrganisations(code);
  };

  const search = () => {
    const data = { name };
    //API Call
    const x={user,token,data}
    Axios.post("http://localhost:5000/org/searchorgs", x)
      .then(async (res) => {
        if (res.data.success) {
          console.log("Organisations displayed by name");
          console.log(res.data.response);
          //Store all organisation Data -> setOrganisationData();
          setOrganisationData(res.data.response);
          displayOrganisation(res.data.response);
          // dispatch({type:actionTypes.CHANGE_USER , user:res.data.response.user})
        } else {
          console.log(res.data.message);
        }
      })
      .catch((err) => {
        console.log("Axios", err);
      });
  };


  
  useEffect(() => {
    //Call Api
    const x = { user, token };
//     Axios.post("http://localhost:5000/org/allorgs", x)
//       .then((res) => {
//         if (res.data.success) {
//           console.log("Organisations displayed");
//           console.log(res.data.response);
//           //Store all organisation Data -> setOrganisationData();
//           setOrganisationData(res.data.response);
//           displayOrganisation(res.data.response)
//           // dispatch({type:actionTypes.CHANGE_USER , user:res.data.response.user})
//         } else {
//           console.log(res.data.message);
//         }
//       })
//       .catch((err) => {
//         console.log("Axios", err);
//       });
  }, []);
  return (
    <>
      <AdminNavbar />
      <Helmet>
        <title>FinalAid | Donate to Poor</title>
        <meta
          name="description"
          content="This is the Organisation page for the admins"
        />
      </Helmet>
     {/* <DonateModal
        show={modalShow1}
        data={data}
        onHide={() => setModalShow1(false)}
        size="lg"
     />*/}
      <div className="row" style={{ margin: "2vw 40vw 3vw 40vw" }}>
        <TextField
          style={{
            marginBottom: "0.5vw",
          }}
          inputProps={{
            style: {
              width: "10vw",
              textAlign: "center",
              letterSpacing: "0.2vw",
            },
          }}
          placeholder="Enter Name"
          label="Enter Name"
          onChange={(e) => setName(e.target.value)}
          type="text"
          // fullWidth
        />
        <Button
          style={{
            background: "transparent",
            border: "1.2px solid black",
            padding: "0.1vw 0 0.1vw 0",
            borderRadius: "20px",
            width: "7vw",
            height: "3vw",
            margin: "1vw 0 0 1vw",
            fontSize: "1.2vw",
            color: "black",
          }}
          onClick={() => search()}
        >
          Search
        </Button>
      </div>
      <div style={{ margin: "3vw 5vw 3vw 5vw" }}>{showOrganisations}</div>{" "}
    </>
  );
};

export default DonatePoorPage;
