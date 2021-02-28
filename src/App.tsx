import React from 'react';
import Count from './count';
import CounterProvider from './counterContext';


const App = () => {
  return <div>
    <CounterProvider>
      <Count />
    </CounterProvider>
  </div>
    ;
};

export default App;
