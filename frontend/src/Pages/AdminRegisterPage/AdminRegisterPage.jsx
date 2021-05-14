import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Button } from "react-bootstrap";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";

const LandingPage = () => {
  const [displayStates, setDisplayStates] = React.useState("");
  const [states, setStates] = React.useState([
    "Andhra-Pradesh",
    "Arunachal-Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal-Pradesh",
    "Jammu-Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya-Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil-Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar-Pradesh",
    "West-Bengal",
    "Andaman-and-Nicobar-Islands",
    "Chandigarh",
    "Dadra-and-Nagar-Haveli",
    "Daman-and-Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ]);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNo, setPhoneNo] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [pincode, setPincode] = React.useState("");
  const [state1, setState1] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [type, setType] = React.useState("");

  const register = () => {
    const data = {
      name,
      email,
      phoneNo,
      address,
      pincode,
      state1,
      password,
      type,
    };
    console.log(data);
    //API call
  };

  useEffect(() => {
      const code=[];
    states.map((value) => {
      code.push(<MenuItem value={value}>{value}</MenuItem>);
    });
    setDisplayStates(code);
  }, []);
  return (
    <>
      <Helmet>
        <title>FinalAid | Admin Register</title>
        <meta
          name="description"
          content="This is the register page for the admins"
        />
      </Helmet>
      <div style={{ textAlign: "center", padding: "10vw 20vw 10vw 20vw" }}>
        <TextField
          style={{ margin: "0 0 0 0", padding: "1vw 0 0 0 " }}
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
          style={{ margin: "0 0 0 0", padding: "1vw 0 0 0 " }}
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
        <br />
        <TextField
          style={{ margin: "0 0 0 0", padding: "1vw 0 0 0 " }}
          InputProps={{
            style: {
              borderRadius: "50px",
              height: "3vw",
              width: "20vw",
              borderColor: "black",
            },
          }}
          label="Enter your Phone Number"
          variant="outlined"
          type="number"
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
        />
        <br />
        <TextField
          style={{ margin: "0 0 0 0", padding: "1vw 0 0 0 " }}
          InputProps={{
            style: {
              borderRadius: "50px",
              height: "3vw",
              width: "20vw",
              borderColor: "black",
            },
          }}
          label="Enter your address"
          variant="outlined"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <br />
        <TextField
          style={{ margin: "0 0 0 0", padding: "1vw 0 0 0 " }}
          InputProps={{
            style: {
              borderRadius: "50px",
              height: "3vw",
              width: "20vw",
              borderColor: "black",
            },
          }}
          label="Enter your pincode"
          variant="outlined"
          type="number"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        />
        <br />
        <FormControl style={{ minWidth: "15vw", margin: "1vw 3vw 3vw 6vw" }}>
          <InputLabel
            style={{
              fontSize: "1vw",
              fontWeight: "200",
              letterSpacing: "0.2vw",
            }}
          >
            Enter your State
          </InputLabel>
          <Select
            value={state1}
            onChange={(e) => setState1(e.target.value)}
            autoWidth
          >
            {/* <MenuItem value="">
              <em>Enter your State</em>
            </MenuItem> */}
            {displayStates}
            {/* <MenuItem value={10}>Ten</MenuItem> */}
            {/* <MenuItem value={20}>Twenty</MenuItem> */}
            {/* <MenuItem value={30}>Thirty</MenuItem> */}
          </Select>
        </FormControl>
        <br />
        <TextField
          style={{ margin: "0 0 0 0", padding: "1vw 0 0 0 " }}
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
        <FormControl style={{ minWidth: "15vw", margin: "1vw 3vw 3vw 6vw" }}>
          <InputLabel
            style={{
              fontSize: "1vw",
              fontWeight: "200",
              letterSpacing: "0.2vw",
            }}
          >
            Enter your Type
          </InputLabel>
          <Select
            value={type}
            onChange={(e) => setType(e.target.value)}
            autoWidth
          >
            {/* <MenuItem value="">
              <em>Enter your State</em>
            </MenuItem> */}
            <MenuItem value={"ngo"}>ngo</MenuItem>
            <MenuItem value={"crematorium"}>crematorium</MenuItem>
            {/* <MenuItem value={30}>Thirty</MenuItem> */}
          </Select>
        </FormControl>
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
          onClick={() => register()}
        >
          Submit
        </Button>
      </div>
    </>
  );
};

export default LandingPage;
