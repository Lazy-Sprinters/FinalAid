import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import DonateModal from "../../Components/DonateModal/DonateModal";
import CardComponent from "../../Components/CardComponent/CardComponent";
import { Helmet } from "react-helmet";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import Navbar1 from "../../Components/Navbar/Navbar";
import * as actionTypes from "../../actions/actions";
import FailureResponse from "../../Components/FailureResponse/FailureResponse";

const DonateWorker = () => {
  const [modalShow1, setModalShow1] = React.useState(false);
  const [organisationData, setOrganisationData] = React.useState("");
  const [data, setData] = React.useState(null);
  const [showOrganisations, setShowOrganisations] = React.useState("");
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const searchData = useSelector((state) => state.searchData);
  const [displayStates, setDisplayStates] = React.useState("");
  const [displayDistricts, setDisplayDistricts] = React.useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const [states, setStates] = React.useState([
    "Andhra-Pradesh",
    "Arunachal-Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal-Pradesh",
    "Jammu-Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya-Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil-Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar-Pradesh",
    "West-Bengal",
    "Andaman-and-Nicobar-Islands",
    "Chandigarh",
    "Dadra-and-Nagar-Haveli",
    "Daman-and-Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ]);
  const [failure, setFailure] = React.useState(false);
  const [district, setDistrict] = React.useState("");
  const [state1, setState1] = React.useState("");
  const donate = (data1) => {
    setData(data1);
    setModalShow1(true);
  };

  const failed = () => {
    setFailure(false);
    setState1("");
    setDistrict("");
    setShowOrganisations("")
  };

  const fillDistrictsDropDown = (e) => {
    setState1(e.target.value);
    Axios.post("http://localhost:5000/utility/districts", {
      state: e.target.value,
    })
      .then((res) => {
        if (res.data.success) {
          console.log("Filling up the Districts");
          console.log(res.data.response);
          const code = [];
          res.data.response.map((value) => {
            code.push(<MenuItem value={value}>{value}</MenuItem>);
          });
          setDisplayDistricts(code);
        } else {
          console.log(res.data.message);
        }
      })
      .catch((err) => {
        console.log("Axios", err);
      });
  };

  const search = () => {
    const data = { state: state1, district };
    const x = { user, token, data };
    dispatch({ type: actionTypes.CHANGE_SEARCHDATA, searchData: data });
    Axios.post("http://localhost:5000/org/search", x)
      .then((res) => {
        if (res.data.success) {
          console.log("Organisations displayed");
          console.log(res.data.response);
          //Store all organisation Data -> setOrganisationData();
          setOrganisationData(res.data.response);
          displayOrganisation(res.data.response);
          // dispatch({type:actionTypes.CHANGE_USER , user:res.data.response.user})
        } else {
          setFailure(true);
          console.log(res.data.message);
        }
      })
      .catch((err) => {
        console.log("Axios", err);
      });
  };

  const displayOrganisation = (data1) => {
    const code = [];
    console.log(data1);
    // console.log(data.length)
    // data1.map((value) => {
    //   code.push(<CardComponent value={value} flag={false} onEdit={0} donate={donate}/>);
    // });
    for (let i = 0; i < data1.length; i += 2) {
      if (data1.length % 2 != 0 && i == data1.length - 1) {
        code.push(
          <div
            style={{ justifyContent: "space-between", padding: "2vw 0" }}
            className="row1"
          >
            <CardComponent
              value={data1[i]}
              flag={4}
              onEdit={0}
              donate={donate}
            />
          </div>
        );
      } else {
        code.push(
          <div
            style={{ justifyContent: "space-between", padding: "2vw 0" }}
            className="row1"
          >
            <CardComponent
              value={data1[i]}
              flag={4}
              onEdit={0}
              donate={donate}
            />
            <CardComponent
              value={data1[i + 1]}
              flag={4}
              onEdit={0}
              donate={donate}
            />
          </div>
        );
      }
    }
    console.log(code);
    setShowOrganisations(code);
  };

  useEffect(() => {
    //Call Api
    const code = [];
    states.map((value) => {
      code.push(<MenuItem value={value}>{value}</MenuItem>);
    });
    setDisplayStates(code);
    const x = { user, token, data: searchData };
    Axios.post("http://localhost:5000/org/search", x)
      .then((res) => {
        if (res.data.success) {
          console.log("Organisations displayed");
          console.log(res.data.response);
          //Store all organisation Data -> setOrganisationData();
          setOrganisationData(res.data.response);
          displayOrganisation(res.data.response);
        } else {
          setFailure(true);
          console.log(res.data.message);
        }
      })
      .catch((err) => {
        console.log("Axios", err);
      });
  }, []);
  return (
    <>
      <FailureResponse show={failure} onHide={() => failed()} size="lg" />
      <Navbar1 />
      <Helmet>
        <title>FinalAid | Search Organisation</title>
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
      <div
        style={{
          background: "white",
          width: "100%",
          height: "30vh",
          textAlign: "center",
          paddingTop: "2vw",
          color: "black",
        }}
      >
        <div
          style={{
            fontSize: "2.2vw",
            textAlign: "center",
            width: "100%",
            margin: "2vw 3vw 2vw 0 ",
            fontWeight: "bold",
          }}
        >
          Search
        </div>
        <div className="row" style={{ marginLeft: "25vw", width: "54vw" }}>
          <FormControl style={{ minWidth: "15vw", margin: "1vw 3vw 3vw 6vw" }}>
            <InputLabel
              style={{
                fontSize: "1vw",
                fontWeight: "200",
                letterSpacing: "0.2vw",
              }}
            >
              Enter your State
            </InputLabel>
            <Select
              value={state1}
              onChange={(e) => fillDistrictsDropDown(e)}
              autoWidth
            >
              {displayStates}
            </Select>
          </FormControl>
          <FormControl style={{ minWidth: "15vw", margin: "1vw 5vw 3vw 4vw" }}>
            <InputLabel
              style={{
                fontSize: "1vw",
                fontWeight: "200",
                letterSpacing: "0.2vw",
              }}
            >
              Enter your City
            </InputLabel>
            <Select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              autoWidth
            >
              {displayDistricts}
            </Select>
          </FormControl>
        </div>
        <Button
          style={{
            background: "transparent",
            border: "1px solid #707070",
            padding: "0.2vw 0 0.2vw 0",
            borderRadius: "20px",
            width: "7vw",
            margin: "0 0 0 1vw",
            fontSize: "1.2vw",
            color: "#707070",
          }}
          onClick={() => search()}
        >
          Submit
        </Button>
      </div>
      <div style={{ margin: "3vw 5vw 3vw 5vw" }}>{showOrganisations}</div>{" "}
    </>
  );
};

export default DonateWorker;
