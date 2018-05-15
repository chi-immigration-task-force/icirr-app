import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import PartnerInfo from 'components/PartnerInfo';

/**
 * Just wraps the PartnerInfo component in a div with a different
 * class name so that it can be styled when viewed in the list view.
 */
class OrganizationListRoute extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div className='OrganizationListItem'>
        <PartnerInfo {...this.props} selectedTabs={this.props.selectedTabs} />
      </div>
    );
  }
}

export default OrganizationListRoute;
