const express = require('express');
const userSchemas = require('../JoiValidationSchema/UserValidator.js');
const {commonValidate} = require('../middlewares/commonValidate.middleware.js');
const router = express.Router();

// Define user-related routes here
router.get('/', (req, res) => {
    res.send('User route is working');
});

router.post(
    '/register',
     commonValidate({body: userSchemas.register}), 
    (req, res) => {
    // Registration logic here
    // Send back the validated body (res.send ignores a second argument)
    res.status(201).json({ 
               message: 'User registration endpoint',
               validatedBody: req.validateBody });
});

router.post('/login',
    commonValidate({body: userSchemas.login}),
    (req, res) => {
    // Login logic here
    res.status(200).json({ message: 'User login endpoint', validatedBody: req.validateBody });
});

router.get('/:id',
    commonValidate({params: userSchemas.id}),
    (req,res)=>{
    // Get user by ID logic here
    res.status(200).json({ message: `Get user with ID ${req.params.id}`, validatedParams: req.validateParams });
});
 
module.exports = router; 