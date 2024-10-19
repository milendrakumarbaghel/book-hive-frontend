import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';
const Searchbook = () => {
  const [bookName, setBookName] = useState('');
  const [book, setBook] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:8080/member/getBookByTitle/${bookName}`);
      if (!response.ok) {
        throw new Error('Book not found');
      }
      const data = await response.json();
      setBook(data);
      setError('');
    } catch (err) {
      setBook(null);
      setError(err.message);
    }
  };

  return (
    
    <div> <Navbar/>
      <div className='text-white flex flex-col justify-center items-center p-4'>
      
      <input
        type='text'
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
        placeholder='Enter book name'
        className='text-black p-2 rounded border border-gray-300 mb-4'
      />
      <button 
        onClick={handleSearch} 
        className='bg-blue-500 text-white p-2 rounded hover:bg-blue-700'
      >
        Search
      </button>

      {book && (
        <div className='mt-4 p-4 border border-gray-300 rounded'>
          <h2 className='text-xl font-bold'>{book.title}</h2>
          <p className='text-gray-400'>{book.language}</p>
        </div>
      )}
      {error && <p className='text-red-500 mt-4'>{error}</p>}
    </div>
    </div>
  );
};

export default Searchbook;
