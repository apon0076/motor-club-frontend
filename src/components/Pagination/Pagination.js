import React from "react";

function Pagination({ totalPage, pageNumber, pageLinks, handlePagination }) {
  return (
    <>
      {totalPage > 1 && (
        <div className="text-center">
          <ul className="pagination mb-10">
            {pageLinks?.map((pageItem, index) => {
              const page =
                pageItem.label === "&laquo; Previous"
                  ? Math.max(pageNumber - 1, 0)
                  : pageItem.label === "Next &raquo;"
                  ? Math.min(pageNumber + 1, totalPage)
                  : pageItem.label === "..."
                  ? pageNumber
                  : Number(pageItem.label);
              return (
                <li key={index}>
                  <p
                    className={pageItem.active ? "disable" : null}
                    page_number={page}
                    onClick={(e) => handlePagination(e)}
                  >
                    {pageItem.label === "&laquo; Previous"
                      ? "Previous"
                      : pageItem.label === "Next &raquo;"
                      ? "Next"
                      : pageItem.label}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}

export default Pagination;
