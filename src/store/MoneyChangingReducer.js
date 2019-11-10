import {createAction, handleActions} from 'redux-actions';
import {COIN_TYPES} from '../const/coinType';

// action types
export const MONEY_CHANGE = '@@coin/MONEY_CHANGE';

// actions
export const moneyChange = createAction(MONEY_CHANGE);

// reducers
export const reducer = handleActions(
  {
    [MONEY_CHANGE]: (state, action) => {
      // business logic to calculate coin output
      const {payload: {money}} = action;
      const coins = calculate(money);
      return ({coins});
    }
  },
  {coins: new Array(COIN_TYPES.length).fill(0)}
);

// private logic
function calculate(value) {
  const FOCUS_DECIMAL = 1000;

  // JavaScript uses 64-bit floating point representation,
  // which is the same as Java's double.
  // The crux of the problem is that numbers are represented in this format as a whole number times
  // a power of two; rational numbers (such as 0.1, which is 1/10)
  // whose denominator is not a power of two cannot be exactly represented.
  value = (value * FOCUS_DECIMAL);

  try {
    if (isNaN(+(value)) || value <= 0) {
      return COIN_TYPES.map(() => 0);
    }

    return COIN_TYPES.map((coin) => {
      const numberOfCoin = (value / (coin * FOCUS_DECIMAL)) >> 0;
      value = value % (coin * FOCUS_DECIMAL);
      return numberOfCoin;
    });
  } catch (e) {
    return COIN_TYPES.map(() => 0);
  }
}
