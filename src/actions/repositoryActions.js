import { SET_REPOSITORY_LIST, REPOSITORY_LOADING } from 'actions/types';

export const setRepositoryList = (list=[]) => {
    return {
        type: SET_REPOSITORY_LIST,
        list
    }
}

export const repositoryLoading = (loading=false) => {
    return {
        type: REPOSITORY_LOADING,
        loading
    }
}