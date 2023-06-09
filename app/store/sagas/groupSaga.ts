import { call, delay, put, race, spawn, select } from 'redux-saga/effects';
import { Alert } from 'react-native';
import * as loginActions from 'app/store/actions/loginRegisterActions';
import * as groupActions from 'app/store/actions/groupActions';
import * as navigationActions from 'app/store/actions/navigationActions';
import realm from 'app/config/realm-config';
import { Realm } from '@realm/react';
import { getUserInfo, registerUser } from 'app/services/loginRegisterUser';
import { showFlashMessage } from '../actions/flashMessageActions';
import { getMembers } from 'app/services/group';
import { addGroup, deleteGroup, getGroups } from 'app/services/groupService';

export function* groupSaga(action: any): Generator<any, void, unknown> {

    yield put(loginActions.enableLoader());
    const { group_Id } = action;
    console.log('griup', group_Id);
    try {
        const response = yield call(getMembers, { group_Id });
        console.log(response?.data, 'success');
        yield put(groupActions.setGroupMembers(response?.data?.response ?? []));
        yield put(loginActions.disableLoader());
    } catch (err) {
        console.log(err, 'error');
        yield put(loginActions.disableLoader());
    }

}
export function* fetchGroupSaga(action: any) {
    yield put(loginActions.enableLoader());
    const { user_id } = action;
    try {
        const response = yield call(getGroups, user_id)
        if (response?.data?.status == "success") {
            yield put(groupActions.onfetchGroupResponse(response?.data?.response));
            yield put(loginActions.disableLoader());
        } else {
            yield put(loginActions.disableLoader());
            yield put(groupActions.onfetchGroupResponse([]));
        }
    } catch (err) {
        yield put(groupActions.onfetchGroupResponse([]));
    }
}

export function* addGroupSaga(action: any) {
    yield put(loginActions.enableLoader());
    const {  group_name, members, owner_id, created_at } = action;
    try {
        const response = yield call(addGroup, { group_name, members, owner_id, created_at})
        if (response?.data?.status == "success") {
            yield put(showFlashMessage('Group created'));
            yield put(loginActions.disableLoader());
            yield put(groupActions.fetchGroups(owner_id));
            yield put(navigationActions.navigateToHome({}));

        } else {
            yield put(loginActions.disableLoader());
         
        }
    } catch (err) {
        yield put(loginActions.disableLoader());
    }
}

export function* deleteGroupSaga(action: any) {
    yield put(loginActions.enableLoader());
    const {  group_id, user_id } = action;
    try {
        const response = yield call(deleteGroup, { group_id })
        if (response?.data?.status == "success") {
            yield put(showFlashMessage('Group removed'));
            yield put(loginActions.disableLoader());
            yield put(groupActions.fetchGroups(user_id));
        } else {
            yield put(loginActions.disableLoader());
         
        }
    } catch (err) {
        yield put(loginActions.disableLoader());
    }
}


