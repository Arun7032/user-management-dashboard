import "./Pagination.css";

function Pagination({
  currentPage,
  setCurrentPage,
  rowsPerPage,
  setRowsPerPage,
  totalUsers,
}) {
  const totalPages = Math.max(
    1,
    Math.ceil(totalUsers / rowsPerPage)
  );

  return (
    <div className="pagination">

      <div className="pagination-left">
        <span>Rows per page</span>

        <select
          value={rowsPerPage}
          onChange={(e) => {
            setRowsPerPage(Number(e.target.value));
            setCurrentPage(1);
          }}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>

      <div className="pagination-right">
        <button
          disabled={currentPage === 1}
          onClick={() =>
            setCurrentPage(currentPage - 1)
          }
        >
          Previous
        </button>

        <span>
          {currentPage} / {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() =>
            setCurrentPage(currentPage + 1)
          }
        >
          Next
        </button>
      </div>

    </div>
  );
}

export default Pagination;