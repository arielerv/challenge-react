import {css} from 'styled-components';

export const nonSelectable = css`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const noBoxShadow = css`
  &:active, :focus {
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  };
`;

export const getPlaceholderColor = (color) => css`
  ::-webkit-input-placeholder {
    /* WebKit, Blink, Edge */
    color: ${color || 'grey'};
  };
  :-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color:  ${color || 'grey'};
  };
  ::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color:  ${color || 'grey'};
  };
  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color:  ${color || '#ffffff66'};
  };
  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${color || '#ffffff66'};
  };
  ::placeholder {
    /* Most modern browsers support this now. */
    color: ${color || 'grey'};
  };
`;
