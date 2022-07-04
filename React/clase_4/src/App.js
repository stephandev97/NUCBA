import React from 'react';
import { createRoot } from 'react-dom/client';
import Pomodoro from './Pomodoro';

const App = () => {
  return <Pomodoro />;
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

export default App;
