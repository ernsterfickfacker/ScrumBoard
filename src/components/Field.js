import { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Task from 'C:/Users/Мария/Desktop/l2/src/components/Task.tsx'

export default function GetItem() {
  const[tasks, setTasks] = useState([]);

  function SetItem(data)
{
    var a = [];
    a = JSON.parse(localStorage.getItem('tasks')) || [];
    a.push(data);
    // alert(a);  
    localStorage.setItem('tasks', JSON.stringify(a));
    return 0;
}

function func(tasks)
{
  SetItem(tasks);
  window.location.reload(); 
}

  return (
    
    <Stack>
      <TextField
        onChange={(newValue) => setTasks(newValue.target.value)}
        id="filled-1"
        label="Task"
        variant="outlined"
        value={tasks}
        
      />
 
      <Button 
      variant="outlined"  onClick={()=>{func(tasks)}}>Add</Button>
      {/* <Button variant="outlined" onClick={()=>{ const a = GetItem();}}> 🆙</Button> */}
      {/* const a = {GetItem_new()} */}
      
    </Stack>
  );
}



