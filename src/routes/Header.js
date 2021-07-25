import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {push} from 'connected-react-router';
import {Menu} from 'components';
import {clearToken} from 'services/storage';
import {routes} from 'constant';
import {getToken} from 'store/authorization/selectors';

const Header = () => {
  const dispatch = useDispatch();
  const handleRedirect = ({target: {id}}) => dispatch(push(id));
  const isLogged = useSelector(getToken);

  const handleLogout = () => {
    clearToken();
    window.location.href = routes.ROOT;
  };

  return <Menu onRedirect={handleRedirect} onLogout={handleLogout} show={!!isLogged} />;
};

export default Header;
