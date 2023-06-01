import { call, delay, put, race, spawn, select } from 'redux-saga/effects';
// import { delay } from 'redux-saga';

import { Alert } from 'react-native';
// import loginUser from 'app/services/loginUser';
import * as loginActions from 'app/store/actions/loginRegisterActions';
import * as groupActions from 'app/store/actions/groupActions';
import realm from 'app/config/realm-config';
import { Realm } from '@realm/react';
import { getUserInfo, registerUser } from 'app/services/loginRegisterUser';
import { showFlashMessage } from '../actions/flashMessageActions';
import { IGroupRequestState } from 'app/models/actions/group';
import { getGroups } from 'app/services/groupService';



export function* fetchGroupSaga(action: any) {
    yield put(loginActions.enableLoader());
    const { user_id } = action;
    try {
        const response = yield call(getGroups, user_id)
        if (response?.data?.status == "success") {
            yield put(groupActions.onfetchGroupResponse(response?.data?.response));
        } else {
            yield put(loginActions.disableLoader());
        }
    } catch (err) {
        yield put(loginActions.disableLoader());
    }
}