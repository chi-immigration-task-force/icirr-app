import autoBind from 'react-autobind';
import React from 'react';
import { withRouter } from 'react-router';
import shallowCompare from 'react-addons-shallow-compare';

import ICIRRHeader from 'components/ICIRRHeader';

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

  render() {
    return (
      <div className='AboutICIRRRoute'>
        <ICIRRHeader onBack={this.handleBack} />
        <div className='AboutICIRRRoute-content'>
          About ICIRR Goes Here
        </div>
      </div>
    );
  }
}

AboutICIRRRoute.propTypes = {
  history: React.PropTypes.shape({
    goBack: React.PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(AboutICIRRRoute);
