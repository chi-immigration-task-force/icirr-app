import autoBind from 'react-autobind';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import shallowCompare from 'react-addons-shallow-compare';

import actions from 'actions';

import Body from 'components/Body';
import ICIRRHeader from 'components/ICIRRHeader';
import LabeledTable from 'components/LabeledTable';
import LabeledTableRow from 'components/LabeledTableRow';
import SettingsForm from 'components/forms/SettingsForm';

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

  render() {
    return (
      <Body className='MoreRoute'>
        <ICIRRHeader />
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
            Signup form
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
  console.debug('state.settings', state.settings);
  return {
    language: state.settings.language,
    lawyerNumber: state.settings.lawyerNumber,
  };
};

export default withRouter(connect(mapStateToProps, actions)(MoreRoute));
