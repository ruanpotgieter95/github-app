import api from 'api';
import { setRepositoryList, repositoryLoading, setRepositoryIssues } from 'actions';

export const searchRepositories = (search="") => {

    return async dispatch => {

        dispatch(repositoryLoading(true));

        try {
            const response = await api.get(`/search/repositories?q=${search}`);
            dispatch(setRepositoryList(response.data));
        } catch(e) {
            console.error('An error occured', e);
        }

        dispatch(repositoryLoading(false));

    }
}

export const searchRepositoryIssues = (comp="", proj="", filter="all") => {

    return async dispatch => {

        dispatch(repositoryLoading(true));

        try {
            const response = await api.get(`/repos/${comp}/${proj}/issues?state=${filter}`);
            dispatch(setRepositoryIssues(response.data));
        } catch(e) {
            console.error('An error occured', e);
        }

        dispatch(repositoryLoading(false));

    }
}