import PropTypes from 'prop-types';
import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

/**
 * Component that provides an anchor DOM node
 * appropriately set up with noopener noreferrer (and target=_blank).
 * Without noopener, we're vulnerable to a form of cross site scripting.
 * Details:
 * - https://developers.google.com/web/tools/lighthouse/audits/noopener
 * - https://mathiasbynens.github.io/rel-noopener/
 */
class SafeAnchor extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <a {...this.props} target='_blank' rel='noopener noreferrer'>
        {this.props.children}
      </a>
    );
  }
}

SafeAnchor.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SafeAnchor;
