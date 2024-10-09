let tasks = [];
let taskId = 1;

export const getAllTask = (req, res) => {
  res.json({ success: true, data: tasks });
};

export const getSingleTask = (req, res) => {
  const { taskId } = req.params;
  console.log(taskId)
  const singleTask = tasks.filter((task) => task.id === Number(taskId));
  console.log(tasks)
  if (!singleTask) {
    return res.status(404).json({ success: false, message: "Item not found" });
  }
  console.log(singleTask);
  res.json({ success: true, data: singleTask });
};

export const postTask = (req, res) => {
  const { taskName, description } = req.body;
  if(!taskName){
    return res.status(404).json({ success: false, message: "Taskname is null" });
  }
  console.log(taskName, description);
  tasks.push({ id: taskId, ...req.body });
  taskId = taskId + 1;

  res.json({ success: true, message: "Task is added successfully" });
};

export const deleteTask = (req, res) => {
  let { taskId } = req.params;
  const initialLength = tasks.length;
  tasks = tasks.filter((task) => task.id !== Number(taskId));
  if (tasks.length === initialLength) {
    return res.status(404).json({ success: false, message: "Item not found" });
  }
  res.json({ success: true, message: "deleted successfully" });
};
export const editTask = (req, res) => {
  let { taskId } = req.params;
  const { taskName, description } = req.body;
  const taskIndex = tasks.findIndex((task) => task.id === Number(taskId));
  if (taskIndex === -1) {
    return res.status(404).json({ success: false, message: "Task not found" });
  }

  if (taskName) tasks[taskIndex].taskName = taskName;
  if (description) tasks[taskIndex].description = description;

  res.json({
    success: true,
    message: "Task updated successfully",
    data: tasks[taskIndex],
  });
};
 