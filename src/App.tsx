import React from 'react';
import { TextField } from './TextField';

const App: React.FC = () => {
  return (
    <div className="App">
      <p>yo</p>
      <TextField text="text" person={{ firstName: 'sdf', lastName: 'sdf' }} />
    </div>
  );
};

export default App;
