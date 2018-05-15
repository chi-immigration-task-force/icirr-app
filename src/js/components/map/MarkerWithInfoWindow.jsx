import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import React from 'react';
import { InfoWindow, Marker } from 'react-google-maps';

import PartnerInfo from 'components/PartnerInfo';

/**
 * Renders a google maps marker, and if it's selected,
 * an info window with the provided partner's information
 */
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
          <InfoWindow onCloseClick={this.handleClose} options={{maxWidth: 250}}>
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
