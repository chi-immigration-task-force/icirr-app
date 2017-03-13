import autoBind from 'react-autobind';
import React from 'react';
import { connect } from 'react-redux';

import actions from 'actions';

import Body from 'components/Body';
import Header from 'components/Header';
import LawyerInfoForm from 'components/forms/LawyerInfoForm';

class SettingsRoute extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  handleSubmit(formData) {
    this.props.actions.personalInfo.setLawyerNumber(formData.phone);
  }

  render() {
    return (
      <Body className='SettingsRoute'>
        <Header>Settings</Header>
        <LawyerInfoForm
          initialValues={{
            phone: this.props.lawyerNumber,
          }}
          onSubmit={this.handleSubmit} />
      </Body>
    );
  }
}

SettingsRoute.propTypes = {
  actions: React.PropTypes.object.isRequired,
  lawyerNumber: React.PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    lawyerNumber: state.personalInfo.lawyerNumber,
  };
};

export default connect(mapStateToProps, actions)(SettingsRoute);
