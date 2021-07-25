import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 30px;
  min-width: 150px;
  ${({$bsStyle}) => $bsStyle || ''};
`;

export const Label = styled.label`
  visibility: ${({visible}) => (visible ? 'visible' : 'hidden')};
  color: white;
  font-size: 13px;
  position: absolute;
  top: -15px;
`;
