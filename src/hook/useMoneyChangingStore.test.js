import {COIN_TYPES} from '../const/coinType';
import useMoneyChangingStore from './useMoneyChangingStore';

jest.mock('react-redux', () => ({
  useSelector: jest.fn().mockReturnValue(({
    coins: new Array(10).fill(0)
  }))
}));

it('should return coins from store', () => {
  const {coins} = useMoneyChangingStore();
  expect(coins).toEqual(new Array(COIN_TYPES.length).fill(0))
});
