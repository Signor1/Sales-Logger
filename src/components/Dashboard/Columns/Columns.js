export const COLUMNS = [
  {
    Header: "Product Name",
    Footer: "Product Name",
    accessor: "name",
  },
  {
    Header: "Product Price $",
    Footer: "Product Price $",
    accessor: "price",
  },
  {
    Header: "Product Image",
    Footer: "Product Image",
    accessor: "picture",
    Cell: (tableProps) => (
      <img
        src={tableProps.row.original.picture}
        className="h-10 w-10"
        alt="Product"
      />
    ),
  },
  {
    Header: "Stock",
    Footer: "Stock",
    accessor: "stock",
  },
];
