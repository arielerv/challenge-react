import styled, {css} from 'styled-components';

export const Stats = styled.div`
  background-color: rgba(255,255,255,0.7);
  padding: 0 10px;
  bottom: 0;
  width: 100%;
  display: block;
  border-top: 1px solid grey;
  box-shadow: 0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1);
  ${({isCard}) => isCard && css`
    min-width: 300px;
    border-radius: 10px;
    margin-bottom: 10px;
  `};
  ${({$bsStyle}) => $bsStyle};
`;

export const Title = styled.div`
  color: black;
  font-weight: bold;
  text-shadow: -2px 2px 2px lightgrey;
  text-align: center;
  font-size: 18px;
`;

export const Item = styled.div`
  color: black;
  text-transform: capitalize;
`;
