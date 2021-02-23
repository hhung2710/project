const express = require('express');

const employeeController = require('../controller/employee');

const router = express.Router();


router.get('/alluser', employeeController.getAllUser);

router.post('/adduser', employeeController.postNewUser);

router.put('/update/:id', employeeController.updateUser);

router.delete('/delete/:id', employeeController.deleteUser);

module.exports = router;