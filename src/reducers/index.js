import { combineReducers } from 'redux';
import sensorDataReducer from './sensorDataReducer';

export default combineReducers({
  sensorData: sensorDataReducer
});
