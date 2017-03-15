import cx from 'classnames';
import React from 'react';

import { ifClickable } from 'utils/touchUtils';

class Button extends React.Component {
  render() {
    const className = cx(this.props.className, this.props.modifierClassName);
    return (
      <button
        className={className}
        disabled={this.props.disabled}
        type={this.props.type}
        onClick={ifClickable(this.props.onClick)}>
        <div className='Button-content'>
          {this.props.children}
        </div>
      </button>
    );
  }
}

Button.propTypes = {
  children: React.PropTypes.node.isRequired,
  disabled: React.PropTypes.bool,
  className: React.PropTypes.string.isRequired,
  modifierClassName: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  // FUNCTIONS
  onClick: React.PropTypes.func,
};

Button.defaultProps = {
  className: 'Button',
  modifierClassName: 'Button--primary',
  type: 'button',
};

export default Button;
