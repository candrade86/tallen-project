import React from "react";
// react plugin for creating charts
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridItem from "../components/Grid/GridItem";
import GridContainer from "../components/Grid/GridContainer.js";
import Card from "../components/Card/Card.js";
import CardHeader from "../components/Card/CardHeader.js";
import CardBody from "../components/Card/CardBody";
import styles from "../assets/dashboardStyle";
import "../Pages/Dashboard.css"
import { withRouter } from "react-router-dom";

const useStyles = makeStyles(styles);

const Dashboard = props => {
  const classes = useStyles();
  return (
      //Simple dashboard component
    <div className="dashboardBg" style={{height: "100%"}}>
      <GridContainer style={{padding: "0", height: "100%"}}>
        <GridItem xs={12} sm={12} md={12} style={{padding: "0"}}>
          <Card style={{height: "100%"}}>
            <CardHeader color="whiteColor" style={{display: "flex", justifyContent: "space-between"}}>
              <div>
                <h4 className={classes.cardTitle}>Conference Rooms</h4>
                <p className={classes.cardCategoryBlue}>
                    November 4th, 2020
                </p>
              </div>
              <div className="dashboardLogo"></div>
            </CardHeader>
            <CardBody style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", height: "75%"}}>
            <GridItem style={{ display: "flex", justifyContent: "center", width: "100%"}}>
                <div onClick={()=> props.history.push("./meeting")} className="card">
                Collaborate (Samba Live)
                </div>
            </GridItem>
            <GridItem style={{display: "flex", justifyContent: "center", width: "100%"}}>
                <div onClick={()=> props.history.push("./meeting")} className="card" >
                Talcast (webcasts.com)
                </div>
            </GridItem>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withRouter(Dashboard);