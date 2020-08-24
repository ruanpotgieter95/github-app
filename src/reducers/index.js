import { combineReducers } from 'redux';

import authReducer from 'reducers/authReducer';
import repositoryReducer from 'reducers/repositoryReducer';

export default combineReducers({
    auth: authReducer,
    repository: repositoryReducer
});