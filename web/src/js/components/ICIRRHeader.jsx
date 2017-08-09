import cx from 'classnames';
import _ from 'lodash';
import React from 'react';
import autoBind from 'react-autobind';
import shallowCompare from 'react-addons-shallow-compare';

import Header from 'components/Header';
import HeaderButtonLeft from 'components/buttons/HeaderButtonLeft';

class LanguageSelectorOption extends React.Component {
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
    const className = cx('ICIRRHeader-languageSelectorOption', {
      'is-selected': this.props.isSelected,
    });
    return (
      <div className={className} onClick={this.handleClick}>
        {this.props.label}
      </div>
    );
  }
}

LanguageSelectorOption.propTypes = {
  isSelected: React.PropTypes.bool.isRequired,
  label: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
  value: React.PropTypes.string.isRequired,
};

class ICIRRHeader extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <Header>
        {_.isFunction(this.props.onBack) &&
          <HeaderButtonLeft onClick={this.props.onBack}>
            {this.props.backButtonText}
          </HeaderButtonLeft>
        }
        <div className='ICIRRHeader-brand'>
          <img className='ICIRRHeader-icon' src='/images/favicon.ico' />
          ICIRR
        </div>
        <div className='Header-languageSelector'>
          {_.map(ICIRRHeader.languageOptions, (option) => {
            return (
              <LanguageSelectorOption 
                key={option.value}
                {...option}
                isSelected={option.value === this.props.selectedLanguage}
                onClick={this.props.onSelectLanguage} />
            );
          })}
        </div>
      </Header>
    );
  }
}

ICIRRHeader.languageOptions = [{
  label: 'EN',
  value: 'en',
}, {
  label: 'ES',
  value: 'es',
}];

ICIRRHeader.propTypes = {
  backButtonText: React.PropTypes.string,
  onBack: React.PropTypes.func,
  onSelectLanguage: React.PropTypes.func.isRequired,
  selectedLanguage: React.PropTypes.string.isRequired,
};

export default ICIRRHeader;
