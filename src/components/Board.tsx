import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


interface CustomProps {
    children?: React.ReactNode,
    id?: string
    className?: string
    bucketName: string
}

function Board(props: CustomProps) {

    const drop = (e: any) => {
        e.preventDefault();
        const cardId = e.dataTransfer.getData('cardId');
        const text = e.dataTransfer.getData('taskName');

        const card = document.getElementById(cardId);
        if(card){
            card.style.display = 'block';
            // alert(cardId);
            // alert(text);
            // localStorage.removeItem(text);

        }

        e.target.appendChild(card);
       
    }

    const dragOver = (e: any) => {
        e.preventDefault();
    }

    return (
        <Paper
        id={props.id}
        className={props.className}
        onDrop={drop}
        onDragOver={dragOver}
        >
            <Typography>
                <h1>{props.bucketName}</h1>
            </Typography>
            {props.children}
        </Paper>
    );
}

export default Board;