import React, {ChangeEvent, ChangeEventHandler, useState} from "react";
import Note from "./Note";
import "./style/section.scss";

type NoteType ={
  id?:string,
  text:string;

}

type SectionType= {
  section_name?: string,
  section_id?: string,
  notes:NoteType[]  
}


export default function Section({section}){

  let [noteList, setNoteList] = useState<NoteType[]>(section.notes)
  const [showNewPostModal, setShowNewPostModal] = useState<boolean>(false);
  const [newPost,setNewPost] = useState<NoteType>()
  
  function showModal(){
    setShowNewPostModal(true);
  }

  function changePost(event:ChangeEvent<HTMLInputElement>){
    let post:NoteType={text:event.target.value}
    console.log(event.target.value)
    setNewPost(post)
  }

  function submitPost(){
    if (newPost.text!=="" ){
      setNoteList([...noteList,newPost])
    }
    setShowNewPostModal(false)
  }

  return (
    <div className="section">
      <div className="section-header">
        <div className="section-name">{section["section_name"]}</div>
        <span className="section-buttons">
          <button onClick={showModal}>+New</button>
          <button title="change view">🎁</button>
        </span>
      </div>
      <div className="note-list">
        {
           noteList &&
            noteList.map((note) =>{
              return <Note text={note.text}></Note>
            })

        }
      </div>
      { 
        showNewPostModal&& 
          <div>
            <input type="text" onChange={changePost}/>
            <button type="submit" onClick={submitPost}>
            Submit
            </button>
          </div>
      }
    </div>
  );
}
