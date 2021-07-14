import React, { ChangeEvent, Component, useState } from "react";
import Section from "./Section";
import "./style/sectionArea.scss"

type SectionType = {
  notes ?,
  section_name:string
}
const SectionArea= ({sections, boardName})=> {

      let [sectionList,setSectionList] = useState<SectionType[]>(sections)
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
        setSectionList([...sectionList, newSection])

        setShowNewSection(false)
      }

      return (
            <>
              <span className="board-name">{boardName}</span>
              <div className="section-area">
                {sectionList.length && sectionList.map((section)=>{
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