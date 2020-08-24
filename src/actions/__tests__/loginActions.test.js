import { LOGIN } from 'actions/types';
import { login } from 'actions';

describe('login', () => {
    const payload = {
        isFetching: false,
        isAuthenticated: false
    }

    it('has the correct type', () => {
        const action = login();

        expect(action.type).toEqual(LOGIN);
    });

    it('has the correct payload for empty input', () => {
        const action = login();

        expect({
            isFetching: action.isFetching,
            isAuthenticated: action.isAuthenticated
        }).toEqual({
            isFetching: false,
            isAuthenticated: false
        });
    });

    it('has the correct payload for "isAuthenticated"', () => {
        
        const action = login(payload.isFetching, payload.isAuthenticated);

        expect(action.isAuthenticated).toEqual(payload.isAuthenticated)
    });

    it('has the correct payload for "isFetching"', () => {
        
        const action = login(payload.isFetching, payload.isAuthenticated);

        expect(action.isFetching).toEqual(payload.isFetching);
    });
});