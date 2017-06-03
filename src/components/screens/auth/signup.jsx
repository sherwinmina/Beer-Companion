import React, { Component } from 'react'
import {Button, Row, Input, Icon, Card, CardTitle} from 'react-materialize';
import { browserHistory } from 'react-router';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../../actions';

class Signup extends Component {
  render () {
    return (
      <Row className="container valign-wrapper">
        <Card className='medium  hoverable valign-wrapper'>
          <Input s={6} label="First Name"><Icon>account_circle</Icon></Input>
          <Input s={6} label="Last Name" />
          <Input type="password" label="password" s={12} ><Icon>lock_outline</Icon></Input>
          <Input type="email" label="Email" s={12} ><Icon>email</Icon></Input>
          <Button className="right" onClick={() => {browserHistory.push('/')}}>Sign Up</Button>
        </Card>
      </Row>      
    )
  }
}

function validate(formProps) {
  const errors = {};

  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if (!formProps.password) {
    errors.password = 'Please enter an password';
  }
  
  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation';
  }
  
  if (formProps.password !== formprops.passwordConfirm) {
    errors.password = 'Passwords must match';
  }

  return errors;
}

function mapStateToProps(state){
  return { errorMessage: state.auth.error };
}

// export default reduxForm({
//   form: 'signup',
//   fields: ['email', 'password', 'passwordConfirm'],
//   validate
// }, mapStateToProps, actions)(Signup);

export default Signup