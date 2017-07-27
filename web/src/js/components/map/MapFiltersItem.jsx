import autoBind from 'react-autobind';
import cx from 'classnames';
import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

class MapFiltersItem extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  handleClick() {
    this.props.onClick(this.props.value);
  }

  render() {
    const className = cx(this.props.className, {
      'is-selected': this.props.isSelected,
    });
    return (
      <div className={className} onClick={this.handleClick}>
        {this.props.label}
      </div>
    );
  }
}

MapFiltersItem.propTypes = {
  className: React.PropTypes.string.isRequired,
  isSelected: React.PropTypes.bool.isRequired,
  label: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
  value: React.PropTypes.string.isRequired,
};

export default MapFiltersItem;
