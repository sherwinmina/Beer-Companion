import React, { Component } from 'react'
import {Button, Row, Input, Icon, Card, CardTitle} from 'react-materialize';

class Signup extends Component {
  render () {
    return (
      <Row className="container valign-wrapper">
        <Card className='medium  hoverable valign-wrapper'>
          <Input s={6} label="First Name"><Icon>account_circle</Icon></Input>
          <Input s={6} label="Last Name" />
          <Input type="password" label="password" s={12} ><Icon>lock_outline</Icon></Input>
          <Input type="email" label="Email" s={12} ><Icon>email</Icon></Input>
          <Button className="right">Sign Up</Button>
        </Card>
      </Row>

      
    )
  }
}

export default Signup