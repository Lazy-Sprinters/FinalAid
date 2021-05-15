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
import {Edit} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "47%",
    borderRadius: "20px",
    background: "#D7D8DE 0% 0% no-repeat padding-box",
    color: "#000000",
    font: "Segoe UI",
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

export default function CardComponent({ User,onEdit}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const previewUser = (User) => {
    // selectUser(User);
    //Open Modal ->> respective
    //Common Modal -> Before Pics || After Pics || Worker Name & PhoneNumber
    //> Active   : Before Pics || Reject with reason -> No worker has solved it yet
    //> Pending  : Common Modal -> waiting for approval of work
    //> Resolved : Common Modal -> for auditing only
  };

  const data = User;
  const name = User.name;
  const contactNo = User.contactNo;
  const aadhaarNo = User.aadhaarNo;
  const address = User.address;
  const image = User.image;
  return (
    <Card className={classes.root}>
      <CardContent
        style={{ width: "100%", textAlign: "left", font: "Segoe UI" }}
      >
        <Typography style={{ fontSize: "1.5vw" }}>
          <b>Name:</b> {name}
        </Typography>
        <Typography style={{ fontSize: "1.5vw" }}>
          <b>Address:</b> {address}
        </Typography>
        <Typography style={{ fontSize: "1.5vw" }}>
          <b>Aadhaar Number:</b> {aadhaarNo}
        </Typography>
        <Typography style={{ fontSize: "1.5vw" }}>
          <b>Contact:</b> {contactNo}
        </Typography>
        <div style={{ width: "5vw", height: "5vw" }}>
          <img style={{ width: "100%", height: "100%" }} src={image} />
        </div>
        <Edit onCLick={() => {onEdit(data)}}/>
      </CardContent>
    </Card>
  );
}
