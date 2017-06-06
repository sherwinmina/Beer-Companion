import React, { Component } from 'react'
import {Button, Row, Input, Icon, Card, CardTitle, Modal} from 'react-materialize';
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
         

          <Modal
            header='Modal Header'
            trigger={
              <Button waves='light' className="right" >Sign Up</Button>
            }>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </Modal>
          
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