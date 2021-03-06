import React from "react";
import { Button, Modal } from "react-bootstrap";
import { TextField, Checkbox, FormControlLabel } from "@material-ui/core";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import "./RegisterModal.css"
import SuccessResponse from "../SuccessResponse/SuccessResponse";

const RegisterModal = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [name, setName] = React.useState("");
  const [aadhaarId, setAadhaarId] = React.useState("");
  const [bplId, setBplId] = React.useState("");
  const [deceasedName, setDeceasedName] = React.useState("");
  const [deceasedAid, setDeceasedAid] = React.useState("");
  const [undertaking, setUndertaking] = React.useState(false);
  const [verified, setVerified] = React.useState(false);
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const [success, setSuccess] = React.useState(false);

  const register = () => {
    const data = {
      name,
      aadhaarId,
      bplId,
      deceasedName,
      deceasedAid,
      undertaking,
      verified,
    };
    const x = { user,token,data };
    console.log(data);
    //API Call
    Axios.post("http://localhost:5000/org/newfundreq", x)
      .then((res) => {
        if (res.data.success) {
          console.log("Registering");
          console.log(res.data.response);
          props.onHide();
          setSuccess(true)
          // dispatch({type:actionTypes.CHANGE_USER , user:res.data.response})
        } else {
          console.log(res.data.message);
        }
      })
      .catch((err) => {
        console.log("Axios", err);
      });
  };
  return (
    <>
    <SuccessResponse
        show={success}
        onHide ={() => setSuccess(false)}
        size="lg"
      />
      <Modal
        show={props.show}
        onHide={props.onHide}
        backdrop="static"
        // size={props.size}
        centered
      >
        <Modal.Header style={{ border: "none", background: "#D7D8DE",borderRadius:"20px 20px 0 0" }}>
          <Modal.Title
            style={{
              margin: "1vw 7vw 0 10vw",
              fontWeight: "bold",
              fontSize: "2vw",
            }}
          >
            Registration Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: "#D7D8DE", padding: "0 10vw 0 10vw" ,borderRadius:"0 0 20px 20px"}}>
          <div>
            <TextField
              style={{
                
                marginBottom: "1vw",
                marginTop: "-1vw",
              }}
              inputProps={{
                style: {
                  width: "20vw",
                  textAlign:"center",
                  letterSpacing:"0.2vw"
                },
              }}
              placeholder="Name"
              label="Enter Name"
              onChange={(e) => setName(e.target.value)}
              type="text"
              fullWidth
            />
            <br />
            <TextField
              style={{
                
                marginBottom: "1vw",
              }}
              inputProps={{
                style: {
                  width: "20vw",
                  textAlign:"center",
                  letterSpacing:"0.2vw"
                },
              }}
              placeholder="Aadhaar ID"
              label="Enter Aadhaar ID"
              onChange={(e) => setAadhaarId(e.target.value)}
              type="text"
              fullWidth
            />
            <br />
            <TextField
              style={{
                
                marginBottom: "1vw",
              }}
              inputProps={{
                style: {
                  width: "20vw",
                  textAlign:"center",
                  letterSpacing:"0.2vw"
                },
              }}
              placeholder="BPL ID"
              label="Enter BPL ID"
              onChange={(e) => setBplId(e.target.value)}
              type="text"
              fullWidth
            />
            <br />
            <TextField
              style={{
                
                marginBottom: "1vw",
              }}
              inputProps={{
                style: {
                  width: "20vw",
                  textAlign:"center",
                  letterSpacing:"0.2vw"
                },
              }}
              placeholder="Deceased Name"
              label="Enter Deceased Name"
              onChange={(e) => setDeceasedName(e.target.value)}
              type="text"
              fullWidth
            />
            <br />
            <TextField
              style={{
                
                marginBottom: "1vw",
              }}
              inputProps={{
                style: {
                  width: "20vw",
                  textAlign:"center",
                  letterSpacing:"0.2vw"
                },
              }}
              placeholder="Deceased's Aadhaar ID"
              label="Enter Deceased's Aadhaar ID"
              onChange={(e) => setDeceasedAid(e.target.value)}
              type="text"
              fullWidth
            />
            <br />
            <FormControlLabel
              style={{
                height: "2.5vw",
              }}
              control={
                <Checkbox
                  checked={undertaking}
                  onChange={(e) => setUndertaking(e.target.checked)}
                />
              }
              label="Undertaking"
            />
            <FormControlLabel
              style={{
                height: "2.5vw",
              }}
              control={
                <Checkbox
                  checked={verified}
                  onChange={(e) => setVerified(e.target.checked)}
                />
              }
              label="Verified Details"
            />
          </div>
          <Button
            disabled={!(undertaking && verified)}
            variant="success"
            style={{
              background: "transparent",
              border: "1px solid #707070",
              padding: "0.2vw 0 0.2vw 0",
              borderRadius: "20px",
              width: "7vw",
              margin: "0 0 0 1vw",
              fontSize: "1.2vw",
              color: "#707070",
              marginBottom: "1vw",
            }}
            onClick={() => register()}
          >
            Submit
          </Button>
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
              marginBottom: "1vw",
            }}
            variant="danger"
            onClick={props.onHide}
          >
            Cancel
          </Button>
        </Modal.Body>
       
      </Modal>
    </>
  );
};

export default RegisterModal;
