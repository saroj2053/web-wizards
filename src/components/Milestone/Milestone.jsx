import React from "react";
import "./Milestone.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Milestone = () => {
  return (
    <>
      <h1 className="milestone__heading">Our Milestones</h1>
      <div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work animated-element"
            contentStyle={{ background: "rgb(67, 154, 134)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(67, 154, 134)" }}
            date="Nov. 2023"
            iconStyle={{ background: "rgb(67, 154, 134)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Milestone 1</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Team Building, Requirements Handling
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
              modi!
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work animated-element"
            contentStyle={{ background: "rgb(65, 74, 76)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(65, 74, 76)" }}
            date="Dec. 2023"
            iconStyle={{ background: "rgb(65, 74, 76)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Milestone 2</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Design Prototyping, Starting Development
            </h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur, labore?
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work animated-element"
            contentStyle={{ background: "rgb(67, 154, 134)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(67, 154, 134)" }}
            date="Jan. 2024"
            iconStyle={{ background: "rgb(67, 154, 134)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Milestone 3</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Data Collection, Automation Tool and Testing
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Deserunt, laborum.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work animated-element"
            contentStyle={{ background: "rgb(65, 74, 76)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(65, 74, 76)" }}
            date="Feb. 2024"
            iconStyle={{ background: "rgb(65, 74, 76)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Milestone 4</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Deployment, Marketing Strategies and Integration Testing
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Deserunt, laborum.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work animated-element"
            contentStyle={{ background: "rgb(67, 154, 134)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(67, 154, 134)" }}
            date="Mar. 2024"
            iconStyle={{ background: "rgb(67, 154, 134)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Milestone 5</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Launch of CampusFlow
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Deserunt, laborum.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Milestone;
