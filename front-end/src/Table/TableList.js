import React from "react";
import FinishButton from "../Buttons/FinishButton";

function TableList({ tableData }) {
  const formatedTables = tableData.map((table) => {
    return (
      <div key={table.table_id} className="border-bottom border-dark">
        <h4>Table Name : {table.table_name}</h4>
        <span data-table-id-status={table.table_id} value={table.table_id}>
          Status : {table.reservation_id ? "occupied" : "free"}
        </span>
        <div>
          <FinishButton table={table} />
        </div>
      </div>
    );
  });

  return formatedTables;
}

export default TableList;
