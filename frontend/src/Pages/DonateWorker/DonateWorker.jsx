import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import DonateModal from "../../Components/DonateModal/DonateModal";
import CardComponent from "../../Components/CardComponent/CardComponent";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import Navbar1 from "../../Components/Navbar/Navbar";

const DonateWorker = () => {
  const [modalShow1, setModalShow1] = React.useState(false);
  const [organisationData, setOrganisationData] = React.useState("");
  const [data, setData] = React.useState(null);
  const [showOrganisations, setShowOrganisations] = React.useState("");
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const history = useHistory();

  const donate = (data1) => {
    setData(data1);
    setModalShow1(true);
  };

  const displayOrganisation = (data1) => {
    const code = [];
    console.log(data1)
    // console.log(data.length)
    // data1.map((value) => {
    //   code.push(<CardComponent value={value} flag={false} onEdit={0} donate={donate}/>);
    // });
    for(let i=0;i<data1.length;i+=2){
        if(data1.length%2!=0 && i==data1.length-1){
            code.push(
                <div style={{justifyContent: "space-between",padding:"2vw 0"}} className="row1" >
                <CardComponent  value = {data1[i]}  flag={3} onEdit={0} donate={donate}/>
                </div>
            )
        }
        else{
            code.push(
                <div style={{justifyContent: "space-between",padding:"2vw 0"}} className="row1" >
                <CardComponent  value = {data1[i]}  flag={3} onEdit={0} donate={donate}/>
                <CardComponent  value = {data1[i+1]}  flag={3} onEdit={0} donate={donate}/>
                </div>
            )
        }
    }
    setShowOrganisations(code);
  };
  
  useEffect(() => {
    //Call Api
    const x = { user, token };
    Axios.post("http://localhost:5000/donate/allcentresfund", x)
      .then((res) => {
        if (res.data.success) {
          console.log("Organisations displayed");
          console.log(res.data.response);
          //Store all organisation Data -> setOrganisationData();
          setOrganisationData(res.data.response);
          displayOrganisation(res.data.response)
          // dispatch({type:actionTypes.CHANGE_USER , user:res.data.response.user})
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
      <Navbar1 />
      <Helmet>
        <title>FinalAid | Donate to Poor</title>
        <meta
          name="description"
          content="This is the Organisation page for the admins"
        />
      </Helmet>
     <DonateModal
        show={modalShow1}
        data={data}
        onHide={() => setModalShow1(false)}
        size="lg"
        flag={2}
     />
     
      <div style={{ margin: "3vw 5vw 3vw 5vw" }}>{showOrganisations}</div>{" "}
    </>
  );
};

export default DonateWorker;
