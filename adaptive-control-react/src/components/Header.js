import React from "react";
import Card from "react-bootstrap/Card";

const Header = () => <>
    <Card className="text-center" style={{"background-color": "#343a40", "opacity": 0.95}}> 
    <Card.Body>
    <h1 className="text-white" style={{"background-color": "#343a40", "opacity": 0.95}}>
      {" "}Adaptive Control of COVID-19 in India{" "}
    </h1>
    <Card.Subtitle as="h3" className="text-light">
        {" "}
        Tracking disease and recommending control efforts across states and districts
      </Card.Subtitle>
      <hr />
      <div className="bg-light rounded">
      <strong>Disclaimer</strong>: Our estimators are based on data from <a href="https://www.covid19india.org">Covid19India</a>, a crowd-sourced database of infection information for India. The estimators and visualizations on this website are an active work in progress and subject to revision as we improve their accuracy. If you have comments or corrections, please <a href="https://github.com/mansueto-institute/adaptive-control-feedback/issues/new/choose">file an issue on GitHub</a>.
      </div>
    </Card.Body>
  </Card>
</>

export default Header;