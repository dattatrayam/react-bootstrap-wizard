import React from "react";

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

export default StepOne;

