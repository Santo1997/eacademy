import React from 'react';
import Search from '../component/Search';
import StudentBar from '../component/StudentBar';
import StudentDetails from '../component/StudentDetails';

const Body = () => {
    return (
      <>
        <div className="px-14">
          <h1 className="text-center text-4xl font-bold	py-4">Bill Student</h1>
          <Search />
          <div className="mt-5 grid grid-cols-3 gap-1">
            <StudentBar />
            <StudentDetails />
          </div>
        </div>
      </>
    );
};

export default Body;