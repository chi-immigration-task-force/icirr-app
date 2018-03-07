import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import React from 'react';
import { InfoWindow, Marker } from 'react-google-maps';

import PartnerInfo from 'components/PartnerInfo';

class MarkerWithInfoWindow extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }
  shouldComponentUpdate(/* nextProps, nextState */) {
    return true;
  }

  handleMarkerClick() {
    this.props.onClick(this.props.id);
  }

  handleClose() {
    this.props.onClose();
  }

  render() {
    return (
      <Marker {...this.props} onClick={this.handleMarkerClick}>
        {this.props.isSelected &&
          <InfoWindow onCloseClick={this.handleClose}>
            <PartnerInfo {...this.props} selectedTabs={this.props.selectedTabs} />
          </InfoWindow>
        }
      </Marker>
    );
  }
}

MarkerWithInfoWindow.propTypes = {
  id: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  selectedTabs: PropTypes.array.isRequired,
};

export default MarkerWithInfoWindow;
