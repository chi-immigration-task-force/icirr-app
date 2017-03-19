import React from 'react';
import { reduxForm } from 'redux-form';
import shallowCompare from 'react-addons-shallow-compare';

import Button from 'components/buttons/Button';
import Select from 'components/inputs/Select';
import TextInput from 'components/inputs/TextInput';

class SettingsForm extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
  
  render() {
    const { handleSubmit } = this.props;
    return (
      <form className='Form Form--fullWidth SettingsForm' onSubmit={handleSubmit}>
        <TextInput label="Lawyer's Number" name='lawyerNumber' />
        <Select label='Language' name='language' options={SettingsForm.languageOptions} />
        <Button modifierClassName='Button--primary SettingsForm-button' type='submit'>Save</Button>
      </form>
    );
  }
}

SettingsForm.languageOptions = [{
  label: 'English',
  value: 'en-us',
}, {
  label: 'Spanish',
  value: 'es-es',
}];

SettingsForm.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
};

SettingsForm = reduxForm({
  form: 'SettingsForm',
})(SettingsForm);

export default SettingsForm;
