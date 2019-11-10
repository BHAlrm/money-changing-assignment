import React from 'react';
import './App.css';
import {useDispatch} from 'react-redux';
import MoneyInput from './component/MoneyInput';
import CoinList from './component/CoinList';
import CoinItem from './component/CoinItem';
import {moneyChange} from './store/MoneyChangingReducer';
import useMoneyChangingStore from './hook/useMoneyChangingStore';
import {COIN_TYPES} from './const/coinType';

function App() {
  const dispatch = useDispatch();
  const {coins} = useMoneyChangingStore();
  const onMoneyInputChange = (value) => {
    dispatch(moneyChange({money: value}));
  };

  return (
    <div className="App">
      <MoneyInput onChange={onMoneyInputChange}/>
      <CoinList>
        {coins.map( (value, idx) => <CoinItem key={idx} title={COIN_TYPES[idx].toString()} value={value}/>)}
      </CoinList>
    </div>
  );
}

export default App;
