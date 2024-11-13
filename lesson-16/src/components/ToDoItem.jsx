import {
  Stack,
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ToDoItem({ todo, onDelete, onToggle }) {
  return (
    <ListItem fullWidth>
      <Stack
        sx={{ width: "100%" }}
        direction="row"
        justifyContent="space-between"
      >
        <Stack direction="row" alignItems="center">
          <Checkbox checked={todo.isChecked} onChange={onToggle} />

          <Typography
            sx={{
              textDecoration: todo.isChecked ? "line-through" : "none",
              WebkitLineClamp: 1,
            }}
          >
            {todo.title}
          </Typography>
        </Stack>

        <IconButton onClick={onDelete} color="error" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Stack>
    </ListItem>
  );
}
