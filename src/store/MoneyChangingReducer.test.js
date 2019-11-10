import {moneyChange, reducer} from './MoneyChangingReducer';

describe('actions', () => {
  // test cases
  [
    {money: 100, result: {payload: {money: 100}}},
    {money: 0, result: {payload: {money: 0}}},
    {money: 3.33, result: {payload: {money: 3.33}}},
    {money: 2.11, result: {payload: {money: 2.11}}},
    {money: -1, result: {payload: {money: -1}}},
    {money: -3.4, result: {payload: {money: -3.4}}},
    {money: 'foo', result: {payload: {money: 'foo'}}},
    {money: 'bar', result: {payload: {money: 'bar'}}},
    {money: null, result: {payload: {money: null}}},
    {money: NaN, result: {payload: {money: NaN}}},
    {money: undefined, result: {payload: {money: undefined}}}
  ].forEach(({money, result: {payload}}) => {
    it(`should return correctly action when ${money} is argument`, () => {

      const payload = {money};
      const actual = moneyChange(payload);
      const expectedResult = {
        type: '@@coin/MONEY_CHANGE',
        payload
      };

      expect(actual).toEqual(expectedResult);
    });
  });
});

describe('reducer', () => {
  // test cases
  [
    {money: 100, coins: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0]},
    {money: 200, coins: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0]},
    {money: 1, coins: [0, 0, 0, 0, 0, 1, 0, 0, 0, 0]},
    {money: 3.33, coins: [0, 0, 0, 0, 0, 3, 1, 0, 1, 3]},
    {money: 313.22, coins: [3, 0, 0, 1, 0, 3, 0, 2, 0, 2]},
    {money: -1, coins: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]},
    {money: undefined, coins: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]},
    {money: null, coins: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]},
    {money: 'foo', coins: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]},
    {money: 'bar', coins: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]},
    {money: '', coins: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]},
    {money: '-33', coins: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]},
    {money: '100', coins: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0]},
  ].forEach(({money, coins})=> {
    it(`should return correctly state when ${money} is calculate`, () => {
      const action = moneyChange({money});
      const store = {coins: new Array(10).fill(0)};
      const actual = reducer(store, action);
      const expectedResult = {coins};

      expect(actual).toEqual(expectedResult);
    });
  })

});

