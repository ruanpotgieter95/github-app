import authReducer from 'reducers/authReducer';
import { LOGIN } from 'actions/types';

describe('the auth reducer', () => {

    it('handles actions with unknown type', () => {
        const newState = authReducer({}, {});
        expect(newState).toEqual({});
    });

    it('handles actions of type LOGIN', () => {
        const action = {
            type: LOGIN,
            isFetching: false, 
            isAuthenticated: false
        };

        const newState = authReducer({}, action);

        expect(newState).toEqual({
            isFetching: false, 
            isAuthenticated: false
        });
    })
})