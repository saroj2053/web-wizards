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
              Our team came together to lay the foundation for CampusFlow. We meticulously handled project requirements,
              ensuring a solid groundwork for the development journey.
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
              We delved into design prototyping, giving shape to the visual identity of CampusFlow. Simultaneously, development kicked off,
              marking a crucial step towards bringing our vision to life.
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
              CampusFlow witnessed extensive efforts in data collection, coupled with the implementation of automation tools.
              Rigorous testing processes were applied to guarantee a robust and reliable platform.
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
              As February unfolded, CampusFlow reached a significant milestone with deployment. Marketing strategies were set in motion,
              complemented by comprehensive integration testing to ensure seamless functionality.
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
              On March 5, 2024, we are thrilled to announce the highly anticipated launch of CampusFlow! This milestone marks a significant
              achievement for us as we unveil our platform designed to revolutionize and simplify the university experience. Get ready to embark on a new era of streamlined academic journeys with CampusFlow.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Milestone;
