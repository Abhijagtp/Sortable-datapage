import React, { useState } from 'react';
import arrowup from "../assets/arrowup.svg";
import { data } from '../../tickets';
import { assign } from '../../users';

// Created a lookup object for assignees from users.js
const assigneeLookup = assign.reduce((acc, assignee) => {
  acc[assignee.id] = assignee.name;
  return acc;
}, {});

function Hero({ searchs }) {
  const [currentPage, setCurrentPage] = useState(1);
  // to display only 5
  const rowsPerPage = 6;              

  // Filtered and paginated data
  const filteredData = data.filter(item =>
    searchs === "" ? true : item.customer.name.includes(searchs)
  );
  const pageCount = Math.ceil(filteredData.length / rowsPerPage);
  const displayedData = filteredData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  const handleNextPage = () => {
    if (currentPage < pageCount) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='w-full flex flex-col items-center py-2 '>
      <table className='border border-gray-300 w-full max-w-6xl '>
        <thead className='bg-gray-100'>
          <tr className='text-left'>
            <th className='px-4 py-2 border-b border-gray-300'>
              <input type="checkbox" />
            </th>
            <th className='px-4 py-2 border-b border-gray-300 flex items-center'>
              Ticket ID
              <img src={arrowup} alt="Arrow Up" className='ml-2 w-4 h-4' />
            </th>
            <th className='px-4 py-2 border-b border-gray-300'>Date Opened</th>
            <th className='px-4 py-2 border-b border-gray-300'>Subject</th>
            <th className='px-4 py-2 border-b border-gray-300'>Priority</th>
            <th className='px-4 py-2 border-b border-gray-300'>Assignee</th>
            <th className='px-4 py-2 border-b border-gray-300'>Customer</th>
            <th className='px-4 py-2 border-b border-gray-300'>Status</th>
          </tr>
        </thead>
        <tbody>
          {displayedData.map((item, index) => {
            // Determine priority color
            let priorityColor;
            if (item.priority === 'high') {
              priorityColor = 'text-red-500';
            } else if (item.priority === 'medium') {
              priorityColor = 'text-yellow-500';
            } else {
              priorityColor = 'text-green-500';
            }

            // Get the assignee name
            const assigneeName = assigneeLookup[item.assignee] || 'Unknown';

            return (
              <tr key={index}>
                <td className='px-4 py-2 border-b border-gray-300'>
                  <input type="checkbox" />
                </td>
                <td className='px-4 py-2 border-b border-gray-300'>{item.ticketID}</td>
                <td className='px-4 py-2 border-b border-gray-300'>{item.dateOpened}</td>
                <td className='px-4 py-2 border-b border-gray-300'>{item.subject}</td>
                <td className={`px-4 py-2 border-b border-gray-300 ${priorityColor}`}>{item.priority}</td>
                <td className='px-4 py-2 border-b border-gray-300'>{assigneeName}</td>
                <td className='px-4 py-2 border-b border-gray-300'>
                  {item.customer.name}
                  <h1>{item.customer.email}</h1>
                </td>
                <td className='px-4 py-2 border-b border-gray-300'>{item.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex justify-between items-center w-full max-w-6xl mt-4">
        <button
          onClick={handlePrevPage}
          className={`px-4 py-2 border rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="px-4 py-2">
          Page {currentPage} of {pageCount}
        </span>
        <button
          onClick={handleNextPage}
          className={`px-4 py-2 border rounded ${currentPage === pageCount ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={currentPage === pageCount}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Hero;
