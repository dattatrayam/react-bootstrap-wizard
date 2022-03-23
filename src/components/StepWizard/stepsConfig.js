import StepOne from '../StepOne';
import StepTwo from '../StepTwo';
import StepThree from '../StepThree';
import FinalStep from '../FinalStep';

const steps = [
    { key: 'StepOne', label: 'Personal Information', component:StepOne },
    { key: 'StepTwo', label: 'Billing Address', component:StepTwo},
    { key: 'StepThree', label: 'Payment' , component:StepThree},
    { key: 'FinalStep', label: 'Final Step', component:FinalStep}
    
  ];

  export default steps;