import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

class EmergencyHotline extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div className='EmergencyHotline'>
        <div className='EmergencyHotline-name'>{this.props.name}</div>
        <div className='EmergencyHotline-number'>
          <a href={`tel:${this.props.number}`}>{this.props.number}</a>
        </div>
        {this.props.subNumber &&
          <div className='EmergencyHotline-subNumber'>
            (<a href={`tel:${this.props.subNumber}`}>{this.props.subNumber}</a>)
          </div>
        }
        <div className='EmergencyHotline-additionalInfo'>{this.props.additionalInfo}</div>
      </div>
    );
  }
}

EmergencyHotline.propTypes = {
  additionalInfo: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  number: React.PropTypes.string.isRequired,
  subNumber: React.PropTypes.string.isRequired,
};

export default EmergencyHotline;
