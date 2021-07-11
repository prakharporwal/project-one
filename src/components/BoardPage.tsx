import React from "react";
import SectionArea  from "./SectionArea";
import TopBar from "./TopBar";
import './style/boardPage.scss'


export default function BoardPage() {
  return (
    <div className="board-page">
      <div className="topbar-block">
        <TopBar></TopBar>
      </div>

      <div className="section-block">
        <SectionArea></SectionArea>
      </div>
    </div>
  );
}
