import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import Axios from "axios";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import DonateComponent from "../DonateComponent/DonateComponent";
import Subscription from "../Subscription/Subscription";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../../actions/actions";
import { Element } from "react-scroll";

const HeroContainer = () => {
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
  const [district, setDistrict] = React.useState("");
  const [state1, setState1] = React.useState("");
  const [count1, setCount1] = React.useState(2167);
  const [count2, setCount2] = React.useState(2160);
  const [count3, setCount3] = React.useState(7);

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
    dispatch({ type: actionTypes.CHANGE_SEARCHDATA, searchData: data });
    history.push("/search");
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
      <Element id="hm">
        <div
          style={{
            width: "100%",
            height: "100vh",
            color: "white",
            backgroundImage: "url('./images/Main.png')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            filter:"contrast(70%)",
            padding:"26vw 10vw 10vw 10vw"
          }}
        ><div style={{textAlign:"center",fontSize:"5vw",fontWeight:"bold"}}>Final Aid</div><div style={{textAlign:"center",fontSize:"3vw",fontWeight:"600"}}>Support the nameless and helpless.</div></div>
        
      </Element>
      {/**************************************************************************************************/}
      <Element id="abt">
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
              <img
                style={{ width: "100%", height: "100%" }}
                src="./images/Manage.jpg"
              />
            </div>
            <div
              style={{
                width: "37.5vw",
                margin: "3.5vw 0vw 5vw 2vw",
                height: "30vw",
                fontSize: "2vw",
                textAlign: "justify",
                fontWeight: "600",
              }}
            >
              Losing someone close you to hard, especially in these times when
              people have to stay apart. It's even harder for those who have
              been hit by the pandemic so hard that they're unable to say
              goodbye to their loved ones. Help them bid farewell. Help those
              who're working tirelessly with no care for their own well being.
              Even the smallest donation helps.
            </div>
          </div>
        </div>
      </Element>
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
        Support the nameless and helpless.
      </div>
      {/**************************************************************************************************/}
      <Element id="dnt">
        <DonateComponent />
      </Element>
      {/**************************************************************************************************/}
      <Element id="srch">
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
            <FormControl
              style={{ minWidth: "15vw", margin: "1vw 3vw 3vw 6vw" }}
            >
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
            <FormControl
              style={{ minWidth: "15vw", margin: "1vw 5vw 3vw 4vw" }}
            >
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
      </Element>
      {/**************************************************************************************************/}
      {/* <div
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
            <div>
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
            <div>
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
            <div>
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
      </div> */}
      <div
        style={{
          background: "#D7D8DE",
          width: "100%",
          height: "250vh",
          textAlign: "center",
          paddingTop: "2vw",
          color: "#707070",
          letterSpacing: "0.2vw",
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
          Data Visualisation
        </div>
        <div style={{ width: "100vw" }}>
          <div
            style={{
              alignItems: "center",
              margin: "3vw 2vw 0 15vw",
              width: "70vw",
              height: "50vw",
            }}
          >
            <img
              src="./images/stat1.png"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div
            style={{
              alignItems: "center",
              margin: "3vw 2vw 0 15vw",
              width: "70vw",
              height: "50vw",
            }}
          >
            <img
              src="./images/stats2.png"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
      {/**************************************************************************************************/}
      <Subscription />
    </>
  );
};

export default HeroContainer;
