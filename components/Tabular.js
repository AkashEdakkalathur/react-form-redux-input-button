  

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab,Tabs ,Row, Col,Nav,Sonnet  } from 'react-bootstrap';

const Tabular = (props) =>{
  
return(
  
   <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="home" title="Home">
    <Sonnet />
  </Tab>
  <Tab eventKey="profile" title="Profile">
    <Sonnet />
  </Tab>
  <Tab eventKey="contact" title="Contact" disabled>
    <Sonnet />
  </Tab>
</Tabs>
);

}
export default Tabular;