import {useSelector} from 'react-redux';

export default function useMoneyChangingStore() {
  const {coins, answer} = useSelector(({moneyChanging}) => moneyChanging);
  return {coins, answer};
}
