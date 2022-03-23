import React from "react";

const StepThree = ({formData, handleFormData}) => {
    return (
        <div>
            <div className="form-group">
                <label htmlFor="cardName">Name on Card:</label>
                <input type="text" className="form-control" id="cardName" value={formData?.cardName} onChange={handleFormData("cardName")} />
            </div>
            <div className="form-group">
                <label htmlFor="cardNumber">Credit Card Number:</label>
                <input type="number" className="form-control" id="cardNumber" value={formData?.cardNumber} onChange={handleFormData("cardNumber")} />
            </div>
            <div className="form-group">
                <label htmlFor="expMonth">Exp Month:</label>
                <input type="text" className="form-control" id="expMonth" value={formData?.expMonth} onChange={handleFormData("expMonth")} />
            </div>
            <div className="form-group">
                <label htmlFor="expYear">Exp Year:</label>
                <input type="number" className="form-control" id="expYear" value={formData?.expYear} onChange={handleFormData("expYear")} />
            </div>
            <div className="form-group">
                <label htmlFor="cvv">CVV:</label>
                <input type="number" className="form-control" id="cvv" value={formData?.cvv} onChange={handleFormData("cvv")} />
            </div>
        </div>
    )
}

export default StepThree;
