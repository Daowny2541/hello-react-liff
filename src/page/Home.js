import React from 'react'
import { Button, Form, FormGroup, Label, Input, Col, FormText } from 'reactstrap';

const Home = (props) => {
    return (
<Form>
  <Col md-6>
    <FormGroup tag="fieldset">
      <legend>Register</legend>
        <FormText color="muted">
          Welcome to Staff pay slip This is the registerion page to access intermal services.<br />Please register to login.
        </FormText>
    </FormGroup>
  </Col>
  <Col md-16>
    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
      <Label for="firstName" className="mr-sm-2">First name</Label>
      <Input type="text" name="firstName" id="firstName" placeholder="Enter first name" />
    </FormGroup>
  </Col>
  <Col md-16>
    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
      <Label for="lastName" className="mr-sm-2">Last name</Label>
      <Input type="text" name="lastName" id="lastName" placeholder="Enter last name" />
    </FormGroup>
  </Col>
  <Col md-16>
    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
      <Label for="exampleEmail" className="mr-sm-2">Email</Label>
      <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
    </FormGroup>
  </Col>
  <Col md-16>
    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
      <Label for="examplePassword" className="mr-sm-2">Password</Label>
      <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
    </FormGroup>
  </Col>
  <br/>
  <Col sm-16>
    <Button outline color="primary">Register</Button>
  </Col>
  
</Form>
        
    );
}

export default Home