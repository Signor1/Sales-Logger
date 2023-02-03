import React from "react";
import { Cookies } from "react-cookie";

const HistoryTable = () => {
  const cookie = new Cookies();
  const getLogger = cookie.get("SalesLogin");
  const loggerEmail = getLogger.email;

  const totalSales = cookie.get(loggerEmail);

  const addition = () => {
    const salesHistory = totalSales.sales;
    let numArray = [];
    const nums = [...numArray];
    if (salesHistory) {
      salesHistory.map((sale) => nums.push(sale.totalAmount));
    }
    const sum = nums.reduce((x, y) => x + y);
    const numFixed = sum.toFixed(2).toLocaleString();
    const localeString = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(numFixed);
    return localeString;
  };

  return (
    <section className="w-full h-auto flex flex-col lg:px-20 md:px-8 px-4">
      {!totalSales ? (
        <div className="flex flex-col gap-3 items-center md:mt-12 mt-6">
          <h1 className="text-rose-700 capitalize text-center md:text-4xl text-3xl font-semibold">
            You don't have any history of sales
          </h1>
          <p className="text-base text-gray-900 font-medium">
            Click on Dashboard to add sales then save!
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-3 w-full h-auto lg:mt-12 md:mt-6 mt-6">
          <h1 className="text-gray-900 md:text-5xl text-3xl font-semibold">
            Your Sales History
          </h1>

          <h2 className="text-rose-700 mt-3 md:text-3xl text-2xl font-light">
            {totalSales ? totalSales.date : null}
          </h2>
          <main className="w-full h-auto overflow-x-auto">
            <table className="w-full text-sm text-center text-gray-900 border border-gray-900">
              <thead className="text-md text-gray-200 uppercase bg-gray-900">
                <tr>
                  <th scope="col" className="py-3 px-6 whitespace-nowrap">
                    S/N
                  </th>
                  <th
                    scope="col"
                    className="py-3 text-center whitespace-nowrap px-6"
                  >
                    Product Name
                  </th>
                  <th
                    scope="col"
                    className="py-3 text-center whitespace-nowrap px-6"
                  >
                    Product Price $
                  </th>
                  <th
                    scope="col"
                    className="py-3 text-center whitespace-nowrap px-6"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    className="py-3 text-center whitespace-nowrap px-6"
                  >
                    Total Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {totalSales.sales.map((sale) => (
                  <tr
                    className="bg-gray-200 border-b border-gray-900 transition-all duration-200 hover:bg-gray-300"
                    key={sale.id}
                  >
                    <th
                      scope="row"
                      className="py-3 px-6 font-medium text-kodexblue whitespace-nowrap border-r border-gray-900"
                    >
                      {sale.id}
                    </th>
                    <td className="py-3 text-center whitespace-nowrap px-6 border-r border-gray-900">
                      {sale.selectProduct}
                    </td>
                    <td className="py-3 text-center whitespace-nowrap px-6 border-r border-gray-900">
                      {sale.productPrice}
                    </td>
                    <td className="py-3 text-center whitespace-nowrap px-6 border-r border-gray-900">
                      {sale.quantity}
                    </td>
                    <td className="py-3 text-center whitespace-nowrap px-6">
                      {sale.totalAmount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </main>

          <div className="md:mt-4 mt-2">
            <h1 className="text-gray-900 md:text-2xl text-xl font-medium font-sans flex items-center gap-2">
              Grand Total Amount:{" "}
              <span className="text-rose-700 font-bold">{addition()}</span>
            </h1>
          </div>
        </div>
      )}
    </section>
  );
};

export default HistoryTable;
