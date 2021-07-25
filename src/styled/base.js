import styled from 'styled-components';

export const Label = styled.div`
  color: black;
  align-self: center;
  margin: 0 5px;
  ${({strong}) => (strong ? 'font-weight: bold' : '')}
  ${({$bsStyle}) => $bsStyle || ''}
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: ${({center, right}) => {
    if (center) {
      return 'center';
    }
    return right ? 'flex-end' : 'initial';
  }};
  height: ${({fullHeight}) => (fullHeight ? '100%' : 'initial')};
  ${({$bsStyle}) => $bsStyle || ''}
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${({flex}) => (flex ? 1 : 'initial')};
  align-items: ${({left, center, right}) => {
    if (!left && !center && !right) {
      return 'initial';
    }
    if (center) {
      return 'center';
    }
    return right ? 'flex-end' : 'flex-start';
  }};
  width: ${({fullWidth}) => (fullWidth ? '100%' : 'initial')};
  justify-content: ${({centered}) => (centered ? 'center' : 'initial')};
  padding-right: ${({right}) => (right ? '20px' : 0)};
  ${({$bsStyle}) => $bsStyle || ''}
`;

export const FormGroup = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-bottom: 10px;
  flex: 1;
  width: 100%;
  @media screen and (max-width: 580px) {
    display: contents
  };
  ${({$bsStyle}) => $bsStyle || ''};
`;
