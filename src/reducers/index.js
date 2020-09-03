import { combineReducers } from 'redux';

import authReducer from 'reducers/authReducer';
import repositoryReducer from 'reducers/repositoryReducer';
import {reducer as toastrReducer} from 'react-redux-toastr';

export default combineReducers({
    auth: authReducer,
    repository: repositoryReducer,
    toastr: toastrReducer
});