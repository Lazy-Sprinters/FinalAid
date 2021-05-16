import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Typography,
} from "@material-ui/core";
import { Edit } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "90%",
    borderRadius: "20px",
    background: "#D7D8DE 0% 0% no-repeat padding-box",
    color: "#000000",
    font: "Segoe UI",
    margin: "2.5vw 0 2.5vw 0",
    padding: "0 0 2.5vw 0",
    boxShadow: "2px 2px 2px 3px black"
  },
  root1:{
    maxWidth: "35%",
    borderRadius: "20px",
    background: "#D7D8DE 0% 0% no-repeat padding-box",
    color: "#000000",
    font: "Segoe UI",
    margin: "2.5vw 5vw 2.5vw 5vw",
    padding: "0 0 2.5vw 0",
    boxShadow: "2px 2px 2px 3px black"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "##D7D8DE",
    width: "4.5vw",
    height: "4.5vw",
  },
}));

export default function CardComponent({ value, flag, onEdit ,donate}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  if (flag==1) {
    const data = value;
    const name = value.name;
    const contactNo = value.contactNo;
    const aadhaarNo = value.aadhaarNo;
    const address = value.address;
    const image = value.image;
    return (
      <Card className={classes.root}>
        <CardContent
          style={{ width: "100%", textAlign: "left", font: "Segoe UI" }}
        >
          <div className="row">
            <div style={{ letterSpacing: "0.1vw", margin: " 3vw 5vw 0 5vw" }}>
              <Typography style={{ fontSize: "1.5vw", margin: "2vw 0 4vw 0" }}>
                <b>Name: </b> {name}
              </Typography>
              <Typography style={{ fontSize: "1.5vw", margin: " 2vw 0 4vw 0" }}>
                <b>Address: </b> {address}
              </Typography>
            </div>
            <div style={{ letterSpacing: "0.1vw", margin: " 3vw 5vw 0 5vw" }}>
              <Typography style={{ fontSize: "1.5vw", margin: " 2vw 0 4vw 0" }}>
                <b>Aadhaar Number: </b> {aadhaarNo}
              </Typography>
              <Typography style={{ fontSize: "1.5vw", margin: " 2vw 0 4vw 0" }}>
                <b>Contact: </b> {contactNo}
              </Typography>
            </div>

            <div
              style={{
                width: "15vw",
                height: "15vw",
                margin: " 2vw 0 2vw 8vw",
                borderRadius: "20px",
              }}
            >
              <img
                style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                src={image}
              />
            </div>
            <Edit
              style={{ margin: "0 0 0 3vw", cursor: "pointer" }}
              onCLick={() => {
                onEdit(data);
              }}
            />
          </div>
        </CardContent>
      </Card>
    );
  }
  else if(flag==2){
    const data = value;
    const RaiserName = value.RaiserName;
    const deceasedName = value.deceasedName;
    const reqAmount = value.reqAmount;
    return (
      <Card className={classes.root1} onClick={() => donate(data)}>
        <CardContent
          style={{ width: "70%", textAlign: "left", font: "Segoe UI" }}
        >
          <div className="row">
            <div style={{ letterSpacing: "0.1vw", margin: " 1vw 3vw 0 3vw" }}>
              <Typography style={{ fontSize: "1.5vw", margin: "1vw 0 1vw 0" }}>
                <b>Deceased Name: </b> {deceasedName}
              </Typography>
              <Typography style={{ fontSize: "1.5vw", margin: " 1vw 0 1vw 0" }}>
                <b>Raiser Name: </b> {RaiserName}
              </Typography>
              <Typography style={{ fontSize: "1.5vw", margin: " 1vw 0 1vw 0" }}>
                <b>Required Amount: </b> {reqAmount}
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
  else if(flag==3){
    const data = value;
    const name = value.name;
    const email = value.email;
    const phoneNo = value.phoneNo;
    const address = value.address;
    const pincode = value.pincode;
    const noofworker =value.noofworker;
    const basiccost =value.basiccost;
    
    return (
      <Card className={classes.root1} onClick={() => donate(data)}>
        <CardContent
          style={{ width: "100%", textAlign: "left", font: "Segoe UI" }}
        >
          <div>
            <div style={{ letterSpacing: "0.1vw", margin: " 1vw 4vw 0 4vw" }}>
              <Typography style={{ fontSize: "1.5vw", margin: "1vw 0 1vw 0",whiteSpace:"normal" }}>
                <b>Name: </b> {name}
              </Typography>
              <Typography style={{ fontSize: "1.5vw", margin: " 1vw 0 1vw 0" }}>
                <b>Address: </b> {address}
              </Typography>
            
              <Typography style={{ fontSize: "1.5vw", margin: "1vw 0 1vw 0" }}>
                <b>Email: </b> {email}
              </Typography>
              <Typography style={{ fontSize: "1.5vw", margin: " 1vw 0 1vw 0" }}>
                <b>Pincode: </b> {pincode}
              </Typography>
            
              <Typography style={{ fontSize: "1.5vw", margin: " 1vw 0 1vw 0" }}>
                <b>Phone Number: </b> {phoneNo}
              </Typography>
              <Typography style={{ fontSize: "1.5vw", margin: " 1vw 0 1vw 0" }}>
                <b>Number of workers: </b> {noofworker}
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
  else{
    // currfunds": 0,
    //         "state": "Uttar Pradesh",
    //         "CifNo": "",
    //         "type": "crematorium",
    //         "bankbranchCode": "",
    //         "bankAccNo": "",
    //         "ts": "Not updated till now",
    //         "basiccost": 2000,
    //         "BankName": "",
    //         "district": "Mathura",
    //         "id": "E4oIvLCtjtoNGUwo3mmy"
    const data = value;
    const name = value.name;
    const email = value.email;
    const phoneNo = value.phoneNo;
    const address = value.address;
    const pincode = value.pincode;
    const noofworker =value.noofworker;
    const status =value.status;
    
    return (
      <Card className={classes.root1} onClick={() => donate(data)}>
        <CardContent
          style={{ width: "100%", textAlign: "left", font: "Segoe UI" }}
        >
          <div>
            <div style={{ letterSpacing: "0.1vw", margin: " 1vw 4vw 0 4vw" }}>
              <Typography style={{ fontSize: "1.5vw", margin: "1vw 0 1vw 0",whiteSpace:"normal" }}>
                <b>Name: </b> {name}
              </Typography>
              <Typography style={{ fontSize: "1.5vw", margin: " 1vw 0 1vw 0" }}>
                <b>Address: </b> {address}
              </Typography>
            
              <Typography style={{ fontSize: "1.5vw", margin: "1vw 0 1vw 0" }}>
                <b>Email: </b> {email}
              </Typography>
              <Typography style={{ fontSize: "1.5vw", margin: " 1vw 0 1vw 0" }}>
                <b>Pincode: </b> {pincode}
              </Typography>
            
              <Typography style={{ fontSize: "1.5vw", margin: " 1vw 0 1vw 0" }}>
                <b>Phone Number: </b> {phoneNo}
              </Typography>
              <Typography style={{ fontSize: "1.5vw", margin: " 1vw 0 1vw 0" }}>
                <b>Number of workers: </b> {noofworker}
              </Typography>
              {(status=="Free") &&
                <Typography style={{ fontSize: "1.5vw", margin: " 1vw 0 1vw 0", color:"green" }}>
                <b>Status: </b> {status}
              </Typography>
              }
              {(status=="Moderate") &&
                <Typography style={{ fontSize: "1.5vw", margin: " 1vw 0 1vw 0", color: "yellow"}}>
                <b>Status: </b> {status}
              </Typography>
              }
              {(status=="Busy") &&
                <Typography style={{ fontSize: "1.5vw", margin: " 1vw 0 1vw 0", color: "orange"}}>
                <b>Status: </b> {status}
              </Typography>
              }
              {(status=="Very Busy") &&
                <Typography style={{ fontSize: "1.5vw", margin: " 1vw 0 1vw 0", color: "red"}}>
                <b>Status: </b> {status}
              </Typography>
              }
              
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
}
