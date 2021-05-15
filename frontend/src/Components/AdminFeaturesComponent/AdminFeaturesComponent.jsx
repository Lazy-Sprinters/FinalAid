import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import RegisterModal from "../RegisterModal/RegisterModal";
import AddNewVolunteer from "../AddNewVolunteer/AddNewVolunteer";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import * as actionTypes from '../../actions/actions';


const AdminFeaturesComponent = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow1, setModalShow1] = React.useState(false);

  const [time, setTime] = React.useState("");
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();
  const history = useHistory();


  const setStatus = (status) => {

    const data = { status };
    const x={user,token,data};
    console.log(x);
    //API Call
    Axios.post("http://localhost:5000/org/updatestatus", x)
      .then((res) => {
        if (res.data.success) {
          console.log("Update Time");
          console.log(res.data.response);
          // setTime(res.data.response);
          dispatch({type:actionTypes.CHANGE_USER , user:res.data.response.user})
        } else {
          console.log(res.data.message);
        }
      })
      .catch((err) => {
        console.log("Axios", err);
      });
    //setTime(res.data.response);

  };

  useEffect(() => {
    //API Call
    const x={user,token};
    Axios.post("http://localhost:5000/org/updatestatus", x)
      .then((res) => {
        if (res.data.success) {
          console.log("Update Time");
          console.log(res.data.response);
          dispatch({type:actionTypes.CHANGE_USER , user:res.data.response.user})
        } else {
          console.log(res.data.message);
        }
      })
      .catch((err) => {
        console.log("Axios", err);
      });
  }, []);
  return (
    <>
      <RegisterModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
      />
      <AddNewVolunteer
        show={modalShow1}
        onHide={() => setModalShow1(false)}
        size="lg"
      />
      
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
        <div className="row" style={{ marginLeft: "-6vw", width: "90vw" }}>
          <div
            style={{
              width: "43.5vw",
              margin: "3.5vw 0 0 6vw",
              height: "30vw",
              background: "#D7D8DE",
              padding: "2vw 14vw 0 2vw",
              textAlign: "left",
              fontsamily: "Poppins",
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
              onClick={() => setModalShow(true)}
            >
              Register
            </Button>
          </div>
          <RegisterModal />
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
              fontsamily: "Poppins",
            }}
          >
            <div
              style={{
                fontWeight: "600",
                fontSize: "3vw",
              }}
            >
              Manage Your <br />
              <div style={{ color: "#707070" }}> Volunteers </div>
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
              onClick={() => history.push("/volunteers")}
            >
              Manage
            </Button>
          </div>
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
              fontsamily: "Poppins",
            }}
          >
            <div
              style={{
                fontWeight: "600",
                fontSize: "3vw",
              }}
            >
              Update your status <br />
              of
              <span style={{ color: "#707070" }}> crematorial</span>
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
            <div
              style={{
                fontWeight: "700",
                fontSize: "1.7vw",
                margin: "1vw 0 1vw 0",
                color: "#707070",
              }}
            >
             {user.ts!="Not updated till now" && <> Last Updated: {user.ts} </> || <> {user.ts} </>}
            </div>
            <div className="row">
              <Button
                onClick={() => setStatus("Free")}
                style={{
                  background: user.status=="Free" ? "#A9A9A9" : "transparent",
                  border: "1px solid #707070",
                  padding: "0.2vw 0 0.2vw 0",
                  borderRadius: "20px",
                  width: "7vw",
                  margin: "0 0 0 1vw",
                  fontSize: "1.2vw",
                  color: "#707070",
                }}
              >
                Free
              </Button>
              <Button
                onClick={() => setStatus("Moderate")}
                style={{
                  background: user.status=="Moderate" ? "#A9A9A9" : "transparent",
                  border: "1px solid #707070",
                  padding: "0.2vw 0 0.2vw 0",
                  borderRadius: "20px",
                  width: "7vw",
                  margin: "0 0 0 1vw",
                  fontSize: "1.2vw",
                  color: "#707070",
                }}
              >
                Moderate
              </Button>
              <Button
                onClick={() => setStatus("Busy")}
                style={{
                  background: user.status=="Busy" ? "#A9A9A9" : "transparent",
                  border: "1px solid #707070",
                  padding: "0.2vw 0 0.2vw 0",
                  borderRadius: "20px",
                  width: "7vw",
                  margin: "0 0 0 1vw",
                  fontSize: "1.2vw",
                  color: "#707070",
                }}
              >
                Busy
              </Button>
              <Button
                onClick={() => setStatus("Very Busy")}
                style={{
                  background: user.status=="Very Busy" ? "#A9A9A9" : "transparent",
                  border: "1px solid #707070",
                  padding: "0.2vw 0 0.2vw 0",
                  borderRadius: "20px",
                  width: "7vw",
                  margin: "0 0 0 1vw",
                  fontSize: "1.2vw",
                  color: "#707070",
                }}
              >
                Very Busy
              </Button>
            </div>
          </div>
          <div
            style={{
              width: "30vw",
              margin: "7vw 0 0 -10vw",
              height: "23vw",
              background: "black",
            }}
          >
            <img src="1" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminFeaturesComponent;
