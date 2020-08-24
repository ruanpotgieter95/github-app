import api from 'api';
import { setRepositoryList, repositoryLoading } from 'actions';

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