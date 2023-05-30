

import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';
import { ILoading } from 'app/models/reducers/loading';
import { IFlash } from 'app/models/reducers/flash';

const initialState: IFlash = {
  visible: false,
  message:''
};

export const flashReducer = createReducer(initialState, {
  [types.FLASH_MESSAGE_SHOW](state: IFlash, action: any) {
    return { ...state, message: action.message, visible: true };
  },
  [types.FLASH_MESSAGE_HIDE](state: IFlash) {
    return { ...state, visible:false, message:false};
  },
});
