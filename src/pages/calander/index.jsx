import React from "react";
import { Scheduler } from "@aldabil/react-scheduler";
import { EVENTS } from "app/mock/calander";

export const Calander = () => {
  return (
    <div className="calander_page">
      <div className="container">
        <Scheduler
          view="week"
          selectedDate={new Date()}
          events={EVENTS}
          editable={false}
          fields={{ name: "description", type: "input" }}
          customViewer={true}
          deletable={false}
        />
      </div>
    </div>
  );
};
