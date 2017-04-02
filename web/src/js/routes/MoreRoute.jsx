import autoBind from 'react-autobind';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import shallowCompare from 'react-addons-shallow-compare';

import actions from 'actions';

import Body from 'components/Body';
import ICIRRHeader from 'components/ICIRRHeader';
import SettingsForm from 'components/forms/SettingsForm';

class MoreRoute extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  handleBack() {
    this.props.router.goBack();
  }

  handleSubmit(formData) {
    this.props.actions.settings.setSettings(formData);
  }

  render() {
    return (
      <Body className='MoreRoute'>
        <ICIRRHeader />
        <SettingsForm
          initialValues={{
            language: this.props.language,
            lawyerNumber: this.props.lawyerNumber,
          }}
          onSubmit={this.handleSubmit} />
      </Body>
    );
  }
}

MoreRoute.propTypes = {
  actions: React.PropTypes.object.isRequired,
  router: React.PropTypes.object.isRequired,
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
