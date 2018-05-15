import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import Icon from 'components/Icon';
import SafeAnchor from 'components/SafeAnchor';

import PartnerInfoRightSide from './PartnerInfoRightSide';

/**
 * One of the more complex components in the app.
 * Renders all of the information about one of the partner organizations.
 * In the bottom "actions" section, provides a button to click on to call
 * the organization or to get directions.
 */
class PartnerInfo extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  // https://developers.google.com/maps/documentation/urls/guide
  getGoogleMapsHref(address) {
    if (!address) {
      return '';
    }
    return encodeURI(`https://www.google.com/maps/dir/?api=1&destination=${address}`);
  }

  render() {
    const {
      address, name, phone, selectedTabs, services, website,
    } = this.props;
    const isExternal = _.startsWith(website, 'http');
    const href = isExternal ? website : `http://${website}`;
    return (
      <div className='PartnerInfo'>
        <div className='PartnerInfo-details'>
          <div className='PartnerInfo-detailsLeftSide'>
            <div className='PartnerInfo-name'>{name}</div>
            {address &&
              <div key='address' className='PartnerInfo-address'>
                <div>
                  {address}
                </div>
              </div>
            }
            {phone &&
              <div className='PartnerInfo-phone'>
                {formatPhone(phone.toString())}
              </div>
            }
            {website &&
              <SafeAnchor className='PartnerInfo-website' href={href}>
                {website}
              </SafeAnchor>
            }
          </div>
          <PartnerInfoRightSide
            directionsHref={this.getGoogleMapsHref(address)}
            phone={phone}
            selectedTabs={selectedTabs}
            services={services}
          />
        </div>
        <div className='PartnerInfo-actions'>
          {phone &&
            <a className='PartnerInfo-action' href={`tel:${phone}`}>
              <Icon icon='phone' />
            </a>
          }
          {address &&
            <SafeAnchor className='PartnerInfo-action' href={this.getGoogleMapsHref(address)}>
              <Icon icon='directions' />
            </SafeAnchor>
          }
        </div>
      </div>
    );
  }
}

PartnerInfo.propTypes = {
  address: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.number.isRequired,
  selectedTabs: PropTypes.array.isRequired,
  services: PropTypes.object.isRequired,
  website: PropTypes.string.isRequired,
};

export default PartnerInfo;

/**
 * Attempts to format the provided phone number in a more beautiful way.
 * Outputs a string of the form (XXX) XXX-XXXX.
 * Code looks like I got it from StackOverflow at some point...
 * 
 * @param {string} phoneNumber The phone number to format
 * @returns {string} a more beautifully formatted phone number
 */
function formatPhone(phoneNumber) {
  const numbers = phoneNumber.replace(/\D/g, '');
  const char = {
    0:'(',
    3:') ',
    6:' - ' 
  };
  let formattedNumber = '';
  for (let i = 0; i < numbers.length; i++) {
    formattedNumber += (char[i]||'') + numbers[i];
  }
  return formattedNumber;
}
