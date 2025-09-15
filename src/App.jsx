import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { Container, Typography } from "@mui/material";

export default function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleTaskCreated = () => setRefreshKey((prev) => prev + 1);

  return (
    <Container maxWidth="sm" sx={{ marginTop: 5 }}>
      <Typography variant="h4" gutterBottom align="center">
        Tasks Manager
      </Typography>
      <TaskForm onTaskCreated={handleTaskCreated} />
      <TaskList refreshKey={refreshKey} />
    </Container>
  );
}
