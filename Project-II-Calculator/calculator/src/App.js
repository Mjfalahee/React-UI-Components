import React from 'react';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import './App.scss';

const App = () => {
  return (
    <div>
      <h3>Welcome to React Calculator</h3>
     <div>

       <CalculatorDisplay />
       calculator container
        <div> current</div>
        <div> white buttons</div>
        <div> operators </div>
       </div> 
    </div>
  );
};

export default App;
