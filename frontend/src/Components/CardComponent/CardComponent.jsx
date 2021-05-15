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
  if (flag) {
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
  else{
    const data = value;
    const RaiserName = value.RaiserName;
    const deceasedName = value.deceasedName;
    const reqAmount = value.reqAmount;
    return (
      <Card className={classes.root} onClick={() => donate(data)}>
        <CardContent
          style={{ width: "100%", textAlign: "left", font: "Segoe UI" }}
        >
          <div className="row">
            <div style={{ letterSpacing: "0.1vw", margin: " 3vw 5vw 0 5vw" }}>
              <Typography style={{ fontSize: "1.5vw", margin: "2vw 0 4vw 0" }}>
                <b>Deceased Name: </b> {deceasedName}
              </Typography>
              <Typography style={{ fontSize: "1.5vw", margin: " 2vw 0 4vw 0" }}>
                <b>Raiser Name: </b> {RaiserName}
              </Typography>
            </div>
            <div style={{ letterSpacing: "0.1vw", margin: " 3vw 5vw 0 5vw" }}>
              <Typography style={{ fontSize: "1.5vw", margin: " 2vw 0 4vw 0" }}>
                <b>Required Amount: </b> {reqAmount}
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
}
