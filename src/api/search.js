import api from 'api';
import { setRepositoryList, repositoryLoading, setRepositoryIssues } from 'actions';
import {toastr} from 'react-redux-toastr'

export const searchRepositories = (search="") => {

    return async dispatch => {

        dispatch(repositoryLoading(true));

        try {
            const response = await api.get(`/search/repositories?q=${search}`);
            dispatch(setRepositoryList(response.data));
        } catch(e) {
            console.error('An error occured', e);
            toastr.error('Search Error', 'There was a problem with your search');
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
            toastr.error('Issue Error', 'There was an error retrieving the issues');
        }

        dispatch(repositoryLoading(false));

    }
}