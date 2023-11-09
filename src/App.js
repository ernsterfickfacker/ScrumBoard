import React from 'react';
import './App.css';
import Board from './components/Board'
import Task from './components/Task'
import ValueTextField from './components/Field.js'
import Get_Array_LS from './components/Export.js'
import {useState} from 'react';

function App() {
    const renderListOfUserNames = (names) => {
        if (names){
        return names.map(name => <Task id={name} className={"card"} draggable={true} taskName={name}/>)
        }
        else 
        {return null}
    }
return (
        
        <div className={"flexbox"}>
            <ValueTextField onChange = {renderListOfUserNames(Get_Array_LS())} />
            <Board id={"board1"} className={"board"} bucketName={"Backlog"}>
             {renderListOfUserNames(Get_Array_LS())} 
             </Board>
            <Board id={"board2"} className={"board2"} bucketName={"In progress"}/>
            <Board id={"board3"} className={"board2"} bucketName={"Done"}/>
            </div>
            
    );
}

export default App;
