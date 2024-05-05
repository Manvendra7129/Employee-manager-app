import React from "react";
import style from "./ProfessionalData.module.css";
import { useTable, useSortBy, usePagination } from "react-table";
import { data } from "./../../assets/data.json";
const columns = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Phone",
    accessor: "phone",
  },
  {
    Header: "Adhar",
    accessor: "adhar",
  },
  {
    Header: "Bank account",
    accessor: "BankAcount",
  },
  {
    Header: "Pancard",
    accessor: "pan",
  },
  {
    Header: "Salary",
    accessor: "salary",
  },
];
const ProfessionalData = () => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    state: { pageIndex },
    pageCount,
    gotoPage,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    usePagination
  );
  return (
    <div className={style.Table_container}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((hg) => (
            <tr {...hg.getHeaderGroupProps()}>
              {hg.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {column.isSorted && (
                    <span>{column.isSortedDesc ? " 🔽" : " 🔼"}</span>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);

            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={style.btn_container}>
        <button disabled={pageIndex === 0} onClick={() => gotoPage(0)}>
          First
        </button>

        <button disabled={!canPreviousPage} onClick={previousPage}>
          Prev
        </button>

        <span>
          {pageIndex + 1} of {pageCount}
        </span>
        <button disabled={!canNextPage} onClick={nextPage}>
          Next
        </button>
        <button
          disabled={pageIndex >= pageCount - 1}
          onClick={() => gotoPage(pageCount - 1)}
        >
          Last
        </button>
      </div>
    </div>
  );
};

export default ProfessionalData;
