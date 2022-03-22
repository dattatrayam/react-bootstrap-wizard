import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import LastStep from './components/LastStep';

const steps = [
    { key: 'firstStep', label: 'First Step', component: StepOne },
    { key: 'secondStep', label: 'Second Step', component: StepTwo },
    { key: 'thirdStep', label: 'Third Step', component: StepThree },
    { key: 'finalStep', label: 'Final Step', component: LastStep },
  ];

  export default steps;