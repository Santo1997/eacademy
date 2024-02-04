import React from "react";
import StudentCard from "../components/student-card";
import StudentDetails from "../components/student-details";
import SearchInput from "../components/search-inputs";

const Student = () => {
  return (
    <div>
      <h1 className="place-items-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 text-center dark:text-white">BILL Student</h1>
      <div className="mb-3 text-gray-500 dark:text-gray-400">
        <SearchInput />
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="mb-3 text-gray-500 dark:text-gray-400">
          <StudentCard />
        </div>
        <div className="col-span-2 mb-3 text-gray-500 dark:text-gray-400">
          <StudentDetails />
        </div>
      </div>
    </div>
  );
};

export default Student;
