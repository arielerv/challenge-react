import styled from 'styled-components';
import placeholder from 'assets/placeholder.png';
import {nonSelectable} from 'styled/globals';

const getBorder = (noShowBorders, isSelected) => {
  if (noShowBorders) {
    return 'lightgrey';
  }
  return isSelected ? 'red' : 'lightgrey';
};

export const Container = styled.div.attrs({role: 'button'})`
  display: flex;
  flex-direction: column;
  border: 2px solid ${({noShowBorders, isSelected}) => (getBorder(noShowBorders, isSelected))};
  height: 400px;
  width: 240px;
  margin: 20px;
  border-radius: 20px;
  background-image: url(${({image}) => image || placeholder});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  ${nonSelectable}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 20px;
`;

export const Title = styled.div`
  color: black;
  font-weight: bold;
  text-shadow: -2px 2px 2px lightgrey;
  text-align: center;
  font-size: 18px;
`;

export const Close = styled.div`
  position: absolute;
  top: 0;
  left: 10px;
  width: 0;
  height: 40px;
  border-left: 15px solid ${({theme}) => theme.accent || 'white'};
  border-right: 15px solid ${({theme}) => theme.accent || 'white'};
  border-bottom: 5px solid transparent;
  z-index: 1;
`;

export const ButtonInfo = styled.button`
  position: absolute;
  border-radius: 50%;
  border: none;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  background: ${({theme}) => theme.info || 'lightBlue'};
  color: white;
  &:hover {
    filter: brightness(0.9)
  }
`;
