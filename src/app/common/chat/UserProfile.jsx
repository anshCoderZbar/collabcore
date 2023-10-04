import React from "react";
import { useAtom } from "jotai";

import { openUserProfile } from "store/ChatRoom";

import { BsSend } from "react-icons/bs";
import { BiSolidPhoneCall } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import pdfIcon from "app/assets/pdf_icon.png";
import pdf from "app/assets/dummy.pdf";

export const UserProfile = () => {
  const [__, setOpenProfile] = useAtom(openUserProfile);

  const onButtonClick = () => {
    fetch(pdf).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "SamplePDF.pdf";
        alink.click();
      });
    });
  };
  return (
    <div className="user-profile__wrapper">
      <div
        className="user-profile__close d-flex d-xl-none"
        onClick={() => setOpenProfile(false)}
      >
        <AiOutlineClose />
      </div>
      <div className="user-profile__avatar">
        <img
          src={require("app/assets/logo1.png")}
          alt="Jenny Smith"
          loading="lazy"
        />
      </div>
      <div className="user-profile__details mt-1">
        <span className="user-profile__name">Forever 21</span>
      </div>
      <div className="accordion mt-4" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Members
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body">
              <div className="member-profile">
                <img
                  src={require("app/assets/user-img.jpg")}
                  alt="user name"
                  className="user-image"
                />
                <div className="user-details">
                  <p className="user-name">Jenna McCarthy</p>
                  <div className="action-icons">
                    <button className="calling-icon">
                      <BiSolidPhoneCall />
                    </button>
                    <button className="share-icon">
                      <BsSend />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className="accordion-button show  "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Attachments
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse show"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body">
              <div className="d-flex align-items-center gap-2 attach_body">
                <div className="img">
                  <img src={pdfIcon} alt="pdf icon" width={40} />
                </div>
                <div className="pdf_details_vs">
                  <p> {pdf}</p>
                  <a
                    href={pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="pdf_view"
                  >
                    View
                  </a>
                  <button className="btn_download" onClick={onButtonClick}>
                    Download
                  </button>
                </div>
              </div>
              <div className="d-flex align-items-center gap-2 attach_body">
                <div className="img">
                  <img src={pdfIcon} alt="pdf icon" width={40} />
                </div>
                <div className="pdf_details_vs">
                  <p> {pdf}</p>
                  <a
                    href={pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="pdf_view"
                  >
                    View
                  </a>
                  <button className="btn_download" onClick={onButtonClick}>
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
