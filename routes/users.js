const express = require('express');
const router = express.Router();


// Create user 
router.post('/users', (req, res) => {
    res.json({ message: 'User created' });
})


module.exports = router;
