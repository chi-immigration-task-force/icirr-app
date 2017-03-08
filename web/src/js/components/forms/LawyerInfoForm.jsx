import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Button from 'components/buttons/Button';


class LawyerInfoForm extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form className='LawyerInfoForm' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='phone'>Phone</label>
          <Field name='phone' component='input' type='text' />
        </div>
        <Button type='submit'>Save</Button>
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
