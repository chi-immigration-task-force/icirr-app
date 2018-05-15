import cx from 'classnames';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Icon from 'components/Icon';

import { serviceNameToIcon } from 'constants/servicesConstants';

/**
 * As the name suggests, is the right side of the PartnerInfo component.
 * Shows a list of the services offered by the partner organization,
 * and highlights any of those services that are currently selected.
 */
class PartnerInfoRightSide extends React.Component {
  render() {
    const {
      selectedTabs,
      services,
    } = this.props;

    return (
      <div className='PartnerInfo-detailsRightSide'>
        <div className='PartnerInfo-servicesIcons'>
          {_.map(services, (isOn, serviceName) => {
            const iconClassName = cx('PartnerInfo-servicesIcon', {
              'is-hidden': !isOn,
              'is-selected': _.includes(selectedTabs, serviceName),
            });

            return (
              <Icon key={serviceName} className={iconClassName} icon={serviceNameToIcon[serviceName]} />
            );
          })}
        </div>
      </div>
    );
  }
}

PartnerInfoRightSide.propTypes = {
  selectedTabs: PropTypes.array.isRequired,
  services: PropTypes.object.isRequired,
};

export default PartnerInfoRightSide;
