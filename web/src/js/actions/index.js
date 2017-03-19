import _ from 'lodash';
import { bindActionCreators } from 'redux';

import * as settings from 'actions/SettingsActions';

const bundledActions = {
  settings,
};

export default function getAllActions(dispatch) {
  return {
    actions: _.fromPairs(_.map(bundledActions, (action, key) => [key, bindActionCreators(action, dispatch)]))
  };
}
