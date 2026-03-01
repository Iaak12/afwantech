const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            console.error('Auth Filter: No Bearer token found in headers');
            return res.status(401).json({ message: 'Unauthorized: No token provided' });
        }

        const token = authHeader.split(' ')[1];
        if (!token || token === 'null' || token === 'undefined') {
            console.error('Auth Filter: Token is empty or null string');
            return res.status(401).json({ message: 'Unauthorized: Invalid token format' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_super_secret_key_here');
        req.user = decoded;
        next();
    } catch (err) {
        console.error('Auth Filter Error:', err.message);
        res.status(401).json({ message: 'Unauthorized: ' + err.message });
    }
};

module.exports = authMiddleware;
