import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import withTranslate from 'localization/withTranslate';

class KnowYourRightsRoute extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <ReactMarkdown source={this.props.translate('kyr.content')} />
    );
  }
}
KnowYourRightsRoute.propTypes = {
  translate: PropTypes.func.isRequired,
};

export default withTranslate(KnowYourRightsRoute);
