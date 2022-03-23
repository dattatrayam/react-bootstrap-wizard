# **React Step Wizard Demo**

This wizard is developed using React . 

# Running application locally

**Prerequisites:** You need to have Node + NPM installed.

**Clone the repo:**

    git clone https://github.com/dattatrayam/react-bootstrap-wizard.git

**Install required dependencies**

    npm install

**Starting the application**

    npm start

**Building the application**

    npm run build
**Deployment**

    Copy files inside `build` folder to aws `S3` bucket, heroku, azure webapp etc.
**Demo**

For demo purpose this project is deployed on aws `S3` as a static website. 
[Click Here For Live Demo](http://checkout-wizard-demo.s3-website.ap-south-1.amazonaws.com/)

# Features :
1. Item Checkout workflow is implemented using `StepWizard` component
2. Four step component added `StepOne` (personal information), `StepTwo` (Billing address), `StepThree` (Payment) and `FinalStep` to display all steps details together
3. `StepWizard` componenet loads step component dynamically as per steps defined in `stepsConfig.js` file
4. Step component just contain form elements define with input field id and on change event
5. `StepWizard` componenet handle input control change event and store data in central place to submit at last step
6. `StepWizard` component display error message if steps are less than minimum steps or steps are more than maximum steps 

# How to use step wizard
1. Define steps inside `stepsConfig.js`
2. Include `StepWizard` component inside your component
3. Pass steps from `stepsConfig.js` as below
```html
<StepWizard steps={steps} />
```
4. Create steps componenets with required form fields with 2 input parameters `fromData` and `handleFromData` as below
```javascript
        const StepOne = ({formData, handleFormData}) => {
            return (
            <div>
                <div className="form-group">
                    <label htmlFor="fullName">Full Name:</label>
                    <input type="text" className="form-control" id="fullName" value={formData.fullName ? formData.fullName : ""} onChange={handleFormData("fullName")} />
                </div>
                <div className="form-group">
                    <label htmlFor="mobileNumber">Mobile:</label>
                    <input type="tel" className="form-control" id="mobileNumber" value={formData.mobileNumber? formData.mobileNumber : ""} onChange={handleFormData("mobileNumber")} />
                </div>
            </div>
            )
        }

```
5. All steps components fields data is stored in step wizard component 

# How to add new step in  wizard
1. Create new react component with required fields 
2. Add new step inside in `stepConfig.js` with `key`, `label`, `component` as attributes 
```javascript
 { key: 'step1', label: 'Personal Information', component:StepOne},
```

# Feture Implementation
1. Add new config attributes for step component like `validationRequired` to add validation and disable next button till all steps fields are valid.
2. Add new config attributes for step component like `isCompleted` to display step is successfully completed
3. Add step indicator to display current active step and completed steps
