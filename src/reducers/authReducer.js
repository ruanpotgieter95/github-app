import { LOGIN } from 'actions/types';

const initialState = {
    isFetching: false, 
    isAuthenticated: false
}

export default (state=initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {...state,
                isFetching: action.isFetching,
                isAuthenticated: action.isAuthenticated
            };
        default: 
            return state;
    }
}