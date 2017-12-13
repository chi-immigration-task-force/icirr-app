import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import withTranslate from 'localization/withTranslate';

class PartnerInfo extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  // https://developers.google.com/maps/documentation/urls/guide
  getGoogleMapsHref(address) {
    return encodeURI(`https://www.google.com/maps/dir/?api=1&destination=${address}`);
  }

  render() {
    const {
      address, name, phone, website,
    } = this.props;
    const isExternal = _.startsWith(website, 'http');
    const href = isExternal ? website : `http://${website}`;
    return (
      <div className='PartnerInfo'>
        <div className='PartnerInfo-name'>{name}</div>
        {address &&
          <div className='PartnerInfo-address'>
            {address}&nbsp;
            (<a target='_blank' rel='noopener noreferrer' href={this.getGoogleMapsHref(address)}>
              {this.props.translate('partner.getDirections')}
            </a>)
          </div>
        }
        {phone &&
          <div className='PartnerInfo-phone'>
            {this.props.translate('partner.phone')}: <a className='PartnerInfo-phoneLink' href={`tel:${phone}`}>{formatPhone(phone.toString())}</a>
          </div>
        }
        {website &&
          <a className='PartnerInfo-website' target='_blank' rel='noopener noreferrer' href={href}>
            {website}
          </a>
        }
      </div>
    );
  }
}

PartnerInfo.propTypes = {
  address: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.number.isRequired,
  translate: PropTypes.func.isRequired,
  website: PropTypes.string.isRequired,
};

export default withTranslate(PartnerInfo);

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
