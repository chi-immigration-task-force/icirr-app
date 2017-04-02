import React from 'react';
import { reduxForm } from 'redux-form';
import shallowCompare from 'react-addons-shallow-compare';

import LabeledTable from 'components/LabeledTable';
import LabeledTableRow from 'components/LabeledTableRow';
import Select from 'components/inputs/Select';
import TextInput from 'components/inputs/TextInput';

class SettingsForm extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <form className='Form SettingsForm'>
        <LabeledTable label='Settings'>
          <LabeledTableRow>
            <TextInput
              label="Lawyer's Number"
              modifierClassName='TextInput--inline'
              name='lawyerNumber'
              onBlur={this.props.onBlur} />
          </LabeledTableRow>
          <LabeledTableRow>
            <Select
              label='Language'
              name='language'
              onBlur={this.props.onBlur}
              options={SettingsForm.languageOptions} />
          </LabeledTableRow>
        </LabeledTable>
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
  onBlur: React.PropTypes.func.isRequired,
};

SettingsForm = reduxForm({
  form: 'SettingsForm',
})(SettingsForm);

export default SettingsForm;
