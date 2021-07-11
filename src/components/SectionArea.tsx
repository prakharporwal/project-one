import React, { Component } from "react";
import Section from "./Section";
import "./style/sectionArea.scss";

class SectionArea extends Component {
    render() {
        return (
            <>
              <span className="board-name">Section Area</span>
              <div className="section-area">
                <Section></Section>
                <Section></Section>
                <Section></Section>
                <Section></Section>
                <Section></Section>
                <Section></Section>
                <Section></Section>
                <Section></Section>
                <Section></Section>
                <Section></Section>
                <Section></Section>
                <div className="new-section-button">
                    button
                </div>
              </div>
            </>
          );
    }
}

export default SectionArea;