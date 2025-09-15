import { useState } from "react";
import { createTask } from "../api/tasks";
import { TextField, Button, Box, Paper, Typography } from "@mui/material";

export default function TaskForm({ onTaskCreated }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await createTask({ title, description });
            onTaskCreated(data);
            setTitle("");
            setDescription("");
        } catch (err) {
            console.error(err);
            alert("Erro ao criar task");
        }
    };

    return (
        <Paper sx={{ padding: 3, marginBottom: 3 }}>
            <Typography variant="h6" gutterBottom>
                Nova Task
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
                <TextField
                    label="Título"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <TextField
                    label="Descrição"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <Button variant="contained" color="primary" type="submit">
                    Adicionar
                </Button>
            </Box>
        </Paper>
    );
}
