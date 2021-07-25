import styled, {css} from 'styled-components';
import {Field} from 'formik';
import {getPlaceholderColor} from 'styled/globals';

export const Container = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
`;

const marginWithoutExtremes = css`
  margin-left: 5px;
  margin-right: 5px;
  &:first-of-type {
    margin-left: 0;
  };
  &:last-of-type {
    margin-right: 0;
  };
`;

export const fullWidthStyle = css`
  max-width: 100%;
  ${marginWithoutExtremes}
`;

export const highWidthStyle = css`
  max-width: 600px;
  ${marginWithoutExtremes}
`;

export const commonWidthStyle = css`
  max-width: 380px;
  ${marginWithoutExtremes}
`;

export const middleWidthStyle = css`
  max-width: 250px;
  ${marginWithoutExtremes}
`;

export const smallWidthStyle = css`
  max-width: 150px;
  ${marginWithoutExtremes}
`;

export const minWidthStyle = css`
  max-width: min-content;
  ${marginWithoutExtremes}
`;

export const checkboxStyle = css`
    min-width: 160px;
    max-width: 160px;
    margin: 10px 10px 20px 0;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const Input = styled(Field).attrs(({noFormik, type = 'text', $component = undefined}) => ({
  as: noFormik ? 'input' : $component || Field,
  type,
}))`
  border-color: transparent transparent #fff;
  text-align: center;
  opacity: 1;
  color: #fff;
  font-weight: 400;
  border-bottom: 1px ${({theme}) => theme.highAccent || 'grey'} solid;
  border-top-style: initial;
  border-right-style: initial;
  border-left-style: initial;
  border-image: initial;
  background: transparent;
  border-radius: 0 !important;
  margin: 10px;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  display: block;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  overflow: visible;
  min-width: 150px;
  flex: 1;
  height: 30px;
  max-height: 30px;
  &:active,
  &:focus {
    border-top: none;
    background: transparent;
    border-bottom: 1px solid #fdc93b;
    box-shadow: 0 4px 2px -2px hsla(0, 0%, 0%, 0.1);
    outline: none;
    color: #fff;
    border-bottom-color: ${({theme}) => theme.highAccent || 'grey'};
  };
  &:-webkit-autofill::first-line {
    font-size: initial;
    line-height: inherit;
  };
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s;
    background: transparent !important;
    -webkit-text-fill-color: #000 !important;
  };
  ${getPlaceholderColor()};
  &:disabled {
    border-bottom: 1px solid grey;
  };
  ${({$bsStyle}) => $bsStyle || ''};
`;

export const TextBox = styled(Field).attrs(({noFormik, type = 'input'}) => ({
  as: noFormik ? 'input' : Field,
  type,
}))`
  border-radius: 3px;
  border-color: transparent transparent #fff;
  text-align: center;
  opacity: 1;
  color: #000;
  font-weight: 400;
  border: 1px ${({theme}) => theme.opposite || 'grey'} solid;
  border-image: initial;
  background: transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  display: block;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  overflow: visible;
  min-width: 250px;
  flex: 1;
  height: 30px;
  max-height: 30px;
  &:active,
  &:focus {
    background: transparent;
    border: 1px solid ${({theme}) => theme.highAccent || 'grey'};
    box-shadow: none;
    outline: none;
    color: #000;
  };
  &:-webkit-autofill::first-line {
    font-size: initial;
    line-height: inherit;
  };
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s;
    background: transparent !important;
    -webkit-text-fill-color: #000 !important;
  };
  ${getPlaceholderColor()};
  ${({$bsStyle}) => $bsStyle || ''};
`;

export const Textarea = styled.textarea`
  width: 100%;
  border: 1px solid ${({theme}) => theme.highAccent || 'grey'};
  border-radius: 3px;
  &:active,
  &:focus {
    background: transparent;
    box-shadow: 0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 1px 4px hsla(0, 0%, 0%, 0.1);
    outline: none;
    color: #000;
    border-bottom-color: ${({theme}) => theme.highAccent || 'grey'};
  };
`;
