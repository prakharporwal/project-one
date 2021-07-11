import React, {useState} from "react";
import Note from "./Note";
import "./style/section.scss";

type Note ={
  text:string;

}

export default function Section() {

  const [noteList, setNoteList] = useState<Note[]>()

  function onNewPostAdd(){
  
  }

  return (
    <div className="section">
      <div className="section-header">
        <div className="section-name">Section</div  >
        <span className="section-buttons">
          <button onClick={onNewPostAdd}>+New</button>
          <button title="change view">🎁</button>
        </span>
      </div>
      <div className="note-list">
        <Note text="note"></Note>
        <Note text="note"></Note>
        <Note text="note"></Note>
        <Note text="note"></Note>
        <Note text="note"></Note>
        <Note text="note"></Note>
        <Note text="note"></Note>
        <Note text="note"></Note>
        <Note text="note"></Note>
        <Note text="note"></Note>
        <Note text="note"></Note>
        <Note text="note"></Note>
        <Note text="note"></Note>
        <Note text="note"></Note>
        <Note text="note"></Note>
        <Note text="note"></Note>
        <Note text="note"></Note>
        <Note text="note"></Note>
        <Note text="note"></Note>
        <Note text="note"></Note>
      </div>
    </div>
  );
}
