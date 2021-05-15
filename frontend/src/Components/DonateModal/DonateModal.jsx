import React, { useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import Axios from "axios";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  FormLabel,
} from "@material-ui/core";
import "./DonateModal.css";
import { useDispatch, useSelector } from "react-redux";
// import SuccessResponse from "../SuccessResponse/SuccessResponse";

const DonateModal = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [name_donater, setNamedonater] = React.useState("");
  const [phno_donater, setPhnodonater] = React.useState("");
  const [email_donater, setEmaildonater] = React.useState("");
  const [undertaking, setUndertaking] = React.useState(false);
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
//   const [success, setSuccess] = React.useState(false);

  const proceed = () => {
    const data = {
      name_donater,
      phno_donater,
      email_donater,
      undertaking,
    };
    const x = { user, token, data };
    console.log(x);

    //API Call
    // Axios.post("http://localhost:5000/org/newworker", x)
    //   .then((res) => {
    //     if (res.data.success) {
    //       console.log("Registering");
    //       console.log(res.data.response);
    //       props.onHide();
    //       setSuccess(true);
    //       // dispatch({type:actionTypes.CHANGE_USER , user:res.data.response})
    //     } else {
    //       console.log(res.data.message);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log("Axios", err);
    //   });
  };
  useEffect(() => {
    if (props.data != null) {
      //Do something and store the data
    }
  }, []);
  return (
    <>
      {/* <SuccessResponse
        show={success}
        onHide={() => setSuccess(false)}
        size="lg"
      /> */}
      <Modal
        show={props.show}
        onHide={props.onHide}
        backdrop="static"
        // size={props.size}
        centered
      >
        <Modal.Header
          style={{
            border: "none",
            background: "#D7D8DE",
            borderRadius: "20px 20px 0 0",
          }}
        >
          <Modal.Title
            style={{
              margin: "1vw 6vw 0 7vw",
              fontWeight: "bold",
              fontSize: "2vw",
            }}
          >
            Donation Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            background: "#D7D8DE",
            padding: "0 10vw 0 10vw",
            borderRadius: "0 0 20px 20px",
          }}
        >
          <div>
            <TextField
              style={{
                marginBottom: "0.5vw",
                marginTop: "-1vw",
              }}
              inputProps={{
                style: {
                  width: "20vw",
                  textAlign: "center",
                  letterSpacing: "0.3vw",
                },
              }}
              placeholder="Name"
              label="Enter Name"
              onChange={(e) => setNamedonater(e.target.value)}
              type="text"
              fullWidth
            />
            <br />
            <TextField
              style={{
                marginBottom: "0.5vw",
              }}
              inputProps={{
                style: {
                  width: "20vw",
                  textAlign: "center",
                  letterSpacing: "0.3vw",
                },
              }}
              placeholder="Phone Number"
              label="Enter Phone Number"
              onChange={(e) => setPhnodonater(e.target.value)}
              type="text"
              fullWidth
            />
            <br />
            <TextField
              style={{
                marginBottom: "2vw",
              }}
              inputProps={{
                style: {
                  width: "20vw",
                  textAlign: "center",
                  letterSpacing: "0.3vw",
                },
              }}
              placeholder="Aadhaar Number"
              label="Enter Aadhaar Number"
              onChange={(e) => setEmaildonater(e.target.value)}
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
          </div>
          <Button
            disabled={!(undertaking )}
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
            onClick={() => proceed()}
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

export default DonateModal;
