// frontend/src/components/SendSMSForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './SendSMSForm.css';

const SendSMSForm = () => {
    const [recipients, setRecipients] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [sent, setSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/send-sms', {
                recipients: recipients.split(/[\s,]+/), // Split recipients string into an array
                message
            });
            console.log(response.data); // Log response data to the console
            setSent(true);
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    return (
        <>
            {!sent ? (
                <form onSubmit={handleSubmit} className="send-sms-form">
                    <div>
                        <label>Recipients:</label>
                        <input 
                            type="text" 
                            value={recipients} 
                            onChange={(e) => setRecipients(e.target.value)} 
                            className="recipient-input" 
                            placeholder="+910123456789, +910987654321"
                        />
                    </div>
                    <div>
                        <label>Message:</label>
                        <textarea 
                            value={message} 
                            onChange={(e) => setMessage(e.target.value)} 
                            className="message-input" 
                            placeholder="Enter The Content"
                        ></textarea>
                    </div>
                    <button type="submit" className="send-sms-button">Send SMS</button>
                    {error && <p>{error}</p>}
                </form>
            ) : (
                <div className="success-message">
                    <p style={{ color: 'red' }}>SMS sent successfully!</p>
                </div>
            )}
        </>
    );
};

export default SendSMSForm;
