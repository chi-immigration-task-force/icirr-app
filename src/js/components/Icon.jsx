import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

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
