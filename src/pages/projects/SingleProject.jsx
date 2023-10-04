import React from "react";
import { Link, useParams } from "react-router-dom";

import "styles/Projects.css";

import img1 from "app/assets/logo1.png";
import img2 from "app/assets/logo2.png";
import img3 from "app/assets/logo3.png";
import pdfIcon from "app/assets/pdf_icon.png";

import pdf from "app/assets/dummy.pdf";

import { AiOutlineCheck } from "react-icons/ai";

export const SingleProject = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch(pdf).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "SamplePDF.pdf";
        alink.click();
      });
    });
  };
  const { id } = useParams();

  return (
    <div className="project_component">
      <div className="container">
        <div className="d-flex align-items-center  project_top">
          <h2>Home/</h2>
          <Link to={"/projects"}>Projects</Link>
          <p className="m-0 fs-6">/{id.replaceAll("_", " ")}</p>
        </div>
        <div className="project_heading">
          <h1>{id.replaceAll("_", " ")}</h1>
          <p className="team_assigned">Team Assigned</p>
        </div>
        <div className="team d-flex gap-3">
          <img src={img1} alt="team" width={50} />
          <img src={img2} alt="team" width={50} />
          <img src={img3} alt="team" width={50} />
        </div>
        <div className="page-btn">
          <ul>
            <li>
              <button className="nav-btns">View documents</button>
            </li>
            <li>
              <button className="nav-btns">View in messages</button>
            </li>
            <li>
              <button className="nav-btns">Go to calender</button>
            </li>
            <li>
              <button className="nav-btns">Archive</button>
            </li>
          </ul>
        </div>
        <div className="project-details-data">
          <div className="detail_box">
            <div className="detail_head">Project Details</div>
            <div className="project_main_details">
              <div className="row">
                <div className="col-md-6">
                  <ul>
                    <li>
                      <div className="row flex-nowrap">
                        <span className="span_head col-4 col-lg-3">
                          Project Name
                        </span>
                        <span className="span_details col-8 col-lg-9">
                          Spring Summer Campaign
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="row flex-nowrap">
                        <span className="span_head col-4 col-lg-3">
                          Project Status
                        </span>
                        <span className="span_details col-8 col-lg-9">
                          <button className="button_green">
                            <span>
                              <AiOutlineCheck />
                            </span>
                            Paid
                          </button>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="row flex-nowrap">
                        <span className="span_head col-4 col-lg-3">
                          Date Recieved
                        </span>
                        <span className="span_details col-8 col-lg-9">
                          August 17, 2023
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="row flex-nowrap">
                        <span className="span_head col-4 col-lg-3">
                          Deadline
                        </span>
                        <span className="span_details col-8 col-lg-9">
                          August 25, 2023 | 3:30 PM EST
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="row flex-nowrap">
                        <span className="span_head col-4 col-lg-3">
                          Compensation
                        </span>
                        <span className="span_details col-8 col-lg-9">
                          $1,700.00 USD
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul>
                    <li>
                      <div className="row flex-nowrap">
                        <span className="span_head col-4 col-lg-3">
                          Collaboration Type
                        </span>
                        <span className="span_details col-8 col-lg-9">
                          Sponsored Post(s), 2x
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="row flex-nowrap">
                        <span className="span_head col-4 col-lg-3">
                          Targeted Network
                        </span>
                        <span className="span_details col-8 col-lg-9">
                          Instagram
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="row flex-nowrap">
                        <span className="span_head col-4 col-lg-3">
                          Brand Website
                        </span>
                        <span className="span_details col-8 col-lg-9">
                          Forever21.com
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="row flex-nowrap">
                        <span className="span_head col-4 col-lg-3">
                          Brand Username
                        </span>
                        <span className="span_details col-8" col-lg-9>
                          @forever21
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="row flex-nowrap">
                        <span className="span_head col-4 col-lg-3">
                          Location
                        </span>
                        <span className="span_details col-8 col-lg-9">N/A</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-description">
          <div className="detail_box">
            <div className="detail_head">Description</div>
            <div className="project_main_description">
              <p>
                Join the Forever 21 Infoencer Campaign: Elevate your influence
                by collaboratirq with us to showcase cur latest fashion
                collection to your engaged aodiemee_ the essenceof attord&ble
                and trendy styles, inspiring your followers to express
                themselves confidently through fashion. Create captivatirg
                cmtent across yeur preferred social platforms, including outfit
                sty•Mg. try-on haLAs, and engaging sttyies. While participating
                in *geractive giveaways exclusive in-store events. Arnpffy your
                reoch, engagement, and an impact partner bring 'ashiOri-Wward,
                I•OOkS to the to "spire and conrgct fashion enthusiasts. leaving
                • luting impression on the fas&n landscape.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="project-details-data  project-tags">
              <div className="detail_box">
                <div className="detail_head">Tags</div>
                <div className="project_main_details">
                  <button className="project_btns">Sponsored</button>
                  <button className="project_btns">Clothing</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="project-details-data  project-tags">
              <div className="detail_box">
                <div className="detail_head">Notes</div>
                <div className="project_main_details">
                  <p>Ask Jenna brand ambasador position</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-attachments">
          <div className="detail_box">
            <div className="detail_head">Attachments</div>
            <div className="project_main_details">
              <div className="row fp-vs">
                <div className="col-md-4">
                  <div className="d-flex align-items-center gap-2">
                    <div className="img">
                      <img src={pdfIcon} alt="pdf icon" width={50} />
                    </div>
                    <div className="pdf_details">
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
                <div className="col-md-4">
                  <div className="d-flex align-items-center gap-2">
                    <div className="img">
                      <img src={pdfIcon} alt="pdf icon" width={50} />
                    </div>
                    <div className="pdf_details">
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
      </div>
    </div>
  );
};
