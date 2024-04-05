import React from 'react';
import './App.css';
import SendSMSForm from './components/SendSMSForm';


function App() {
  return (
    <div className="App">
      <h1 className="send-sms-heading">Send SMS</h1>
      <SendSMSForm />
    </div>
  );
}

export default App;


