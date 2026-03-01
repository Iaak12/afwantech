const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/blogs', require('./routes/blogs'));
app.use('/api/faqs', require('./routes/faqs'));
app.use('/api/pages', require('./routes/pages'));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/social', require('./routes/social'));
app.use('/api/v2/upload', require('./routes/upload'));
const connectDB = async () => {
    const atlasUri = process.env.MONGODB_URI;
    const localUri = 'mongodb://localhost:27017/webtechsathi';

    try {
        await mongoose.connect(atlasUri);
        console.log('Connected to MongoDB Atlas');
    } catch (err) {
        console.error('MongoDB Atlas connection failed, trying local...', err.message);
        try {
            await mongoose.connect(localUri);
            console.log('Connected to Local MongoDB');
        } catch (localErr) {
            console.error('Could not connect to any MongoDB instance', localErr.message);
            process.exit(1);
        }
    }
};

connectDB().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
