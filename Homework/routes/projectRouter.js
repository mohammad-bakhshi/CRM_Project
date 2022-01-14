const express = require("express");
const router = express.Router();
const projectControllers = require("../controllers/projectControllers");

//read projects
router.get('/read', projectControllers.getAllProjects);
//read a special project
router.get('/read/:id',projectControllers.getProjectById)
//create project
router.post('/create', projectControllers.createNewProject);
//update project
router.post('/update/:id', projectControllers.updateProject);
//delete project
router.get('/delete/:id', projectControllers.deleteProject);


module.exports = router;