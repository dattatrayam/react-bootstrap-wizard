import './StepWizard.css'
import React, {useState, useEffect} from "react";

const StepWizard = ({steps}) => {
    const minimumStepCount =3; // minimum steps count
    const maximumStepCount =7; // maximum steps count
    const [activeStep, setActiveStep] = useState(steps[0]); // active step 
    // form data
    const [formData, setFormData] = useState({})
    // function to handle input control change
    const handleInputData = (input) => e => {
      const {value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [input]: value
    }));
    }
    //function to handle next button click
    const handleNext = () => {
      console.table( formData);
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
    // function to handle back button click
    const handleBack = () => {
      const index = steps.findIndex(x => x.key === activeStep.key);
      //check if it is first step else decrease step index by one
      if(index === 0) return;
      setActiveStep(steps[index - 1])
    }

    return (
      <div className="box">
        {steps.length < minimumStepCount || steps.length >= maximumStepCount ?  
        // steps minimum and maximum check error message
        <span className='text-danger'>Minimum steps should be more than or equal to 3 and should be less than or equal to 7.</span>
         : 
        <div>
          <div className="step-label">
              <p>
                  <strong>{activeStep.label}{" "}</strong> 
              </p>
          </div>
          <div className="step-component">
            {activeStep.component({formData: formData, handleFormData: handleInputData})}        
          </div>
          <div className="btn-component">
            <input type="button" value="Back" onClick={handleBack} disabled={steps[0].key === activeStep.key} />
            <input type="button" value={steps[steps.length - 1].key !== activeStep.key ? 'Next' : 'Submit'} onClick={handleNext} />
          </div>
        </div>
        }
    </div>
  )
}

export default StepWizard;