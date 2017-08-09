import autoBind from 'react-autobind';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import shallowCompare from 'react-addons-shallow-compare';

import actions from 'actions';

import ICIRRHeader from 'components/ICIRRHeader';

import withTranslate from 'localization/withTranslate';

class AboutICIRRRoute extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  handleBack() {
    this.props.history.goBack();
  }

  handleSelectLanguage(language) {
    this.props.actions.settings.setSettings({
      language,
    });
  }

  render() {
    return (
      <div className='AboutICIRRRoute'>
        <ICIRRHeader
          backButtonText={this.props.translate('header.back')}
          onBack={this.handleBack} 
          onSelectLanguage={this.handleSelectLanguage}
          selectedLanguage={this.props.selectedLanguage} />
        <div className='AboutICIRRRoute-content'>
          <ReactMarkdown source={this.props.translate('aboutICIRR.content')} />
        </div>
      </div>
    );
  }
}

AboutICIRRRoute.propTypes = {
  actions: React.PropTypes.object.isRequired,
  history: React.PropTypes.shape({
    goBack: React.PropTypes.func.isRequired,
  }).isRequired,
  selectedLanguage: React.PropTypes.string.isRequired,
  translate: React.PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    selectedLanguage: state.settings.language,
  };
};

export default withTranslate(withRouter(connect(mapStateToProps, actions)(AboutICIRRRoute)));
