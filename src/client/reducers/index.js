import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import hopsReducer from './hops_reducer';
import ActiveHop from './active_hop_reducer';

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  hops: hopsReducer,
  activeHop: ActiveHop
});

export default rootReducer;

