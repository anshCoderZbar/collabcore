import React from "react";
import DataTable from "react-data-table-component";

import { TableColumns } from "app/mock/Projects";
import { TableData } from "app/mock/Projects";
import { useNavigate } from "react-router-dom";

export const Table = () => {
  const navigate = useNavigate();

  return (
    <DataTable
      columns={TableColumns}
      data={TableData}
      pagination
      highlightOnHover={true}
      pointerOnHover={true}
      paginationPerPage={5}
      onRowClicked={(e) =>
        navigate(`/projects/${e?.name.replaceAll(" ", "_")}`)
      }
    />
  );
};
