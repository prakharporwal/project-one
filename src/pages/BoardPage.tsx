import React, {useState, useEffect} from "react";
import SectionArea  from "../components/SectionArea";
import TopBar from "../components/TopBar";
import './style/boardPage.scss'

type SectionType = {
  notes ?,
  section_name?:string
}

type BoardType = {
  sections?:SectionType[],
  board_name: string
}

export default function BoardPage() {
  
  const [board,setBoard] = useState<BoardType>() 
  
  // useEffect(()=>{
  // fetch("https://75d0a8fb-afd1-4331-9b0d-42ee4b880cd0.mock.pstmn.io/boards/all")
  // .then(async res=> {
  
  //   let tempBoard:Promise<BoardType> = res.json()
  //   console.log(tempBoard)
  
  //   setBoard(await tempBoard)
  // })},[])
  

  return (
    <div className="board-page">
      <div className="topbar-block">
        <TopBar></TopBar>
      </div>

      <div className="section-block">
        <SectionArea board={board}></SectionArea>
      </div>
    </div>
  );
}
