import React, {useState, useEffect} from "react";
import SectionArea  from "../components/SectionArea";
import TopBar from "../components/TopBar";
import './style/boardPage.scss'

type BoardType = {
  boardId: string,
  boardName: string,
  sections?:string
}

export default function BoardPage() {
  
  const [board,setBoard] = useState<BoardType>() 
  
  useEffect(()=>{
  fetch("https://75d0a8fb-afd1-4331-9b0d-42ee4b880cd0.mock.pstmn.io/boards/all")
  .then(async res=> {
  
    let tempBoard:Promise<BoardType> = res.json()
    console.log(tempBoard)
  
    setBoard(await tempBoard)
  })},[])
  

  return (
    <div className="board-page">
      <div className="topbar-block">
        <TopBar></TopBar>
      </div>

      <div className="section-block">
        { board && <SectionArea boardName={board.boardName} sections={board["sections"]}></SectionArea>}
      </div>
    </div>
  );
}
