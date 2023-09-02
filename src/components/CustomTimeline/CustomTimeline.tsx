import React, { ReactNode } from "react";
import { Box } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { timelineItemClasses } from "@mui/lab/TimelineItem";
import { sidebarItemClicked } from "../../assets/colors";

interface TimelineItemProps {
  title: string;
  subTitle: ReactNode;
  description?: string;
}

const TimelineEntry: React.FC<TimelineItemProps> = ({
  title,
  subTitle,
  description,
}) => {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
          style={{
            width: "20px",
            height: "20px",
            marginRight: 0,
            background: sidebarItemClicked,
          }}
        />
        <TimelineConnector />
      </TimelineSeparator>

      <TimelineContent>
        <Box>
          <div className="font-semibold mb-1">{title}</div>
          <div className="font-light text-sm">{subTitle}</div>
          {description && (
            <div>
              <p>{description}</p>
            </div>
          )}
        </Box>
      </TimelineContent>
    </TimelineItem>
  );
};

interface ICVTimeline {
  timelines: TimelineItemProps[];
}
const CVTimeline = ({ timelines }: ICVTimeline) => {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {timelines.map((item, index) => (
        <TimelineEntry key={index} {...item} />
      ))}
    </Timeline>
  );
};

export default CVTimeline;
