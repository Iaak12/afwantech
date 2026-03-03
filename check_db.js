const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, 'backend/.env') });

const ContactMessage = require('./backend/models/ContactMessage');

async function checkDB() {
    try {
        console.log('Connecting to:', process.env.MONGODB_URI);
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected.');

        const count = await ContactMessage.countDocuments();
        console.log('Total Contact Messages:', count);

        const latest = await ContactMessage.find().sort({ createdAt: -1 }).limit(5);
        console.log('Latest Submissions:', JSON.stringify(latest, null, 2));

        process.exit(0);
    } catch (err) {
        console.error('Error:', err);
        process.exit(1);
    }
}

checkDB();
