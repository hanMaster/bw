import {createAction} from '@ngrx/store';
import {ActionTypes} from '../actionTypes';

export const showClientModalAction = createAction(ActionTypes.SHOW_CLIENT_MODAL);
export const hideClientModalAction = createAction(ActionTypes.HIDE_CLIENT_MODAL);
