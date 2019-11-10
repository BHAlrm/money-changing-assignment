import React from 'react';
import ReactDOM from 'react-dom';
import CoinItem from './CoinItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CoinItem title={'foo'} value={0}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
