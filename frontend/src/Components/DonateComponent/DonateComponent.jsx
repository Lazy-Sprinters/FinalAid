import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const DonateComponent = () => {
  const history = useHistory();
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
              For <br />
              the
              <span style={{ color: "#707070" }}> Helpless</span>
            </div>
            <div
              style={{
                fontWeight: "300",
                fontSize: "1.7vw",
                margin: "1vw 0 1vw 0",
              }}
            >
              It's hard enough to lose your loved ones. Help reduce their burden
              by supporting the final passages of the departed.
            </div>
            <Button
              style={{
                background: "transparent",
                border: "1px solid #707070",
                padding: "0.2vw 0 0.2vw 0",
                borderRadius: "20px",
                width: "7vw",
                margin: "1vw 0 0 0",
                fontSize: "1.2vw",
                color: "#707070",
              }}
              onClick={() => history.push("/donatePoor")}
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
        <div className="row" style={{ margin: "2vw 0 0 34vw", width: "64vw" }}>
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
              width: "44vw",
              margin: "3.5vw 0 0 5vw",
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
              For the
              <br />
              <div style={{ color: "#707070" }}> Nameless </div>
            </div>
            <div
              style={{
                fontWeight: "300",
                fontSize: "1.7vw",
                margin: "1vw 0 1vw 0",
              }}
            >
              Never has been their need felt greater than now. Selflessly
              toiling away with little care of their own so others can be safe.
              Support them get a meal or healthcare supplies.
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
              onClick={() => history.push("/donateWorker")}
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
