import React from 'react';

import { ifClickable } from 'utils/touchUtils';

class Button extends React.Component {
  render() {
    return (
      <button
        className={this.props.className}
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
  type: React.PropTypes.string.isRequired,
  // FUNCTIONS
  onClick: React.PropTypes.func,
};

Button.defaultProps = {
  className: 'Button',
  type: 'button',
};

export default Button;
