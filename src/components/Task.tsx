import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DoneOutlinedIcon from '@material-ui/icons/DoneOutlined';


interface CustomProps {
    children?: any;
    id: string,
    className: string
    draggable: boolean
    taskName: string
    
}

function Task(props: CustomProps) {

    const dragStart = (e: any) => {
        const target = e.target
        e.dataTransfer.setData('cardId', target.id)
        e.dataTransfer.setData('taskName', target.taskName)
    }

    const dragOver = (e: any) => {
        e.stopPropagation();
    }

    const onDragHandler = (e: any) => {
        e.preventDefault();
    }
  

    function handleMarkAsCompleted(e: any){
        const target = document.getElementById(props.id);
        const task = document.getElementById(props.taskName);
        // const el.taskName  
        if(target){
            setTimeout(()=>{
                target.style.transition = "opacity 0.4s"
                target.style.opacity = "0";
                
                setTimeout(() => {
                    target.style.display = "none";
                }, 450)
            }, 0)
            
            //  alert(el);
            // alert(task?.textContent);
            // const del_task = '"'+String(task?.textContent)+'"';
            const del_task = String(task?.textContent);
            alert("Delete Task "+ del_task);
            var todos  = JSON.parse(String(localStorage.getItem('tasks')));
            todos.splice(todos.indexOf(del_task), 1);
            localStorage.setItem('tasks', JSON.stringify(todos));
            // localStorage.removeItem("tasks", del_task);
        }
    }

    return (
        <Card
            id={props.id}
            className={props.className}
            onDrag={onDragHandler}
            draggable={props.draggable}
            onDragStart={dragStart}
            onDragOver={dragOver}
            raised={true}
            
        >
            <CardContent>
                <Typography variant="h6" component="h2">
                    {props.taskName}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton onClick={handleMarkAsCompleted}>
                    <DoneOutlinedIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default Task;