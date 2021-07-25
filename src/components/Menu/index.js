import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useLocation} from 'react-router';
import {routes} from 'constant';
import Sidebar from 'components/Sidebar';

import {SidebarItem} from './styled';

const Menu = ({onRedirect, onLogout, show}) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const getPathName = (path) => location.pathname === path;

  const onClickSidebar = (e) => {
    setOpen(false);
    onRedirect(e);
  };

  return (
    show && (
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarItem id={routes.ROOT} onClick={onClickSidebar} active={getPathName(routes.ROOT)}>
          Home
        </SidebarItem>
        <SidebarItem onClick={onLogout}>Sign Out</SidebarItem>
      </Sidebar>
    )
  );
};

Menu.propTypes = {
  onRedirect: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  show: PropTypes.bool,
};

Menu.defaultProps = {
  show: false,
};

export default Menu;
