import React from "react";

const StudentDetails = () => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Student Details
        </h5>
      </div>

      <div>
        <label
          htmlFor="Student-no"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Student No
        </label>
        <input
          type="text"
          id="Student-no"
          className="mb-2 block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label
          htmlFor="date-no"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Date
        </label>
        <input
          type="text"
          id="date-no"
          className="mb-2 block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor="supply"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Proforma Student for Supply of Garments accessories against the Buyer
          VOICE
        </label>

        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                SL
              </th>
              <th className="px-6 py-4">DESCRIPTION</th>
              <th className="px-6 py-4">ORDER NO</th>
              <th className="px-6 py-4">QTY</th>
              <th className="px-6 py-4">UNIT PRICE US$</th>
              <th className="px-6 py-4">Total</th>
              <th className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                SL
              </th>
              <td className="px-6 py-4">DESCRIPTION</td>
              <td className="px-6 py-4">ORDER NO</td>
              <td className="px-6 py-4">QTY</td>
              <td className="px-6 py-4">UNIT PRICE US$</td>
              <td className="px-6 py-4">Total</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="m-3 text-gray-500 dark:text-gray-400 text-right">
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Generate PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
