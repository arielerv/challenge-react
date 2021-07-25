/* eslint-disable */
import React from 'react';
import {Input, MessageError} from 'components';
import {Formik, Form} from 'formik';
import {Column, FormGroup} from 'styled/base';
import LoadingButton from 'components/LoadingButton';
import {useDispatch, useSelector} from 'react-redux';
import actionCreator from 'store/authorization/actions';
import {getError, getIsLoading} from "store/authorization/selectors";

import {Title} from './styled';
import validationSchema from './validationSchema';

const Login = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading)
  const error = useSelector(getError)
  const handleSubmit = ({email, password}) => dispatch(actionCreator.authLoginRequest(email, password));

  return (
    <Column>
      <Title>Challenge Frontend - React</Title>
      <Formik
          onSubmit={handleSubmit}
          initialValues={{email: 'challenge@alkemy.org', password: ''}}
          validationSchema={validationSchema}
      >
        <Form>
          <Column center>
            <FormGroup $bsStyle={{maxWidth: "380px", margin: "40px 0"}}>
              <Input name="email" placeholder="Email" />
              <MessageError name="email"/>
            </FormGroup>
            <FormGroup $bsStyle={{maxWidth: "380px", marginBottom: "40px"}}>
              <Input name="password" placeholder="password" />
              <MessageError name="password"/>
            </FormGroup>
            <LoadingButton label="login" isLoading={isLoading} />
            <MessageError message={error}/>
          </Column>
        </Form>
      </Formik>
    </Column>
  );
};

export default Login;
