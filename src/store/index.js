import { combineReducers } from 'redux'
import {reducer as moneyChangingReducer} from './MoneyChangingReducer';

export default combineReducers({
  moneyChanging: moneyChangingReducer
})
