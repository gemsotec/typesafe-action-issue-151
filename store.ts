import { createAction, ActionType, getType } from 'typesafe-actions';

const loadAnswer = createAction('data/answer/load', resolve => (
    (answerId: string) => resolve(answerId)
))

export default (state = {}, action: ActionType<typeof loadAnswer>) => {
    switch (action.type) {
        case getType(loadAnswer):
            return {
                ...state,
                answerId: action.payload,
            }
        default:
            return state
    }
}