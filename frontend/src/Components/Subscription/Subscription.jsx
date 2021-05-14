import React from "react";
import { Button } from "react-bootstrap";
import { TextField } from "@material-ui/core";

const Subscription = () => {
  return (
    <div
      style={{
        background: "white",
        width: "100%",
        height: "70vh",
        textAlign: "center",
        color: "black",
        textAlign: "left",
        padding: "6vw 0 0 20vw",
        letterSpacing: "0.2vw",
      }}
    >
      <div className="row" style={{width:"70vw"}}>
        <div>
          <TextField
            style={{ margin: "2vw 0 0 0", padding: "1vw 0 0 0 " }}
            InputProps={{
              style: {
                borderRadius: "50px",
                height: "3vw",
                width: "20vw",
                borderColor: "black",
              },
            }}
            label="Enter your name"
            variant="outlined"
          />
          <br />
          <TextField
            style={{ margin: "0 0 1vw 0", padding: "1vw 0 0 0 " }}
            InputProps={{
              style: {
                borderRadius: "50px",
                height: "3vw",
                width: "20vw",
                borderColor: "black",
              },
            }}
            label="Enter your email address"
            variant="outlined"
          />
          <br />
          <Button
            style={{
              background: "transparent",
              border: "1px solid black",
              padding: "0.2vw 0 0.2vw 0",
              borderRadius: "20px",
              width: "7vw",
              fontSize: "1.2vw",
              color: "black",
            }}
          >
            Submit
          </Button>
        </div>
        <div style={{ margin: "-13vw 2vw 0 15vw" }}>
          <div style={{ fontSize: "3.5vw", fontWeight: "bold" , textAlign: "right"}}>
            Lorem ipsum <br />
            available
          </div>
          <div style={{margin: "0 0 0 24vw",letterSpacing:"0.1vw", textAlign: "right"}}>
            There are many variations of passages of Lorem Ipsum available, but
            the maj have suffered alteration
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
