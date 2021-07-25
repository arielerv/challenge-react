import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

import {
  Body, ToggleButton, Content, WrapperContent, Title,
} from './styled';

const Sidebar = ({open, setOpen, children}) => {
  const containerRef = useRef();
  const toggleMenu = () => setOpen(!open);

  const handleClickOutside = (event) => {
    if (containerRef?.current?.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <>
      <ToggleButton onClick={toggleMenu} close={!open} isOpen={open}>
        <span className={`top ${open ? 'open' : ''}`} />
        <span className={`mid ${open ? 'open' : ''}`} />
        <span className={`bot ${open ? 'open' : ''}`} />
      </ToggleButton>
      <Body className="no-select" isOpen={open} ref={containerRef}>
        <WrapperContent>
          <Title className="no-select">Menu</Title>
          <Content className="no-select">{children}</Content>
        </WrapperContent>
      </Body>
    </>
  );
};

Sidebar.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.arrayOf(PropTypes.shape({}))]),
};

Sidebar.defaultProps = {
  children: null,
  open: false,
};

export default Sidebar;
