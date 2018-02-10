import cx from 'classnames';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Icon from 'components/Icon';
import SafeAnchor from 'components/SafeAnchor';

import { serviceNameToIcon } from 'constants/servicesConstants';

class PartnerInfoRightSide extends React.Component {
  render() {
    const {
      directionsHref,
      phone,
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
        {/*phone &&
          <a className='PartnerInfo-callAction' href={`tel:${phone}`}>
            <Icon icon='phone' />
          </a>
        }
        {directionsHref &&
          <SafeAnchor className='PartnerInfo-directionsAction' href={directionsHref}>
            <Icon icon='directions' />
          </SafeAnchor>
        */}
      </div>
    );
  }
}

PartnerInfoRightSide.propTypes = {
  directionsHref: PropTypes.string,
  phone: PropTypes.number,
  selectedTabs: PropTypes.array.isRequired,
  services: PropTypes.object.isRequired,
};

export default PartnerInfoRightSide;
