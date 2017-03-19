import React from 'react';
import { reduxForm } from 'redux-form';

import Button from 'components/buttons/Button';
import TextInput from 'components/inputs/TextInput';

class LawyerInfoForm extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form className='Form Form--fullWidth LawyerInfoForm' onSubmit={handleSubmit}>
        <TextInput label="Lawyer's Number" name='phone' />
        <Button modifierClassName='Button--primary LawyerInfoForm-button' type='submit'>Save</Button>
      </form>
    );
  }
}

LawyerInfoForm.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
};

LawyerInfoForm = reduxForm({
  form: 'LawyerInfoForm',
})(LawyerInfoForm);

export default LawyerInfoForm;
