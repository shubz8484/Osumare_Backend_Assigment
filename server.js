const express = require('express');
const app = express();
const port = 4000;
const taskRoutes = require('./routes/taskRoutes');

app.use(express.json());
app.use('/api', taskRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); 
