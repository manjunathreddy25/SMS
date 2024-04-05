// backend/index.js
const express = require('express');
const cors = require('cors');
const twilio = require('twilio');

const app = express();
app.use(cors());
app.use(express.json());

// Remove Twilio Account SID and Auth Token from code

app.post('/send-sms', async (req, res) => {
    try {
        const { recipients, message } = req.body;
        const responsePromises = recipients.map(recipient =>
            client.messages.create({
                body: message,
                to: recipient,
                from: '+12512764469' // Replace with your Twilio phone number
            })
        );
        await Promise.all(responsePromises);
        res.json({ success: true, message: 'SMS sent successfully' });
    } catch (error) {
        console.error('Error sending SMS:', error);
        res.status(500).json({ success: false, message: 'Failed to send SMS' });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
