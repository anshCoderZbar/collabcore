import { AiOutlineCheck } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";

export const TableColumns = [
  {
    name: "Company",
    selector: (row) => (
      <div className="d-flex align-items-center gap-2">
        <img src={row.img} alt="Company Logo" style={{ width: "50px" }} />
        <div className="company_table">
          <p className="table_para ">{row?.name}</p>
          <p className="table_sub_para  ">{row?.userId}</p>
        </div>
      </div>
    ),
  },
  {
    name: "Status",
    selector: (row) => (
      <>
        {row?.status.toLowerCase() === "paid" && (
          <button className="button_green">
            <span>
              <AiOutlineCheck />
            </span>
            {row.status}
          </button>
        )}
      </>
    ),
  },
  {
    name: "Date",
    selector: (row) => row.date,
  },
  {
    name: "Member",
    selector: (row) => (
      <img src={row.img} alt="Company Logo" style={{ width: "50px" }} />
    ),
  },
  {
    name: "Type",
    selector: (row) => row.type,
  },
  {
    cell: (row) => <BiDotsVerticalRounded row={row} />,
    allowOverflow: true,
    button: true,
  },
];

export const TableData = [
  {
    id: 1,
    name: "Forever 21",
    userId: "@forever21",
    img: require("app/assets/logo1.png"),
    status: "paid",
    date: "August 21,2023",
    type: "Sponsored Post",
  },
  {
    id: 2,
    name: "PrettyLittleThing",
    userId: "@prettylittlething",
    img: require("app/assets/logo2.png"),
    status: "paid",
    date: "August 21,2023",
    type: "Sponsored Post",
  },
  {
    id: 3,
    name: "Canon",
    userId: "@canon",
    img: require("app/assets/logo3.png"),
    status: "paid",
    date: "August 21,2023",
    type: "Sponsored Post",
  },
  {
    id: 4,
    name: "Zara",
    userId: "zara.com",
    img: require("app/assets/logo4.png"),
    status: "paid",
    date: "August 21,2023",
    type: "Sponsored Post",
  },
  {
    id: 5,
    name: "Zara",
    userId: "zara.com",
    img: require("app/assets/logo4.png"),
    status: "paid",
    date: "August 21,2023",
    type: "Sponsored Post",
  },
  {
    id: 6,
    name: "Zara",
    userId: "zara.com",
    img: require("app/assets/logo4.png"),
    status: "paid",
    date: "August 21,2023",
    type: "Sponsored Post",
  },
];
