import { SET_REPOSITORY_LIST, REPOSITORY_LOADING, SET_REPOSITORY_ISSUES } from 'actions/types';

const initialState = {
    list: {
        items: [],
        total_count: 0
    },
    issues: [],
    loading: false
}

export default (state=initialState, action) => {
    switch (action.type) {
        case SET_REPOSITORY_LIST:
            return {...state,
                list: action.list
            };
        case REPOSITORY_LOADING:
            return {...state,
                loading: action.loading
            }
        case SET_REPOSITORY_ISSUES:
            return {...state, 
                issues: action.issues
            }
        default: 
            return state;
    }
}