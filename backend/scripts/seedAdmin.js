const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const dotenv = require('dotenv');

dotenv.config();

const seedAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/webtechsathi');
        console.log('Connected to MongoDB');

        const email = 'admin@webtechsathi.in';
        const password = 'adminPassword1212'; // User provided: adminPassword1212

        const hashedPassword = await bcrypt.hash(password, 12);
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            existingUser.password = hashedPassword;
            await existingUser.save();
            console.log('Admin user updated successfully');
            console.log('User:', email);
            console.log('Pass:', password);
        } else {
            const user = new User({ email, password: hashedPassword });
            await user.save();
            console.log('Admin user created successfully');
            console.log('User:', email);
            console.log('Pass:', password);
        }

        mongoose.connection.close();
    } catch (err) {
        console.error('Error seeding admin:', err);
        process.exit(1);
    }
};

seedAdmin();
