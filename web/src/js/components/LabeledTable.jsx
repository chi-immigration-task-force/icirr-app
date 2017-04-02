import cx from 'classnames';
import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

class LabeledTable extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const className = cx(this.props.className, this.props.modifierClassName);
    return (
      <div className={className}>
        {this.props.label && <div className='LabeledTable-label'>{this.props.label}</div>}
        <div className='LabeledTable-rows'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

LabeledTable.propTypes = {
  children: React.PropTypes.node.isRequired,
  className: React.PropTypes.string.isRequired,
  label: React.PropTypes.oneOfType([
    React.PropTypes.node,
    React.PropTypes.string,
  ]),
  modifierClassName: React.PropTypes.string,
};

LabeledTable.defaultProps = {
  className: 'LabeledTable',
};

export default LabeledTable;
