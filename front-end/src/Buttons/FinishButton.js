import React from "react";
import { clearTable } from "../utils/api";
import { useHistory } from "react-router";

function FinishButton({ table }) {
  const history = useHistory();

  async function finishHandle(tableId) {
    const confirm = window.confirm(
      "Is this table ready to seat new guests? This cannot be undone."
    );
    if (confirm) {
      await clearTable(tableId);
      history.go(0);
    }
  }
  if (table.reservation_id) {
    return (
      <button
        data-table-id-finish={table.table_id}
        type="button"
        onClick={() => finishHandle(table.table_id)}
        className="btn btn-success"
      >
        Finish
      </button>
    );
  } else {
    return "";
  }
}

export default FinishButton;
