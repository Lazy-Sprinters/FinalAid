import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import AddNewVolunteer from "../../Components/AddNewVolunteer/AddNewVolunteer";
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
import FailureResponse from "../../Components/FailureResponse/FailureResponse";

const ManageVolunteers = () => {
  const [modalShow1, setModalShow1] = React.useState(false);
  const [volunteerData, setVolunteerData] = React.useState("");
  const [data, setData] = React.useState(null);
  const [name, setName] = React.useState("");
  const [showVolunteers, setShowVolunteers] = React.useState("");
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();
  const history = useHistory();
  const [failure, setFailure] = React.useState(false);

  const displayVolunteer = (data1) => {
    const code = [];
    if(data1==null || data1.length==0){
      setFailure(true);
    }
    // console.log(data.length)
    data1.map((value) => {
      code.push(<CardComponent value={value} flag={1} onEdit={editVolunteer} donate={0}/>);
    });
    setShowVolunteers(code);
  };

  const failed = () =>{
    setFailure(false);
    history.push("/admin")
  }

  const search = () => {
    const data = { name };
    //API Call
    const x={user,token,data}
    Axios.post("http://localhost:5000/org/search", x)
      .then(async (res) => {
        if (res.data.success) {
          console.log("Volunteers displayed by name");
          console.log(res.data.response);
          //Store all volunteer Data -> setVolunteerData();
          setVolunteerData(res.data.response);
          displayVolunteer(res.data.response);
          // dispatch({type:actionTypes.CHANGE_USER , user:res.data.response.user})
        } else {
          console.log(res.data.message);
          // setFailure(false);
          // history.push("/admin")
        }
      })
      .catch((err) => {
        console.log("Axios", err);
      });
  };

  const addNew = () => {
    setModalShow1(true);
  };

  const editVolunteer = (data) => {
    setData(data);
    setModalShow1(true);
  };
  
  useEffect(() => {
    //Call Api
    const x = { user, token };
    Axios.post("http://localhost:5000/org/allhelpers", x)
      .then((res) => {
        if (res.data.success) {
          console.log("Volunteers displayed");
          console.log(res.data.response);
          //Store all volunteer Data -> setVolunteerData();
          setVolunteerData(res.data.response);
          displayVolunteer(res.data.response)
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
      <AdminNavbar />
      <Helmet>
        <title>FinalAid | Manage Volunteers</title>
        <meta
          name="description"
          content="This is the Volunteer page for the admins"
        />
      </Helmet>
      <AddNewVolunteer
        show={modalShow1}
        data={data}
        onHide={() => setModalShow1(false)}
        size="lg"
      />
      <FailureResponse 
        show={failure}
        onHide ={() => failed()}
        size="lg"
      />
      
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
      <Button
        style={{
          background: "transparent",
          border: "1.2px solid black",
          padding: "0.2vw 0 0.2vw 0",
          borderRadius: "20px",
          width: "7vw",
          margin: "0 0 0 45vw",
          fontSize: "1.2vw",
          color: "black",
        }}
        onClick={() => addNew()}
      >
        Add New +
      </Button>
      <div style={{ margin: "3vw 5vw 3vw 5vw" }}>{showVolunteers}</div>{" "}
    </>
  );
};

export default ManageVolunteers;
