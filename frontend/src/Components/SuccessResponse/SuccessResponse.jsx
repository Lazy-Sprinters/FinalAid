import React, { useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import Axios from "axios";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  FormLabel,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

const SuccessResponse = (props) => {
  return (
    <>
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
            background: "green",
            borderRadius: "20px 20px 0 0",
            textAlign:"center"
          }}
        >
          <Modal.Title
            style={{
              margin: "1vw 9vw 0 9vw",
              fontWeight: "bold",
              fontSize: "2vw",
              
            }}
          >
            Success Recieved!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            background: "#D7D8DE",
            padding: "2vw 2vw 0 2vw",
            borderRadius: "0 0 20px 20px",
            textAlign:"center"
          }}
        >
        <div style={{fontSize:"2vw"}}>The task was completed successfully. </div>
        <br/>
        <div style={{margin:"0 14vw 2vw 14vw",width:"8vw",height:"8vw"}}>
            <img style={{width:"100%",height:"100%"}}src="./images/success.gif"/>
        </div>
          <Button
            variant="success"
            style={{
              border: "1px solid #707070",
              padding: "0.2vw 0 0.2vw 0",
              borderRadius: "20px",
              width: "7vw",
              margin: "0 0 0 1vw",
              fontSize: "1.2vw",
              color: "black",
              fontWeight:"bold",
              marginBottom: "1vw",
            }}
            onClick={() => props.onHide()}
          >
            Continue
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SuccessResponse;
