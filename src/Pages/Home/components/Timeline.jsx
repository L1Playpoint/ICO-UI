import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

export default function TimelineContainer() {
  return (
    <div className="timeline__container">
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h1 className="title">Quarter 1</h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam sint voluptatum aliquam in facilis voluptas voluptate iste totam. Aliquid sint cum fugiat autem quam illum sed dolor sapiente temporibus modi!
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h1 className="title">Quarter 2</h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam sint voluptatum aliquam in facilis voluptas voluptate iste totam. Aliquid sint cum fugiat autem quam illum sed dolor sapiente temporibus modi!
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h1 className="title">Quarter 3</h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam sint voluptatum aliquam in facilis voluptas voluptate iste totam. Aliquid sint cum fugiat autem quam illum sed dolor sapiente temporibus modi!
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>
            <h1 className="title">Quarter 4</h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam sint voluptatum aliquam in facilis voluptas voluptate iste totam. Aliquid sint cum fugiat autem quam illum sed dolor sapiente temporibus modi!
            </p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
