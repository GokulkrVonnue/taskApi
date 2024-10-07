var express = require('express');
const { getAllTask, getSingleTask, postTask, deleteTask, editTask } = require('../controller/taskContoller');
var taskRouter = express.Router();


taskRouter.get("", getAllTask);
taskRouter.post("", postTask);
taskRouter.get("/:taskId", getSingleTask);
taskRouter.delete("/:taskId", deleteTask);
taskRouter.patch("/:taskId", editTask);

module.exports = taskRouter;
