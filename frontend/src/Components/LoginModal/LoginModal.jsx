import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import Axios from "axios";
import { useDispatch , useSelector } from 'react-redux';
import * as actionTypes from '../../actions/actions';

import {
  TextField,
  Checkbox,
  FormControlLabel,
  FormLabel,
} from "@material-ui/core";

const LoginModal = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const login = () => {
    const data = {
      email,
      password,
    };
    console.log(data);
    Axios.post("http://localhost:5000/org/login", data)
      .then((res) => {
        if (res.data.success) {
          console.log("Proceeding to Home Page");
          console.log(res.data.response);

          props.onHide();
          dispatch({type:actionTypes.CHANGE_USER , user:res.data.response.user})
          dispatch({type:actionTypes.CHANGE_TOKEN , token:res.data.response.token})
          /*On success ->*/ history.push("/admin");
        } else {
          console.log(res.data.message);
        }
      })
      .catch((err) => {
        console.log("Axios", err);
      });
    //API Call
  };
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.onHide}
        backdrop="static"
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
            Login
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
              placeholder="Enter Email"
              label="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
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
              placeholder="Enter Password"
              label="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              fullWidth
            />
            <br />
          </div>
          <Button
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
            onClick={() => login()}
          >
            Login
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

export default LoginModal;
