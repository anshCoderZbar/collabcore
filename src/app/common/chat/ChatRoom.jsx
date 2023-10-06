import React from "react";

import { BiDotsHorizontalRounded } from "react-icons/bi";
import { useAtom } from "jotai";
import { openChatRoom } from "store/ChatRoom";
import { openUserProfile } from "store/ChatRoom";
import { ChatInput } from "./ChatInput";
import { userChating } from "app/mock/chat";

import { VerifyIcon } from "app/icons";
import { AiOutlineLeft } from "react-icons/ai";
import { BsDot } from "react-icons/bs";

export const ChatRoom = () => {
  const [, setShowChat] = useAtom(openChatRoom);
  const [, setOpenProfile] = useAtom(openUserProfile);

  let previousSender = null;

  return (
    <div className="chat__container">
      <div className="chat__wrapper">
        <div className="chat__messaging messaging-member--online  pl-2 pl-md-4 pr-2">
          <div className="chat__infos pl-2 pl-md-0">
            <div className="chat-member__wrapper">
              <div className="d-flex align-items-center">
                <div
                  className="chat_show_icon mx-1"
                  onClick={() => setShowChat(false)}
                >
                  <AiOutlineLeft />
                </div>
                <div className="chat-member__avatar">
                  <img
                    src={require("app/assets/logo1.png")}
                    alt="Jenny Smith"
                    loading="lazy"
                  />
                  <div className="user-status user-status--large"></div>
                </div>
                <div className="chat-member__details">
                  <span className="chat-member__name d-flex align-items-center gap-2">
                    Forever 21 <VerifyIcon />
                  </span>
                  <p className="chat-member__status">
                    2 Members
                    <span>
                      <BsDot /> 1 Online
                    </span>
                  </p>
                </div>
              </div>
              <div
                className="chat_dotes_icon"
                onClick={() => setOpenProfile(true)}
              >
                <BiDotsHorizontalRounded />
              </div>
            </div>
          </div>
        </div>
        <div className="chat__content px-1 sm-px-3">
          <ul className="chat__list-messages">
            {userChating?.map((data, i) => {
              const isNewSender = data.sender !== previousSender;
              previousSender = data.sender;
              return (
                <li key={i} className="justify-content-start">
                  <div className="chat-member__avatar">
                    {isNewSender && (
                      <img
                        src={data?.userImg}
                        alt={data?.sender}
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div className="chat_cont">
                    {isNewSender && (
                      <div className="chat__user">
                        <h2>{data?.sender}</h2>
                        <span>Thursday 11:40am</span>
                      </div>
                    )}
                    {data?.offerAmt && (
                      <div className="offer_box">
                        <div className="offer_heading">
                          Sponsored Post Request, (x2)
                        </div>
                        <div className="offer_main_details">
                          <div className="offer_details">
                            <div className="offer_head-time">
                              <div className="offer_sub_head">
                                Spring Summer Campaign
                              </div>
                              <div className="offer_amt">
                                <span>$ {data?.offerAmt}</span>
                              </div>
                              <div className="offer_date">{data?.date}</div>
                            </div>
                          </div>
                          <div className="offer_btns">
                            <button className="view_details">
                              View Details
                            </button>
                            <button className="accept_btn">Accept</button>
                            <button className="deny_btn">Deny</button>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="chat__user">
                      {data?.message && <p>{data?.message}</p>}

                      {data?.attachment && (
                        <div className="msg_img">
                          {data?.attachmentMsg && (
                            <h3>{data?.attachmentMsg}</h3>
                          )}
                          {data?.attachmentUrl && (
                            <a
                              href="#"
                              target="_blank"
                              rel="noreferrer"
                              className="d-block"
                            >
                              {data?.attachmentUrl}
                            </a>
                          )}
                          {data?.attachment && (
                            <img src={data?.attachment} alt="message-image" />
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <ChatInput />
      </div>
    </div>
  );
};
// <div className="chat__container">
//   <div className="chat__wrapper">
//     <div className="chat__messaging messaging-member--online  pl-2 pl-md-4 pr-2">
//       <div className="chat__infos pl-2 pl-md-0">
//         <div className="chat-member__wrapper">
//           <div className="d-flex align-items-center">
//             <div
//               className="chat_show_icon mx-1"
//               onClick={() => setShowChat(false)}
//             >
//               <AiOutlineLeft />
//             </div>
//             <div className="chat-member__avatar">
//               <img
//                 src={require("app/assets/logo1.png")}
//                 alt="Jenny Smith"
//                 loading="lazy"
//               />
//               <div className="user-status user-status--large"></div>
//             </div>
//             <div className="chat-member__details">
//               <span className="chat-member__name d-flex align-items-center gap-2">
//                 Forever 21 <VerifyIcon />
//               </span>
//               <p className="chat-member__status">
//                 2 Members <span>1 Online</span>
//               </p>
//             </div>
//           </div>
//           <div
//             className="chat_dotes_icon"
//             onClick={() => setOpenProfile(true)}
//           >
//             <BiDotsHorizontalRounded />
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="chat__content px-1 sm-px-3">
//       <ul className="chat__list-messages">
//         <li className="justify-content-start">
//           <div className="chat-member__avatar">
//             <img
//               src={require("app/assets/logo1.png")}
//               alt="Jenny Smith"
//               loading="lazy"
//             />
//           </div>
//           <div className="chat_cont">
//             <div className="chat__user">
//               <h2>Forever 21</h2>
//             </div>
//             <div className="offer_box">
//               <div className="offer_heading">
//                 Sponsored Post Request, (x2)
//               </div>
//               <div className="offer_main_details">
//                 <div className="offer_details">
//                   <div className="offer_head-time">
//                     <div className="offer_sub_head">
//                       Spring Summer Campaign
//                     </div>
//                     <div className="offer_amt">
//                       <span>$1500.00</span>
//                     </div>
//                     <div className="offer_date">
//                       August 23, 2023 | 3:15pm
//                     </div>
//                   </div>
//                 </div>
//                 <div className="offer_btns">
//                   <button className="view_details">View Details</button>
//                   <button className="accept_btn">Accept</button>
//                   <button className="deny_btn">Deny</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </li>
//         <li className="justify-content-start">
//           <div className="chat-member__avatar">
//             <img
//               src={require("app/assets/logo2.png")}
//               alt="Jenny Smith"
//               loading="lazy"
//             />
//           </div>
//           <div className="chat_cont">
//             <div className="chat__user">
//               <h2>Jenna McCarthy</h2>
//               <p>
//                 Hey Nicole, I'm Jenna! PR here at Forever 21. Thanks for
//                 accepting our collab, we can't wait to work with you. Head
//                 over to our website and pick out anything you'd like for the
//                 post.
//               </p>
//               <p>This tangerine top would look amazing!</p>
//               <div className="msg_img">
//                 <h3>Satin Cowl Neck Crop Top</h3>
//                 <a
//                   href="#"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="d-block"
//                 >
//                   forever21.com/us/2000468243.html...
//                 </a>
//                 <img
//                   src={require("app/assets/chat-message.png")}
//                   alt="message-image"
//                 />
//               </div>
//             </div>
//           </div>
//         </li>
//       </ul>
//     </div>
//     <ChatInput />
//   </div>
// </div>
