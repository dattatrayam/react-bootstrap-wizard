import React from "react";

const FinalStep = ({formData}) => {
    //destructuring data from formdata
    const { fullName, mobileNumber, address1, address2, 
            pincode, cardName, cardNumber, expMonth, expYear, cvv } = formData;
    return (
        <div>
            <p>
                <strong>Full Name :</strong> {fullName}{" "}
            </p>
            <p>
                <strong>Mobile Number :</strong> {mobileNumber}{" "}
            </p>
            <p>
                <strong>Address1 :</strong> {address1}{" "}
            </p>
            <p>
                <strong>Address2 :</strong> {address2}{" "}
            </p>
            <p>
                <strong>Name on Card :</strong> {cardName}{" "}
            </p>
            <p>
                <strong>Card Number :</strong> {cardNumber}{" "}
            </p>
            <p>
                <strong>Exp Month :</strong> {expMonth}{" "}
            </p>
            <p>
                <strong>Exp Year :</strong> {expYear}{" "}
            </p>
            <p>
                <strong>CVV :</strong> {cvv}{" "}
            </p>
        </div>
    )
}

export default FinalStep;

