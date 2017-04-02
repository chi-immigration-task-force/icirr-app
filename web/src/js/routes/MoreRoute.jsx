import autoBind from 'react-autobind';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import shallowCompare from 'react-addons-shallow-compare';

import actions from 'actions';

import Body from 'components/Body';
import LabeledTable from 'components/LabeledTable';
import LabeledTableRow from 'components/LabeledTableRow';
import SettingsForm from 'components/forms/SettingsForm';
import SignupForm from 'components/forms/SignupForm';

class MoreRoute extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  handleInputBlur(event) {
    this.props.actions.settings.setSettings({
      [event.target.name]: event.target.value,
    });
  }

  handleSignup(formData) {
    console.info(`Submitted form with name ${formData.name} and email ${formData.email}`);
  }

  render() {
    return (
      <Body className='MoreRoute'>
        <SettingsForm
          initialValues={{
            language: this.props.language,
            lawyerNumber: this.props.lawyerNumber,
          }}
          onBlur={this.handleInputBlur} />
        <LabeledTable label='Get Involved'>
          <LabeledTableRow>
            <div className='MoreRoute-aboutLink'>About ICIRR (TODO)</div>
          </LabeledTableRow>
          <LabeledTableRow>
            <SignupForm onSubmit={this.handleSignup} />
          </LabeledTableRow>
        </LabeledTable>
      </Body>
    );
  }
}

MoreRoute.propTypes = {
  actions: React.PropTypes.object.isRequired,
  language: React.PropTypes.string,
  lawyerNumber: React.PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    language: state.settings.language,
    lawyerNumber: state.settings.lawyerNumber,
  };
};

export default withRouter(connect(mapStateToProps, actions)(MoreRoute));
