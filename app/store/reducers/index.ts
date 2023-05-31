/*
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as loginReducer from './loginRegisterReducer';
import * as themeReducer from './themeReducer';
import * as HomeReducer from './HomeReducer';
import * as flashReducer  from './flashMessageReducer';
export default Object.assign(
  loginReducer,
  flashReducer,
  loadingReducer,
  themeReducer,
  HomeReducer,
);
