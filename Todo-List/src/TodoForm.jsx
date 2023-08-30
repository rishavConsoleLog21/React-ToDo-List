import { ListItem } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Create from "@mui/icons-material/Create"
import {InputAdornment, IconButton} from "@mui/material";

export default function TodoForm({addTodo}) {
  const [todo, setTodo] = useState("");
  const handleChange = (evt) => {
    setTodo(evt.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo("")
  }
  return (
    <ListItem>
        <form onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        onChange={handleChange}
        value={todo}
        InputProps={{
            endAdornment: ( <InputAdornment position="end">
            <IconButton
              aria-label="create todo"
              edge="end" type="submit">
                
              <Create />
            </IconButton>
          </InputAdornment>)
        }}
      />
      </form>
    </ListItem>
  );
}
