import React from 'react';
import { SampleProvider } from './SampleContext';
import ReducerSample from './ReducerSample'

const App: React.FC = () => {
  return (
    <SampleProvider>
      <ReducerSample />
    </SampleProvider>
  );
};

export default App;