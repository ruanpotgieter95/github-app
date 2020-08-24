import { SET_REPOSITORY_LIST, SET_REPOSITORY_ISSUES, REPOSITORY_LOADING } from 'actions/types';
import { setRepositoryList, repositoryLoading, setRepositoryIssues } from 'actions';

describe('setRepositoryList', () => {

    it('has the correct type', () => {
        const action = setRepositoryList();
        expect(action.type).toEqual(SET_REPOSITORY_LIST);
    });

    it('has the correct payload for empty input', () => {
        const action = setRepositoryList();

        expect({
            list: action.list
        }).toEqual({
            list: []
        });
    });

    it('has the correct payload for list', () => {
        const action = setRepositoryList([{name: 'list'}]);

        expect(action.list).toEqual([{name: 'list'}])
    });
});

describe('repositoryLoading', () => {

    it('has the correct type', () => {
        const action = repositoryLoading();

        expect(action.type).toEqual(REPOSITORY_LOADING);
    });

    it('has the correct payload for empty input', () => {
        const action = repositoryLoading();

        expect({ loading: action.loading}).toEqual({loading: false});
    });

    it('has the correct payload when set to "true"', () => {
        const action = repositoryLoading(true);

        expect({ loading: action.loading}).toEqual({loading: true});
    });

    it('has the correct payload when set to "false"', () => {
        const action = repositoryLoading(false);

        expect({ loading: action.loading}).toEqual({loading: false});
    });
});

describe('setRepositoryIssues', () => {

    it('has the correct type', () => {
        const action = setRepositoryIssues();

        expect(action.type).toEqual(SET_REPOSITORY_ISSUES);
    });

    it('has the correct payload for empty input', () => {
        const action = setRepositoryIssues();

        expect({ issues: action.issues }).toEqual({ issues: [] });
    });

    it('has the correct payload for list', () => {
        const action = setRepositoryIssues([{name: 'issue'}]);

        expect(action.issues).toEqual([{name: 'issue'}])
    });
});