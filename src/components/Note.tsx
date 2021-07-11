import React from 'react'
import './style/note.scss'

type NoteProps={
    text:string;
}

function Note(props:NoteProps) {
    return (
        <div className="note">
           <div className="note-text">{props.text}</div>    
        </div>
    )
}

export default Note
