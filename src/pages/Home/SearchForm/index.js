import React from 'react';
import {Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {FormGroup} from 'styled/base';
import {highWidthStyle} from 'styled/inputs';
import {Input, MessageError} from 'components';
import actionCreator from 'store/heroes/actions';
import LoadingButton from 'components/LoadingButton';
import {getIsSearching} from 'store/heroes/selectors';

import validationSchema from './validationSchema';
import {StyledForm} from './styled';

const SearchForm = () => {
  const dispatch = useDispatch();
  const isSearching = useSelector(getIsSearching);
  const handleSubmit = (values) => dispatch(actionCreator.heroesSearchRequest(values.search));

  return (
    <Formik onSubmit={handleSubmit} initialValues={{search: ''}} validationSchema={validationSchema}>
      <StyledForm>
        <FormGroup $bsStyle={highWidthStyle}>
          <Input name="search" label="Search Hero" />
          <MessageError name="search" />
        </FormGroup>
        <LoadingButton label="Search" isLoading={isSearching} />
      </StyledForm>
    </Formik>
  );
};

export default SearchForm;
