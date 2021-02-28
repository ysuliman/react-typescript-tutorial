import React from 'react';
import Count from './components/count';
import CounterProvider from './context/counterContext';


const App = () => {
  return <div>
    <CounterProvider>
      <Count />
    </CounterProvider>
  </div>
    ;
};

export default App;
