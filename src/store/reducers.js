import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import authorization from 'store/authorization/reducers';
import heroes from 'store/heroes/reducers';

export default (history) => combineReducers({
  router: connectRouter(history),
  authorization,
  heroes,
});
