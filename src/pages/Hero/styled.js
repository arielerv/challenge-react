import styled, {css} from 'styled-components';
import placeholder from 'assets/placeholder.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 10px 20px;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Photo = styled.img.attrs(({image}) => ({src: image || placeholder}))`
  max-width: 100%;
  margin-bottom: 20px;
  border: 2px grey solid;
`;

export const Title = styled.label`
  font-size: 30px;
  color: whitesmoke;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;
`;

export const informationColumn = css`
  margin: 0 20px;
  @media screen and (max-width: ${({theme}) => `${theme.breakpoints.TABLET || 767}px` }) {
    margin: 0;
  };
`;
