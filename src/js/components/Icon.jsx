import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * Helper component (this is a react stateless functional component)
 * that abstracts away the material-icons classname.
 * @param {object} props the necessary props for the icon
 * @returns {JSX.Element} an icon DOM node for a material-icons icon
 */
export default function Icon(props) {
  const className = cx('material-icons', props.className);
  return (
    <i className={className}>{props.icon}</i>
  );
}

Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
};
