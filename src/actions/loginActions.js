import { LOGIN } from 'actions/types';

export const login = (isFetching=false, isAuthenticated=false) => {
    return {
        type: LOGIN,
        isFetching,
        isAuthenticated
    }
}