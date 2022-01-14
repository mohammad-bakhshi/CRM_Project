const Manager = require('../models/manager');


exports.getAllManagers = async (req, res, next) => {
    try {
        let [managers,_] = await Manager.findAll();
        res.status(200).json({count:managers.length,managers:managers});
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.getManagerById=async (req, res, next) => {
    try {
        let managerId=req.params.id;
        let [manager,_]=await Manager.findById(managerId);
        res.status(200).json({manager:manager[0]});
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.createNewManager = async (req, res, next) => {
    try {
        let manager=new Manager(req.body.id,req.body.name,req.body.phoneNumber,req.body.nationalCode);
        manager=await manager.save();
        console.log(manager);
        res.status(201).json({message: 'Manager created successfully'});
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.updateManager = async (req, res, next) => {
   try {
       let managerId=req.params.id;
       let manager=new Manager(managerId,req.body.name,req.body.phoneNumber,req.body.nationalCode);
       manager=await manager.update();
       res.status(201).json({message:'Manager was updated successfully'});
   } catch (error) {
    console.log(error);
    next();
   }
}

exports.deleteManager = async (req, res, next) => {
   try {
    let managerId=req.params.id;
    await Manager.delete(managerId);
    res.status(200).json({message:'Manager was deleted successfully'});
   } catch (error) {
       console.log(error);
       next();
   }
}