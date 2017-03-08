import autoBind from 'react-autobind';
import React from 'react';

import LawyerInfoForm from 'components/forms/LawyerInfoForm';

class SettingsRoute extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  handleSubmit(formData) {
    console.debug(formData);
  }

  render() {
    return (
      <div className='SettingsRoute'>
        <LawyerInfoForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

SettingsRoute.propTypes = {};

export default SettingsRoute;
