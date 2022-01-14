const express = require("express");
const router = express.Router();
const managerControllers = require("../controllers/managerControllers");

//read managers
router.get('/read', managerControllers.getAllManagers);
//read a special manager
router.get('/read/:id', managerControllers.getManagerById)
//create manager
router.post('/create', managerControllers.createNewManager);
//update manager
router.post('/update/:id', managerControllers.updateManager);
//delete manager
router.get('/delete/:id', managerControllers.deleteManager);


module.exports = router;