import React, { ChangeEvent, Component, useState } from "react";
import Section from "./Section";
import "./style/sectionArea.scss"

type SectionType = {
  notes ?,
  section_name?:string
}

type BoardType = {
  sections?: SectionType[],
  board_name: string
}

type SectionAreaPropsType ={
  board: BoardType
}

const SectionArea= (props: SectionAreaPropsType)=> {

      let [sectionList,setSectionList] = useState<SectionType[]>(props.board?props.board.sections:[])
      let [showNewSection, setShowNewSection] = useState(false)
      const [newSectionName, setNewSectionName] = useState("")
  
      function onChangeSetSectionName(event:ChangeEvent<HTMLInputElement>){
        setNewSectionName(event.target.value)
      }

      function addSection(){
        let newSection:SectionType = {
          section_name: newSectionName ,
          notes:[]
        }
        sectionList.push(newSection)
        setSectionList(sectionList)

        setShowNewSection(false)
      }

      return (
            <>
              <span className="board-name">{props.board?props.board.board_name:""}</span>
              <div className="section-area">
                {sectionList && sectionList.map((section)=>{
                  return <Section section={section} ></Section>
                })}

                {
                  showNewSection && 
                  <div>
                    <input type="text" onChange={onChangeSetSectionName}/>
                    <button type="submit" onClick={addSection}>Submit</button>
                  </div>
                }

                {
                  !showNewSection &&
                  <div className="new-section-button">
                    <button type="button" onClick={()=>{setShowNewSection(true)}}>Add Section</button>
                  </div>
                } 
              </div>
            </>
          );
    }

export default SectionArea;