import React from "react";
import { Button } from "react-bootstrap";

const DonateComponent = () => {
  return (
    <>
      <div
        style={{
          background: "white",
          width: "100%",
          height: "170vh",
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
            fontWeight: "bold",
          }}
        >
          Donate
        </div>
        <div className="row" style={{ marginLeft: "-6vw", width: "100vw" }}>
          <div
            style={{
              width: "43.5vw",
              margin: "3.5vw 0 0 6vw",
              height: "30vw",
              background: "#D7D8DE",
              padding: "2vw 14vw 0 2vw",
              textAlign: "left",
              fontFamily: "Poppins",
            }}
          >
            <div
              style={{
                fontWeight: "600",
                fontSize: "3vw",
              }}
            >
              For Poor People <br />
              Who Can't <br />
              <div style={{ color: "#707070" }}>Afford</div>
            </div>
            <div
              style={{
                fontWeight: "300",
                fontSize: "1.7vw",
                margin: "1vw 0 1vw 0",
              }}
            >
              There are many variations of passages of Lorem Ipsum available,
              but the maj have suffered alteration
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
            >
              Donate
            </Button>
          </div>
          <div
            style={{
              width: "30vw",
              margin: "7vw 0 0 -11vw",
              height: "23vw",
              background: "black",
            }}
          >
            <img src="1" />
          </div>
        </div>
        <div className="row" style={{ margin: "2vw 0 0 34vw", width: "65vw" }}>
          <div
            style={{
              width: "30vw",
              margin: "7vw -15vw 0 0",
              height: "23vw",
              background: "black",
              zIndex: "1",
            }}
          >
            <img src="1" />
          </div>
          <div
            style={{
              width: "43.5vw",
              margin: "3.5vw 0 0 6vw",
              height: "30vw",
              background: "#D7D8DE",
              padding: "2vw 2vw 0 14vw",
              textAlign: "right",
              fontFamily: "Poppins",
            }}
          >
            <div
              style={{
                fontWeight: "600",
                fontSize: "3vw",
              }}
            >
              For Volunteers <br />
              Who Work At
              <br />
              <div style={{ color: "#707070" }}> Crematorium </div>
            </div>
            <div
              style={{
                fontWeight: "300",
                fontSize: "1.7vw",
                margin: "1vw 0 1vw 0",
              }}
            >
              There are many variations of passages of Lorem Ipsum available,
              but the maj have suffered alteration
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
            >
              Donate
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonateComponent;
