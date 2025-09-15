import { useEffect, useState } from "react";
import { getTasks, deleteTask } from "../api/tasks";
import {
    List,
    ListItem,
    ListItemText,
    IconButton,
    Paper,
    Typography,
    Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TaskList({ refreshKey }) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, [refreshKey]);

    const fetchTasks = async () => {
        try {
            const { data } = await getTasks();
            setTasks(data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteTask(id);
            setTasks(tasks.filter((t) => t.id !== id));
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Paper sx={{ padding: 3 }}>
            <Typography variant="h6" gutterBottom>
                Lista de Tasks
            </Typography>
            <List>
                {tasks.map((task) => (
                    <div key={task.id}>
                        <ListItem
                            secondaryAction={
                                <IconButton edge="end" onClick={() => handleDelete(task.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            }
                        >
                            <ListItemText
                                primary={task.title}
                                secondary={task.description || "Sem descrição"}
                            />
                        </ListItem>
                        <Divider />
                    </div>
                ))}
            </List>
        </Paper>
    );
}
