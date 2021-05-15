import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {Card , CardHeader , CardContent , CardActions ,Avatar , Typography } from '@material-ui/core';
import { FormatListBulletedRounded} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '47%',
    borderRadius: '20px',
    background: '#C0E1FA 0% 0% no-repeat padding-box',
    color:'#2D7B90',
    font: 'Segoe UI'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor:'##D7D8DE',
    width:'4.5vw',
    height:'4.5vw',
  },
}));

export default function CardComponent({User,selectUser}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const previewUser = (User) =>{
    // selectUser(User);
      //Open Modal ->> respective
      //Common Modal -> Before Pics || After Pics || Worker Name & PhoneNumber
      //> Active   : Before Pics || Reject with reason -> No worker has solved it yet
      //> Pending  : Common Modal -> waiting for approval of work
      //> Resolved : Common Modal -> for auditing only
  }
  
  const data = User;
  const name = User.name;
  const empId = User.empId;
  const contactNo = User.contactNo;
  const aadhaarNo = User.aadhaarNo;
  const address = User.address;
  const image = User.image;
  return (
    <Card className={classes.root}>
      <CardContent style={{width:"100%",textAlign:"left",font: 'Segoe UI'}}>
        <Typography style={{fontSize:"1.5vw"}}>
          <b>Title:</b> {title}
        </Typography>
        <Typography style={{fontSize:"1.5vw"}}>
          <b>Complainant Phone Number:</b> {phoneNo}
        </Typography>
        <Typography style={{fontSize:"1.5vw"}}>
          <b>Address:</b> {address}
        </Typography>
        
      </CardContent>
      <div       
        style={{ 
            cursor:"pointer", 
            height:"3vw",
            padding:"0.3vw",
            fontSize:"1.5vw",
            textAlign:"center",
            background:"##D7D8DE 0% 0% no-repeat padding-box",
            color:"#FFFFFF"
        }}
        >
        Preview
      </div>
    </Card>
  );
}