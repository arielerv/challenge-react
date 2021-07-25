import PropTypes from 'prop-types';

export default PropTypes.shape({
  name: PropTypes.string,
  image: PropTypes.shape({url: PropTypes.string}),
  powerstats: PropTypes.shape({
    intelligence: PropTypes.string,
    strength: PropTypes.string,
    speed: PropTypes.string,
    durability: PropTypes.string,
    power: PropTypes.string,
    combat: PropTypes.string,
  }),
  biography: PropTypes.shape({
    aliases: PropTypes.arrayOf(PropTypes.string),
    alignment: PropTypes.string,
    'alter-egos': PropTypes.string,
    'first-appearance': PropTypes.string,
    'full-name': PropTypes.string,
    'place-of-birth': PropTypes.string,
    publisher: PropTypes.string,
  }),
  connections: PropTypes.shape({
    'group-affiliation': PropTypes.string,
    relatives: PropTypes.string,
  }),
  work: PropTypes.shape({
    occupation: PropTypes.string,
    base: PropTypes.string,
  }),
});
