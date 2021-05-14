import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import Axios from "axios";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import DonateComponent from "../DonateComponent/DonateComponent";
import Subscription from "../Subscription/Subscription";
const HeroContainer = () => {
  const [displayStates, setDisplayStates] = React.useState("");
  const [displayDistricts, setDisplayDistricts] = React.useState("");
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
  const [district, setDistrict] = React.useState("");
  const [state1, setState1] = React.useState("");
  const [count1, setCount1] = React.useState(2167);
  const [count2, setCount2] = React.useState(2160);
  const [count3, setCount3] = React.useState(7);

  const fillDistrictsDropDown = (e) => {
    setState1(e.target.value);
    Axios.post("http://localhost:5000/utility/districts", {state:e.target.value})
      .then((res) => {
        if (res.data.success) {
          console.log("Filling up the Districts");
          console.log(res.data.response);
          const code = [];
          res.data.response.map((value) => {
            code.push(<MenuItem value={value}>{value}</MenuItem>);
          });
          setDisplayDistricts(code);
          // dispatch({type:actionTypes.CHANGE_USER , user:res.data.response})
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
    console.log(data);
    //API Call
  };

  useEffect(() => {
    const code = [];
    states.map((value) => {
      code.push(<MenuItem value={value}>{value}</MenuItem>);
    });
    setDisplayStates(code);
    // Call API for count1,count2,count3
  }, []);

  return (
    <>
      {/**************************************************************************************************/}
      <div
        style={{
          width: "100%",
          height: "100vh",
          color: "white",
        }}
      >
        <img
          src="./images/Main.png"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      {/**************************************************************************************************/}
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100vh",
          textAlign: "center",
          paddingTop: "2vw",
          color: "black",
          fontSize: "5vw",
        }}
      >
        <div
          style={{
            fontSize: "2.2vw",
            textAlign: "center",
            width: "100%",
            fontWeight: "bold",
          }}
        >
          About
        </div>
        <div className="row" style={{ width: "90vw" }}>
          <div
            style={{
              width: "43.5vw",
              margin: "3.5vw 0 0 6vw",
              height: "30vw",
              background: "black",
            }}
          >
            <img src="1" />
          </div>
          <div
            style={{
              width: "37.5vw",
              margin: "7.5vw 0vw 5vw 2vw",
              height: "30vw",
              fontSize: "2vw",
              textAlign: "justify",
              fontWeight: "600",
            }}
          >
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
          </div>
        </div>
      </div>
      {/**************************************************************************************************/}
      <div
        style={{
          background: "black",
          width: "100%",
          height: "100vh",
          textAlign: "center",
          color: "white",
          fontSize: "8vw",
          fontWeight: "bold",
          padding: "2vw 15vw 2vw 15vw",
          textAlign: "left",
        }}
      >
        Even the smallest help can do wonders.
      </div>
      {/**************************************************************************************************/}
      <DonateComponent />
      {/**************************************************************************************************/}
      <div
        style={{
          background: "white",
          width: "100%",
          height: "68vh",
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
      {/**************************************************************************************************/}
      <div
        style={{
          background: "#D7D8DE",
          width: "100%",
          height: "35vh",
          textAlign: "center",
          paddingTop: "2vw",
          color: "#707070",
          letterSpacing: "0.2vw",
        }}
      >
        <div className="row" style={{ width: "100vw" }}>
          <div
            className="col"
            style={{ alignItems: "center", margin: "3vw 2vw 0 15vw" }}
          >
            <div >
              <div
                style={{
                  margin: "0 2.5vw 1.5vw 2.5vw",
                  background: "white",
                  borderRadius: "50%",
                  width: "5vw",
                  height: "5vw",
                }}
              ></div>
              
            </div>
            <div
              style={{
                fontSize: "1vw",
                fontWeight: "700",
                whiteSpace: "nowrap",
                width: "10vw",
              }}
            >
              Donation Request
            </div>
          </div>
          <div
            className="col"
            style={{ alignItems: "center", margin: "3vw 2vw 0 2vw" }}
          >
            <div >
              <div
                style={{
                  margin: "0 2.5vw 1.5vw 2.5vw",
                  background: "white",
                  borderRadius: "50%",
                  width: "5vw",
                  height: "5vw",
                }}
              ></div>
              
            </div>
            <div
              style={{
                fontSize: "1vw",
                fontWeight: "700",
                whiteSpace: "nowrap",
                width: "10vw",
              }}
            >
              Request Completed
            </div>
          </div>
          <div
            className="col"
            style={{ alignItems: "center", margin: "3vw 2vw 0 2vw" }}
          >
            <div >
              <div
                style={{
                  margin: "0 2.5vw 1.5vw 2.5vw",
                  background: "white",
                  borderRadius: "50%",
                  width: "5vw",
                  height: "5vw",
                }}
              ></div>
              
            </div>
            <div
              style={{
                fontSize: "1vw",
                fontWeight: "700",
                whiteSpace: "nowrap",
                width: "10vw",
              }}
            >
              Request Pending
            </div>
          </div>
        </div>
      </div>
      {/**************************************************************************************************/}
      <Subscription />
    </>
  );
};

export default HeroContainer;
