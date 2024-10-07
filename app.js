const express = require("express");
const app = express();
const cors = require("cors");
const taskRouter = require("./routes/taskRouter");
const port = 4000;

app.use(express.json());
app.use("/tasks", taskRouter);

app.listen(port, () => {
  console.log(`server is lisining on port http://localhost:${port}`);
});
