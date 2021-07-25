# Challenge React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Architecture

The data flow is in <a href=https://github.com/reduxjs/react-redux>redux</a> and <a href=https://github.com/redux-saga/redux-saga>redux-saga</a>.<br/>

For the routes and navigation, use <a href=https://github.com/supasate/connected-react-router>connected-react-router</a>, I think it is convenient to have the user activity in the redux.
It seeks to have a simple and functional code, for that reason <a href=https://github.com/jkeam/reduxsauce>reduxsauce</a> was used.<br/>

For the handling styles use <a href=https://styled-components.com/docs>styled-components</a>.
Also has already set husky for the pre-commit based on <a href=https://github.com/conventional-changelog/conventional-changelog>conventional changelog</a>.


## Environment Variables
You should get an access token on the page of <a href=https://superheroapi.com>superheroapi</a> and set `REACT_APP_API_KEY` in the env file.