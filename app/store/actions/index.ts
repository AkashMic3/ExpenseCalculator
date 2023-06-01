// export action creators
import * as loginActions from './loginRegisterActions';
import * as navigationActions from './navigationActions';
import * as themeActions from './themeActions';
import * as homeActions from './homeActions';
import * as groupActions from './groupActions';
import * as expenseActions from './groupActions';

export const ActionCreators = Object.assign(
  {},
  loginActions,
  navigationActions,
  themeActions,
  homeActions,
  groupActions,
  expenseActions
);
