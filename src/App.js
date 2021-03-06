import './App.css';
import StepWizard  from './components/StepWizard/StepWizard';
import steps from './components/StepWizard/stepsConfig'

function App() {
  return (
    <div className="App">
      <h4>MultiStep Checkout Wizard Demo</h4>
      <StepWizard steps={steps} />
    </div>
  );
}

export default App;
