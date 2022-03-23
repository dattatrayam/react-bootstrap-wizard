import StepOne from '../StepOne';
import StepTwo from '../StepTwo';
import StepThree from '../StepThree';
import FinalStep from '../FinalStep';

const steps = [
    { key: 'step1', label: 'Personal Information', component:StepOne},
    { key: 'step2', label: 'Billing Address', component:StepTwo},
    { key: 'step3', label: 'Payment' , component:StepThree},
    { key: 'step4', label: 'Final Step', component:FinalStep}
    
  ];

  export default steps;