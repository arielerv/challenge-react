import PropTypes from 'prop-types';

export default PropTypes.oneOfType([
  PropTypes.shape({}),
  PropTypes.string,
  PropTypes.node,
]);
