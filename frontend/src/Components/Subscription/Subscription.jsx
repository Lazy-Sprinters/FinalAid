import React from "react";
import { Button } from "react-bootstrap";
import { TextField } from "@material-ui/core";
import Axios from "axios";

const Subscription = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const addNewSubscriber = () => {
    const data = { name, email };
    Axios.post("http://localhost:5000/utility/mailnew", data)
      .then((res) => {
        if (res.data.success) {
          console.log("Adding a new Subscriber");
          console.log(res.data.response);
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
      <div className="row" style={{ width: "70vw" }}>
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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            onClick={() => addNewSubscriber()}
          >
            Submit
          </Button>
        </div>
        <div style={{ margin: "-13vw 2vw 0 15vw" }}>
          <div
            style={{
              fontSize: "3.5vw",
              fontWeight: "bold",
              textAlign: "right",
            }}
          >
            Want to Donate?
          </div>
          <div
            style={{
              margin: "0 0 0 16vw",
              letterSpacing: "0.1vw",
              fontSize: "1.5vw",
              textAlign: "right",
            }}
          >
            There's always someone who needs our help. There's always someone
            willing to help. What's more worrisome than wanting to help but
            being uninformed? Subscribe to our mailing list to get the latest
            information about the people who require your assistance.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
