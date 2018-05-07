import PropTypes from 'prop-types';
import React from 'react';
import autoBind from 'react-autobind';
import { Redirect, Route, Switch, withRouter } from 'react-router';
import { connect } from 'react-redux';

import actions from 'actions';

import ICIRRHeader from 'components/ICIRRHeader';

import DiscoverRoute from 'routes/DiscoverRoute';
import KnowYourRightsRoute from 'routes/KnowYourRightsRoute';
import OrganizationRoute from 'routes/OrganizationRoute';

import withTranslate from 'localization/withTranslate';

/**
 * This route renders a consistent header at the top of the app.
 * It also includes the primary switch statement that routes between the landing (Discover) route
 * and the other routes
 */
class NavigationRoute extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  shouldComponentUpdate() {
    return true;
  }

  handleBack() {
    this.props.history.goBack();
  }

  handleSelectLanguage(language) {
    this.props.actions.settings.setSettings({
      language,
    });
  }

  render() {
    // We don't want to go back if the current location is the root route
    const onBack = this.props.history.location.pathname === '/' ? undefined : this.handleBack;
    return (
      <div className='NavigationRoute'>
        <ICIRRHeader
          backButtonText={this.props.translate('header.back')}
          onBack={onBack}
          onSelectLanguage={this.handleSelectLanguage}
          selectedLanguage={this.props.selectedLanguage} />
        <div className='NavigationRoute-content'>
          <Switch>
            <Route path='/kyr' component={KnowYourRightsRoute} />
            <Route path='/orgs' component={OrganizationRoute} />
            <Route path='/' component={DiscoverRoute} />
            <Redirect from='*' to='/' />
          </Switch>
        </div>
      </div>
    );
  }
}

NavigationRoute.propTypes = {
  actions: PropTypes.object.isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }).isRequired,
  selectedLanguage: PropTypes.string.isRequired,
  translate: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    selectedLanguage: state.settings.language,
  };
};

export default withTranslate(withRouter(connect(mapStateToProps, actions)(NavigationRoute)));
