import React, { useState } from 'react';
import './PaymentPage.css';

function PaymentPage() {
  const [activePayment, setActivePayment] = useState('card');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Payment successful!'); // Notify payment success
  };

  return (
    <div className="payment-page">
      <div className="credit-card-form">
        <div className="form-header">
          <h2>PAYMENT DETAILS</h2>
        </div>
        <div className="form-body">
          <img
            className="card-image"
            src="https://i.ibb.co/hgJ7z3J/6375aad33dbabc9c424b5713-card-mockup-01.png"
            alt="Card Mockup"
          />
          <div className="payment-options">
            <div 
              className={`payment-option ${activePayment === 'card' ? 'active' : ''}`}
              onClick={() => setActivePayment('card')}
            >
              Card
            </div>
            <div 
              className={`payment-option ${activePayment === 'gpay' ? 'active' : ''}`}
              onClick={() => setActivePayment('gpay')}
            >
              GPay
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            {activePayment === 'card' ? (
              <>
                <div className="form-group">
                  <label htmlFor="card-number">Card Number</label>
                  <input type="text" id="card-number" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="form-group">
                  <label htmlFor="card-holder">Card Holder</label>
                  <input type="text" id="card-holder" placeholder="Full Name" />
                </div>
                <div className="form-row">
                  <div className="form-column">
                    <label htmlFor="expiry-date">Expiry Date</label>
                    <input type="text" id="expiry-date" placeholder="MM/YY" />
                  </div>
                  <div className="form-column">
                    <label htmlFor="cvv">CVV</label>
                    <input type="text" id="cvv" placeholder="123" />
                  </div>
                </div>
              </>
            ) : (
              <div className="form-group">
                <label htmlFor="gpay-id">Google Pay ID</label>
                <input type="text" id="gpay-id" placeholder="Enter your GPay ID" />
              </div>
            )}
            <button type="submit" className="click-button">Pay</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
