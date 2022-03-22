import './StepWizard.css'
import React, {useState} from "react";

const StepWizard = ({steps}) => {
    const [activeStep, setActiveStep] = useState(steps[0]);
    
    const handleNext = () => {
      const index = steps.findIndex(x => x.key === activeStep.key);
      //check if it is last step else increase step index by one
      if(index === steps.length-1) {
        alert('You have completed all steps.');
        return;
      }
      else {
        setActiveStep(steps[index +1])
      }
    }
    
    const handleBack = () => {
      const index = steps.findIndex(x => x.key === activeStep.key);
      //check if it is first step else decrease step index by one
      if(index === 0) return;
      
      setActiveStep(steps[index - 1])
     
    }
    return <div className="box">
    <div className="steps">
      
    </div>
    <div className="step-component">
      {activeStep.component()}
    </div>
    <div className="btn-component">
      <input type="button" value="Back" onClick={handleBack} disabled={steps[0].key === activeStep.key} />
      <input type="button" value={steps[steps.length - 1].key !== activeStep.key ? 'Next' : 'Submit'} onClick={handleNext} />
    </div>
  </div>
}

export default StepWizard;