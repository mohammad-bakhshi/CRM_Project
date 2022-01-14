const Project = require('../models/project');


exports.getAllProjects = async (req, res, next) => {
    try {
        let [projects,_] = await Project.findAll();
        res.status(200).json({count:projects.length,projects:projects});
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.getProjectById=async (req, res, next) => {
    try {
        let projectId=req.params.id;
        let [project,_]=await Project.findById(projectId);
        res.status(200).json({project:project[0]});
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.createNewProject = async (req, res, next) => {
    try {
        let project=new Project(req.body.id,req.body.title,req.body.description);
        project=await project.save();
        res.status(201).json({message: 'Project created successfully'});
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.updateProject = async (req, res, next) => {
   try {
       let projectId=req.params.id;
       let project=new Project(parseInt(projectId),req.body.title,req.body.description);
       project=await project.update();
       res.status(201).json({message:'Project was updated successfully'});
   } catch (error) {
    console.log(error);
    next();
   }
}

exports.deleteProject = async (req, res, next) => {
   try {
    let projectId=req.params.id;
    await Project.delete(projectId);
    res.status(200).json({message: 'Project was deleted successfully'});
   } catch (error) {
       console.log(error);
       next();
   }
}