import './App.css';
import StepWizard  from './components/StepWizard/StepWizard';
import steps from './stepsConfig'

function App() {
  return (
    <div className="App">
      <h4>React Step wizard Demo </h4>
      <StepWizard steps={steps} />
    </div>
  );
}

export default App;
