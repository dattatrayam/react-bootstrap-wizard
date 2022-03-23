import React from "react";

const StepTwo = ({formData, handleFormData}) => {
    return (
        <div>
            <div className="form-group">
                <label htmlFor="address1">Flat House No:</label>
                <input type="text" className="form-control" id="address1" value={formData.address1 ? formData.address1 : ""} onChange={handleFormData("address1")} />
            </div>
            <div className="form-group">
                <label htmlFor="address2">Area Colony Street:</label>
                <input type="tel" className="form-control" id="address2" value={formData.address2 ? formData.address2 : ""} onChange={handleFormData("address2")} />
            </div>
            <div className="form-group">
                <label htmlFor="pincode">Pincode:</label>
                <input type="number" className="form-control" id="pincode" maxLength={4} value={formData.pincode ? formData.pincode : ""} onChange={handleFormData("pincode")} />
            </div>
        </div>
        )
}

export default StepTwo;