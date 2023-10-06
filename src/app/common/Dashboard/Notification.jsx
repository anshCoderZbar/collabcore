import React, { useState } from "react";

import { Today, Yesterday } from "./function";
import { Notifications as initialNotifications } from "app/mock/Dashboard";

import { BsCheck2All } from "react-icons/bs";
import { BiDotsVerticalRounded } from "react-icons/bi";

export const Notification = () => {
  const [Notifications, setNotifications] = useState(initialNotifications);

  const uniqueDate = [...new Set(Notifications?.map((data) => data?.date))];

  const handleMarkRead = () => {
    const markAsUnread = Notifications?.map((data) => {
      if (data?.unread === true) {
        return {
          ...data,
          unread: false,
        };
      } else {
        return { ...data };
      }
    });
    setNotifications(markAsUnread);
  };

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
        <button onClick={handleMarkRead} className="mark_read">
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
              <p>{dateTxt}</p>
              {i === 0 && <span className="unread_noti ">7 notifications</span>}
            </div>
            {data?.elm?.map((elm, i) => {
              return (
                <div key={i} className="notification_wrapper">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center notification_details">
                      {elm?.img && <img src={elm?.img} alt="logo" />}
                      <p dangerouslySetInnerHTML={{ __html: elm?.heading }} />
                      {elm?.completed && (
                        <div className="noti_comp">
                          <span>Completed</span>
                        </div>
                      )}
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
