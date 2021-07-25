import styled from 'styled-components';

export const Error = styled.label`
  display: inline-flex;
  font-family: sans-serif;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: 300;
  height: 40px;
  color: #e71616;
  ${({$bsStyle}) => $bsStyle || ''}
`;

export const EmptyDiv = styled.div`
  height: 40px;
  ${({$bsStyle}) => $bsStyle || ''}
`;
