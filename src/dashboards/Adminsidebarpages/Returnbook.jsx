import React, { useState } from 'react';
import Adminsidebar from '../../components/Adminsidebar';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const Returnbook = () => {
  const [bookId, setBookId] = useState('');
  const [memberId, setMemberId] = useState('');
  const [message,setMessage]=useState('');

  const location = useLocation();
  const { data } = location.state || {};
  const adminId=data.adminId;
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("bookId:",bookId);
    console.log("memberId:",memberId);
    try {
        setMessage('');
      const url = `http://localhost:8080/admin/returnBook`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bookId,memberId,adminId}),
      });
      const d = await response.json();
      console.log("resposne:",d);
      setMessage(d.data.message);
      if(d.data === null) {
        toast.error(d.error.message);
      } else {
        toast.success('Book Returned successfully');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error returning book');
    } finally {
        setBookId('');
        setMemberId('');
    }
  };

  return (
    <div className='flex flex-row text-black'>
      <Adminsidebar data={data} />
      <div className='flex flex-col items-center justify-center w-full p-8 bg-gray-100'>
        <form onSubmit={handleSubmit} className=' p-6 rounded-lg shadow-md w-full max-w-md'>
          <h2 className='text-2xl font-bold mb-4 text-richblack-500'>Return Book</h2>

          <div className='mb-4 text-white'>
            <label className='block text-gray-700'>Book ID:</label>
            <input
              type='text'
              value={bookId}
              onChange={(e) => setBookId(e.target.value)}
              className='mt-1 p-2 w-full border rounded-md text-black'
              required
            />
          </div>
          <div className='mb-4 text-white'>
            <label className='block text-gray-700'>Member ID:</label>
            <input
              type='text'
              value={memberId}
              onChange={(e) => setMemberId(e.target.value)}
              className='mt-1 p-2 w-full border rounded-md text-black'
              required
            />
          </div>
          <div>
            <p className='text-white translate-x-[32%] mb-4'>{message}</p>
          </div>
          <button type='submit' className='w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Returnbook
