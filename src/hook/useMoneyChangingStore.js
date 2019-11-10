import {useSelector} from 'react-redux';

export default function useMoneyChangingStore() {
  const {coins} = useSelector(({moneyChanging}) => moneyChanging);
  return {coins};
}
