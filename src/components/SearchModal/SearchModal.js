import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaRegTimesCircle } from "react-icons/fa";
import Loading from '../Loading/Loading';

const SearchModal = ({ showModal, setShowModal }) => {
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    if (loading) {
        return <Loading />;
    };

    const handleSearch = (search) => {
        setLoading(true);
        console.log(search.length);
        if (search.length > 0) {
            axios.get(`https://book-shelf-webapp.herokuapp.com/search?sq=${search}`)
                .then(res => {
                    console.log(res?.data.length);
                    if (res?.data.length > 0) {
                        setSearchResults(res.data);
                    }
                    else {
                        setError('Result not found')
                    }
                    console.log(searchResults.length);
                });

            setError('');
        }
        else {
            setError('Please type something*');
        }
        setLoading(false);
    };

    // get search modal 
    const searchModal = document.getElementById('search-modal');

    setShowModal(searchModal);

    // close search modal 
    const closeSearchModal = () => {
        searchModal.classList.remove('left-0');
        searchModal.classList.add('left-full');
    }

    return (
        <div id='search-modal' className='min-h-screen w-full flex justify-center items-center absolute left-full z-50 bg-[#00124ec0] duration-500'>
            <button onClick={() => closeSearchModal()} className='absolute bottom-16'>
                <FaRegTimesCircle className='text-4xl text-white hover:text-red-600 duration-300' />
            </button>
            <div className='w-[90%] lg:w-2/5 '>
                {/* search field */}
                <div class="form-control duration-300">
                    <div class="input-group">
                        <input name='search' type="text" placeholder="Search that you desire..." onChange={e => setSearchText(e.target.value)} class="input input-bordered bg-white w-full" />
                        <button onClick={() => handleSearch(searchText)} class="btn btn-square bg-primary hover:bg-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                    {error && <p className='text-white mt-1 ml-1'><small>{error}</small></p>}
                </div>
                {/* Result field */}
                {(!error && searchResults) &&
                    <div className='mt-8 max-h-60 overflow-y-scroll'>
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