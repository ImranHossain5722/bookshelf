import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SearchModal = () => {
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState('');

    const handleSearch = (search) => {
        console.log(search.length);
        if (search.length > 0) {
            axios.get(`https://book-shelf-webapp.herokuapp.com/search?sq=${search}`)
                .then(res => {
                    setSearchResults(res.data);
                    console.log(res.data);
                });

            setError('');
        }
        else {
            setError('Please type something*');
        }
    }

    // console.log(searchText);

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className='w-2/5'>
                {/* search field */}
                <div class="form-control duration-300">
                    <div class="input-group">
                        <input name='search' type="text" placeholder="Search that you desire..." onChange={e => setSearchText(e.target.value)} class="input input-bordered bg-white w-full" />
                        <button onClick={() => handleSearch(searchText)} class="btn btn-square bg-primary hover:bg-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                    {error && <p className='text-red-600 mt-1 ml-1'><small>{error}</small></p>}
                </div>
                {/* Result field */}
                {(!error && searchResults) &&
                    <div className='mt-8 h-60 overflow-scroll'>
                        {
                            searchResults?.map(results => <div key={results._id} className='flex items-center justify-center h-16 w-full bg-white rounded-lg mb-3'>
                                <img src={results.book_cover_photo_url} className='h-14 mr-5' alt="" />
                                <h3>{results.book_title}</h3>
                            </div>)
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default SearchModal;