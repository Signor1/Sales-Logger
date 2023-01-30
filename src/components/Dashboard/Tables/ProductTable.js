import {
  CaretDoubleLeft,
  CaretDoubleRight,
  CaretLeft,
  CaretRight,
} from "phosphor-react";
import React, { useMemo } from "react";
import { useTable, usePagination, useGlobalFilter } from "react-table";
import PRODUCT_DATA from "../../ProductData/Products.json";
import { COLUMNS } from "../Columns/Columns";
import "./ProductTable.css";
import { GlobalFilter } from "../Columns/GlobalFilter";

export const ProductTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => PRODUCT_DATA, []);

  const {
    getTableBodyProps,
    getTableProps,
    prepareRow,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    headerGroups,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    usePagination
  );

  const { pageIndex, pageSize, globalFilter } = state;

  return (
    <div className="lg:px-36 px-3">
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <div className="w-full flex items-center gap-4 flex-wrap py-6 pl-2">
        <span className="font-sans font-semibold text-base text-gray-900">
          Page{" "}
          <strong className="text-rose-700">
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span className="text-base text-gray-900 font-semibold flex items-center gap-2 capitalize">
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
            className="outline-none border border-gray-900 w-12 h-7 rounded-md pl-2"
          />
        </span>
        <select
          className="outline-none border border-gray-900 w-auto h-7 rounded-md px-2"
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 25, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Showing {pageSize}
            </option>
          ))}
        </select>
      </div>
      <div id="ProductTable">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
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
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="w-full flex items-center gap-3 flex-wrap pt-6 pb-16 pl-2">
        <button
          className="px-3 py-1 bg-gray-900 rounded-md text-gray-200 outline-none border-none disabled:opacity-80"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          <CaretDoubleLeft size={20} color="currentColor" />
        </button>
        <button
          className="px-3 py-1 bg-gray-900 rounded-md text-gray-200 outline-none border-none disabled:opacity-80 flex items-center"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          <CaretLeft size={20} color="currentColor" />
          Prev
        </button>
        <button
          className="px-3 py-1 bg-gray-900 rounded-md text-gray-200 outline-none border-none disabled:opacity-80 flex items-center"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          Next
          <CaretRight size={20} color="currentColor" />
        </button>
        <button
          className="px-3 py-1 bg-gray-900 rounded-md text-gray-200 outline-none border-none disabled:opacity-80"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          <CaretDoubleRight size={20} color="currentColor" />
        </button>
      </div>
    </div>
  );
};
