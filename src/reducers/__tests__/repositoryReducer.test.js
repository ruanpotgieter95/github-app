import repositoryReducer from 'reducers/repositoryReducer';
import { SET_REPOSITORY_ISSUES, SET_REPOSITORY_LIST, REPOSITORY_LOADING } from 'actions/types';

describe('the repository reducer', () => {

    it('handles actions with unknown type', () => {
        const newState = repositoryReducer({}, {});
        expect(newState).toEqual({});
    });

    it('handles actions of type SET_REPOSITORY_ISSUES', () => {
        const action = {
            type: SET_REPOSITORY_ISSUES,
            issues: [{name: "issue"}]
        };

        const newState = repositoryReducer({}, action);

        expect(newState).toEqual({
            issues: [{name: "issue"}]
        });
    });

    it('handles actions of type SET_REPOSITORY_LIST', () => {
        const action = {
            type: SET_REPOSITORY_LIST,
            list: {
                items: [{name: "items"}]
            }
        };

        const newState = repositoryReducer({}, action);

        expect(newState).toEqual({
            list: {
                items: [{name: "items"}]
            }
        });
    });

    it('handles actions of type REPOSITORY_LOADING  with "loading=true"', () => {
        const action = {
            type: REPOSITORY_LOADING,
            loading: true
        };

        const newState = repositoryReducer({}, action);

        expect(newState).toEqual({
            loading: true
        });
    });

    it('handles actions of type REPOSITORY_LOADING with "loading=false"', () => {
        const action = {
            type: REPOSITORY_LOADING,
            loading: false
        };

        const newState = repositoryReducer({}, action);

        expect(newState).toEqual({
            loading: false
        });
    });

})