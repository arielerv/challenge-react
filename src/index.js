import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from 'store';
import {breakpoints, theme} from 'constant';
import {ThemeProvider} from 'styled-components';

import Routes from './routes';
import {GlobalStyle} from './styled';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={{...theme, breakpoints}}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
