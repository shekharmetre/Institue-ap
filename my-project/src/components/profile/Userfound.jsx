import React, { useEffect, useState } from "react";
import Querypopup from '../../logics/Querypopup';

const Userfound = ({ userPresent }) => {
  const [question, setQuestion] = useState(false);
  const [updates, setUpdates] = useState(false);
  const [popup, setPopup] = useState(false);
  const [inputData, setInputData] = useState('');
  
  // Check if userPresent is not null and has at least one element
  const user = userPresent && userPresent.length > 0 ? userPresent[0] : null;
  
  useEffect(() => {
    if (question) {
      setUpdates(false);
    }
    if (updates) {
      setQuestion(false);
    }
  }, [question, updates]);

  return (
    <div className="card min-w-sm border border-gray-100 bg-purple-100 transition-shadow shadow-xl hover:shadow-xl  overflow-hidden">
      <div className="w-full card__media">
        <img
          src="https://image.freepik.com/free-vector/abstract-binary-code-techno-background_1048-12836.jpg"
          className="h-48 w-96"
        />
      </div>
      <div className="card__media--aside" />
      <div className="flex items-center p-4">
        <div className="relative flex flex-col items-center w-full">
          <div className="h-24 w-24 md rounded-full relative avatar flex items-end justify-end min-w-max absolute -top-16 flex bg-purple-200 text-purple-100 row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
            <img
              className="h-24 w-24 md rounded-full relative"
              src={user?.pic || ""}
              alt="User Pic"
            />
            <div className="absolute" />
          </div>
          <div className="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
            <span className="text-md whitespace-nowrap text-gray-800 font-semibold">
              {user?.name || "No Name"}
            </span>
            <span className="text-md whitespace-nowrap text-gray-600">
              {user?.email || "No Email"}
            </span>
            <p className="text-sm text-gray-500" suppressContentEditableWarning>
              I can't start my day without a coffee cup
            </p>
            <div className="py-2 flex space-x-2">
              <button className="flex justify-center max-h-max whitespace-nowrap focus:outline-none focus:ring focus:border-blue-300 rounded max-w-max border bg-transparent border-purple-700 text-purple-700 hover:border-purple-800 px-4 py-1 items-center hover:shadow-lg">
                <span className="mr-2" />
                Courses
                <span className="ml-2" />
              </button>
              <button className="justify-center relative max-h-max whitespace-nowrap focus:outline-none focus:ring focus:border-blue-300 rounded max-w-max text-gray-100 bg-green-500 hover:bg-green-600 px-4 py-1 flex items-center hover:shadow-lg" onClick={() => setPopup((prev) => !prev)}>
                <span className="mr-2">
                  <svg
                    height={20}
                    width={20}
                    viewBox="0 0 32 32"
                    className="fill-current text-red-100"
                  >
                    <path d="M22.5,4c-2,0-3.9,0.8-5.3,2.2L16,7.4l-1.1-1.1C12,3.3,7.2,3.3,4.3,6.2c0,0-0.1,0.1-0.1,0.1c-3,3-3,7.8,0,10.8L16,29l11.8-11.9c3-3,3-7.8,0-10.8C26.4,4.8,24.5,4,22.5,4z" />
                  </svg>
                </span>
                Query/Que <span className="ml-2" />
              </button>
              {popup && (
                <div className='flex absolute top-20 backdrop-blur-md'>
                  <input type="text" placeholder='enter question/query' className='bg-transparent backdrop-blur-md px-1 text-[18px]' value={inputData} onChange={(e) => setInputData(e.target.value)} />
                  <p className='btn' onClick={() => setPopup((prev) => !prev)}>Add</p>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex text-sm gap-40 underline">
                <p className="" onClick={() => setQuestion((prev) => !prev)}>
                  Questions
                </p>
                <p onClick={() => setUpdates((prev) => !prev)}>Updates</p>
              </div>
              {question && (
                <div className="flex flex-col">
                  <p>No Question available</p>
                </div>
              )}

              {updates && (
                <div className="flex flex-col">
                  <p className="text-sm">No Updates Froom Institute</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userfound;
