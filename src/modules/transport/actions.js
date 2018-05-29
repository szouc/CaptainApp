import * as Type from './actionTypes'
import { createAction } from 'redux-actions'

export const toAssignRequest = createAction(Type.TO_ASSIGN_REQUEST)
export const toRefuseRequest = createAction(Type.TO_REFUSE_REQUEST)
export const toSubmitRequest = createAction(Type.TO_SUBMIT_REQUEST)
export const toAcceptRequest = createAction(Type.TO_ACCEPT_REQUEST)
export const toPublishRequest = createAction(Type.TO_PUBLISH_REQUEST)
export const initialRequest = createAction(Type.INITIAL_REQUEST)
export const fetchAssignRequest = createAction(Type.FETCH_ASSIGN_REQUEST)
export const fetchRefuseRequest = createAction(Type.FETCH_REFUSE_REQUEST)
export const fetchAcceptRequest = createAction(Type.FETCH_ACCEPT_REQUEST)
export const fetchSubmitRequest = createAction(Type.FETCH_SUBMIT_REQUEST)
export const publishRequest = createAction(Type.PUBLISH_REQUEST)
export const denyRequest = createAction(Type.DENY_REQUEST)
export const passRequest = createAction(Type.PASS_REQUEST)
export const backRequest = createAction(Type.BACK_REQUEST)
