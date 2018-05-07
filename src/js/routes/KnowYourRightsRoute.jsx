import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import withTranslate from 'localization/withTranslate';

// Simple component that places the Know Your Rights png file
// above the content (defined in the markdown files in static).
class KnowYourRightsRoute extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div className='KnowYourRightsRoute'>
        <img
          className='KnowYourRightsRoute-image'
          src={`/images/${this.props.translate('kyr.imageSrc')}`}
        />
        <ReactMarkdown source={this.props.translate('kyr.content')} />
      </div>
    );
  }
}
KnowYourRightsRoute.propTypes = {
  translate: PropTypes.func.isRequired,
};

export default withTranslate(KnowYourRightsRoute);
