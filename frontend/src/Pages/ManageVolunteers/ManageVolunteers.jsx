import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import AddNewVolunteer from "../../Components/AddNewVolunteer/AddNewVolunteer";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  FormLabel,
} from "@material-ui/core";
import AdminNavbar from "../../Components/AdminNavbar/AdminNavbar";

const ManageVolunteers = () => {
  const [modalShow1, setModalShow1] = React.useState(false);
  const [volunteerData, setVolunteerData] = React.useState("");
  const [name, setName] = React.useState("");
  const [showVolunteers, setShowVolunteers] = React.useState("");
  const history = useHistory();

  const search = () => {
    const data = { name };
    //API Call
    //Store all volunteer Data -> setVolunteerData();
    //displayVolunteer()
  };

  const addNew = () =>{
    setModalShow1(true)
  }

  const editVolunteer = (data) => {
    setModalShow1(true);
  };
  const displayVolunteer = () => {
    const code = [];
    volunteerData.map((value) => {
      // code.push(<CardComponent value={value} onEdit={editVolunteer} />);
    });
    setShowVolunteers(code);
  };
  useEffect(() => {
    //Call Api
    //Store all volunteer Data -> setVolunteerData();
    //displayVolunteer()
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
        onHide={() => setModalShow1(false)}
        size="lg"
      />
      <div className="row" style={{ margin: "2vw 40vw 3vw 40vw" }}>
        <TextField
          style={{
            textAlign: "center",
            marginBottom: "0.5vw",
          }}
          inputProps={{
            style: {
              width: "10vw",
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
            border: "1px solid #707070",
            padding: "0.1vw 0 0.1vw 0",
            borderRadius: "20px",
            width: "7vw",
            height:"3vw",
            margin: "1vw 0 0 1vw",
            fontSize: "1.2vw",
            color: "#707070",
          }}
          onClick={() => search()}
        >
          Search
        </Button>
      </div>
      <Button
        style={{
          background: "transparent",
          border: "1px solid #707070",
          padding: "0.2vw 0 0.2vw 0",
          borderRadius: "20px",
          width: "7vw",
          margin: "0 0 0 45vw",
          fontSize: "1.2vw",
          color: "#707070",
        }}
        onClick={() => addNew()}
      >
        Add New +
      </Button>
      <div style={{margin:"3vw 5vw 3vw 5vw"}}>{showVolunteers}</div>{" "}
    </>
  );
};

export default ManageVolunteers;
