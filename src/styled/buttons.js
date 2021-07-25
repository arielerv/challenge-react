import styled from 'styled-components';
import {nonSelectable, noBoxShadow} from 'styled/globals';

export const Button = styled.button.attrs(({type = 'button'}) => ({type}))` 
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${({theme, color}) => color || theme.highAccent || 'black'};
  padding: 5px 10px;
  min-width: min-content;
  text-align: center;
  box-shadow: none;
  border: none;
  color:  ${({theme}) => theme.light || 'white'};
  font-weight: 700;
  font-size: 15px;
  margin: 0.375rem;
  width: 50px;
  text-transform: capitalize;
  &:active {
    background-color: ${({theme}) => theme.deep || 'dimgrey'};
  };
  ${nonSelectable};
  ${noBoxShadow};
  &:disabled {
    background-color: ${({theme}) => theme.disabled || 'grey'};
    cursor: not-allowed;
  }
  ${({$bsStyle}) => $bsStyle || ''}
`;
