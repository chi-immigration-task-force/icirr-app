import _ from 'lodash';
import { bindActionCreators } from 'redux';

import * as personalInfo from 'actions/PersonalInfoActions';

const bundledActions = {
  personalInfo,
};

export default function getAllActions(dispatch) {
  return {
    actions: _.fromPairs(_.map(bundledActions, (action, key) => [key, bindActionCreators(action, dispatch)]))
  };
}
