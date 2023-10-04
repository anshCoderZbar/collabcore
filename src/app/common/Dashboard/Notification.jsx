import React from "react";

import { Today, Yesterday } from "./function";
import { Notifications } from "app/mock/Dashboard";

import { BsCheck2All } from "react-icons/bs";
import { BiDotsVerticalRounded } from "react-icons/bi";

export const Notification = () => {
  const uniqueDate = [...new Set(Notifications?.map((data) => data?.date))];
  const groupByDate = uniqueDate?.map((date) => {
    return {
      date: date,
      elm: Notifications?.filter((data) => data.date === date),
    };
  });

  return (
    <>
      <div className="notification_sidebtn">
        <button className="mark_archive">Archive</button>
        <button className="mark_read">
          <BsCheck2All /> Mark all as read
        </button>
        <button className="view_notificatio_dots">
          <BiDotsVerticalRounded />
        </button>
      </div>
      {groupByDate?.map((data, i) => {
        let dateTxt = data?.date;
        if (data?.date === Today) {
          dateTxt = "Today";
        } else if (data?.date === Yesterday) {
          dateTxt = "Yesterday";
        } else {
          dateTxt = data?.date;
        }
        return (
          <div className="notification_table " key={i}>
            <div className={`date ${i === 0 ? "first-notification" : ""}`}>
              <span>{dateTxt}</span>
            </div>
            {data?.elm?.map((elm, i) => {
              return (
                <div key={i} className="notification_wrapper">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center notification_details">
                      {/* {elm?.img && <img src={elm?.img} alt="logo" />} */}
                      <p dangerouslySetInnerHTML={{ __html: elm?.heading }} />
                    </div>
                    <div className="time_stamp">
                      {elm?.unread && <span></span>}
                      <p>2h ago</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};
