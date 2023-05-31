import createReducer from 'app/lib/createReducer';
import { IGroup } from 'app/models/reducers/group';

const initialState: IGroup = {
    groups:[]
};

export const groupReducer = createReducer(initialState, {
 
});
