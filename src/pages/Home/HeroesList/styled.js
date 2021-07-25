import styled from 'styled-components';

export const Container = styled.div``;

export const WrapperCarrousel = styled.div`
  display: block;
  margin: 8px auto 0 auto;
  max-width: 100%;
  .slick-arrow {
    opacity: 1;
    padding: 5px;
    height: 16px;
    width: 16px;
    right: 0;
    transform: rotate(-45deg);
    border: solid ${({theme}) => theme.accent || 'white'};
    border-width: 0 3px 3px 0;
    z-index: 2;
    &:before {
      content: none;
    }
    &.slick-prev {
      transform: rotate(135deg);
      left: 0;
    }
  }
  .slick-dots {
    margin-bottom: 0;
    bottom: 0;
    left: 8px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    li {
      margin: 0 0;
      padding: 0 5px;
      @media screen and (min-width: 767px) {
        margin: 0 1px;
      }
      button {
        &:before {
          height: 6px;
          width: 6px;
          opacity: 0.4;
          color: transparent;
          border-radius: 100%;
          background: ${({theme}) => theme.accent || '#88acd0'};
          @media screen and (min-width: 767px) {
            width: 8px;
            height: 8px;
          }
        }
      }
      &.slick-active {
        button {
          &:before {
            opacity: 1;
          }
        }
      }
    }
  }
`;
