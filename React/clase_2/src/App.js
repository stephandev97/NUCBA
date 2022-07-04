import React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';

const App = () => {
  //JSX

  return <Counter></Counter>;
};

render(React.createElement(App), document.getElementById('root'));
