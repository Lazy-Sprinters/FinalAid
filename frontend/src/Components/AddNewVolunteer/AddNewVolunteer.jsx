import React from "react";
import { Button, Modal } from "react-bootstrap";
import Axios from "axios";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  FormLabel,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

const AddNewVolunteer = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [name, setName] = React.useState("");
  const [contactNo, setContactNo] = React.useState("");
  const [aadhaarNo, setAadhaarNo] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [undertaking, setUndertaking] = React.useState(false);
  const [verified, setVerified] = React.useState(false);
  const [image, setImage] = React.useState("");
  const [imageType, setImageType] = React.useState("");
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);

  const handleBase64 = (e) => {
    let binaryString = e.target.result;
    setImage(btoa(binaryString));
  };

  const uploadImage = (e) => {
    setImageType(e.target.files[0].type);
    const reader = new FileReader();
    reader.onload = handleBase64.bind(this);
    reader.readAsBinaryString(e.target.files[0]);
  };

  const register = () => {
    const data = {
      name,
      contactNo,
      aadhaarNo,
      address,
      undertaking,
      verified,
      image,
      imageType,
    };
    const x = {user,token,data};
    console.log(x);

    //API Call
    Axios.post("http://localhost:5000/org/newfundreq", x)
      .then((res) => {
        if (res.data.success) {
          console.log("Regestering");
          console.log(res.data.response);
          props.onHide();
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
      <Modal
        show={props.show}
        onHide={props.onHide}
        backdrop="static"
        // size={props.size}
        centered
        style={{ borderRadius: "20px" }}
      >
        <Modal.Header style={{ border: "none", background: "#D7D8DE" }}>
          <Modal.Title
            style={{
              margin: "1vw 7vw 0 10vw",
              fontWeight: "bold",
              fontSize: "2vw",
            }}
          >
            Volunteer Registration
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: "#D7D8DE", padding: "0 10vw 0 10vw" }}>
          <div>
            <TextField
              style={{
                textAlign: "center",
                marginBottom: "0.5vw",
                marginTop: "-1vw",
              }}
              inputProps={{
                style: {
                  width: "20vw",
                },
              }}
              placeholder="Enter Name"
              label="Enter Name"
              onChange={(e) => setName(e.target.value)}
              type="text"
              fullWidth
            />
            <br />
            <TextField
              style={{
                textAlign: "center",
                marginBottom: "0.5vw",
              }}
              inputProps={{
                style: {
                  width: "20vw",
                },
              }}
              placeholder="Enter Contact Number"
              label="Enter Contact Number"
              onChange={(e) => setContactNo(e.target.value)}
              type="text"
              fullWidth
            />
            <br />
            <TextField
              style={{
                textAlign: "center",
                marginBottom: "2vw",
              }}
              inputProps={{
                style: {
                  width: "20vw",
                },
              }}
              placeholder="Enter Aadhaar Number"
              label="Enter Aadhaar Number"
              onChange={(e) => setAadhaarNo(e.target.value)}
              type="text"
              fullWidth
            />
            <br />
            <TextField
              style={{
                textAlign: "center",
                marginBottom: "1.5vw",
              }}
              inputProps={{
                style: {
                  width: "20vw",
                },
              }}
              placeholder="Enter Address"
              label="Enter Address"
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              fullWidth
            />
            <br />
            <FormLabel component="legend">Upload Image</FormLabel>
            <TextField
              style={{
                textAlign: "center",
                marginBottom: "1vw",
              }}
              inputProps={{
                style: {
                  width: "20vw",
                },
              }}
              placeholder="Worker's Profile Image"
              variant="outlined"
              onChange={(e) => uploadImage(e)}
              type="file"
              fullWidth
            />
            <br />
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
        <Modal.Footer
          style={{ border: "none", height: "2vw", marginTop: "-4vw" }}
        ></Modal.Footer>
      </Modal>
    </>
  );
};

export default AddNewVolunteer;
