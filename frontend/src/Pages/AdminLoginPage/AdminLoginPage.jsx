import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Button } from "react-bootstrap";
import Axios from "axios"
import {
  TextField,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const AdminRegisterPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const history = useHistory();

  const login = () => {
    const data = {
      email,
      password,
    };
    console.log(data);
    Axios.post("http://localhost:5000/org/login",data)
        .then((res) => {
            if(res.data.success){
                console.log("Proceeding to Home Page");
                console.log(res.data.response)
                // dispatch({type:actionTypes.CHANGE_USER , user:res.data.response})
                /*On success ->*/ history.push('/admin');
            }
            else{
                console.log(res.data.message)
            }
        })
        .catch((err) => {
          console.log("Axios", err);
        });
  };

  useEffect(() => {
      ;
  }, []);
  return (
    <>
      <Helmet>
        <title>FinalAid | Admin Login</title>
        <meta
          name="description"
          content="This is the Login page for the admins"
        />
      </Helmet>
      <div style={{ textAlign: "center", padding: "10vw 20vw 10vw 20vw" }}>
        <TextField
          style={{ margin: "1vw 0 0 0", padding: "1vw 0 0 0 " }}
          InputProps={{
            style: {
              borderRadius: "50px",
              height: "3vw",
              width: "20vw",
              borderColor: "black",
            },
          }}
          label="Enter your email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br/>
        <TextField
          style={{ margin: "1vw 0 0 0", padding: "1vw 0 0 0 " }}
          InputProps={{
            style: {
              borderRadius: "50px",
              height: "3vw",
              width: "20vw",
              borderColor: "black",
            },
          }}
          label="Enter your password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
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
          onClick={() => login()}
        >
          Login
        </Button>
      </div>
    </>
  );
};

export default AdminRegisterPage;
