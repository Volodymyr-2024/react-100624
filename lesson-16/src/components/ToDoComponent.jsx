import {
  AppBar,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  ListItemButton,
  IconButton,
  Toolbar,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ToDoItem from "./ToDoItem";
import { useState } from "react";

export default function ToDoComponent() {
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [todos, setTodos] = useState([]);

  function handleTodoTitleChange(e) {
    setNewTodoTitle(e.target.value);
  }

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo,
      ),
    );
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    addTodo({
      id: Date.now(),
      title: newTodoTitle,
      isChecked: false,
    });
    setNewTodoTitle("");
  }

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            To-Do List Application
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper sx={{ my: 2, p: 2 }}>
        <form onSubmit={handleFormSubmit}>
          <Typography variant="h5" component="p">
            Add a new task
          </Typography>
          <Stack direction="row" spacing={1}>
            <TextField
              fullWidth
              value={newTodoTitle}
              onChange={handleTodoTitleChange}
            />
            <Button type="submit" variant="contained">
              Add
            </Button>
          </Stack>
        </form>
        <Stack>
          <List>
            {todos.map((todo) => (
              <ToDoItem
                key={todo.id}
                todo={todo}
                onDelete={() => {
                  toggleTodo(todo.id);
                }}
                onToggle={() => {
                  toggleTodo(todo.id);
                }}
              />
            ))}
          </List>
        </Stack>
      </Paper>
    </Box>
  );
}
