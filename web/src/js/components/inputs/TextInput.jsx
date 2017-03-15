import cx from 'classnames';
import React from 'react';
import { Field } from 'redux-form';

class TextInput extends React.Component {
  render() {
    const wrapperClassName = cx(this.props.className, this.props.modifierClassName);
    return (
      <div className={wrapperClassName}>
        {this.props.label && <label className='TextInput-label' htmlFor={this.props.name}>{this.props.label}</label>}
        <Field className='TextInput-input' name={this.props.name} component='input' type='text' />
      </div>
    );
  }
}

TextInput.propTypes = {
  className: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  modifierClassName: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
};

TextInput.defaultProps = {
  className: 'TextInput',
  modifierClassName: 'TextInput--default',
};

export default TextInput;
