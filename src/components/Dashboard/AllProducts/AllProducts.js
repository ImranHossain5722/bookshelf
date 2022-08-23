import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';
import { BsFillTrashFill, BsPencilSquare } from "react-icons/bs";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AllProducts = () => {
    const navigate = useNavigate();
    const { isLoading, error, data: books, refetch } = useQuery(['repoData'], () =>
        fetch(`https://book-shelf-webapp.herokuapp.com/all-books`).then(res =>
            res.json()
        )
    )

    const handleProductDelete = (id, title) => {
        axios.delete(`https://book-shelf-webapp.herokuapp.com/delete-book?id=${id}`)
            .then(data => {
                toast.success(`You are now viewing as ${title}`);
                refetch();
            })
    }

    const handleUpdateProduct = (id) => {
        // console.log(`/dashboard/updateproduct/${id}`)
        navigate(`/dashboard/updateproduct/${id}`);
    }
    return (
        <div>
            <div>
                <h2 className='text-center font-semibold uppercase text-secondary text-[40px]'>All Products </h2>
                <div className=" flex items-center justify-center pb-10">
                    <progress className="progress progress-primary bg-white h-2 w-10  "></progress>
                </div>
            </div>
            <div className='w-5/6 mx-auto'>
                <div className="overflow-x-auto">
                    <table className="table table-compact w-full">
                        <thead>
                            <tr>
                                <th className='border border-[#666666]'>Name</th>
                                <th className='border border-[#666666]'>Image</th>
                                <th className='border border-[#666666]'>Author</th>
                                <th className='border border-[#666666]'>Publisher</th>
                                <th className='border border-[#666666]'>Category</th>
                                <th className='border border-[#666666]'>Price</th>
                                <th className='border border-[#666666]'>Pages</th>
                                <th className='border border-[#666666]'>Edition</th>
                                <th className='border border-[#666666]'>Country</th>
                                <th className='border border-[#666666]'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books?.map(book => <tr key={book?._id}>
                                <th className='border border-[#666666]'>{book?.book_title}</th>
                                <td className='border border-[#666666]'><img src={book?.book_cover_photo_url} width={50} alt="" /></td>
                                <td className='border border-[#666666]'>{book?.book_author?.author_name}</td>
                                <td className='border border-[#666666]'>{book?.book_publisher?.publisher_name}</td>
                                <td className='border border-[#666666]'>{book?.book_category.map(cat => <span className='block'>
                                    {cat?.category_id?.category_title}
                                </span>)}</td>
                                <td className='border border-[#666666]'>{book?.book_price}</td>
                                <td className='border border-[#666666]'>{book?.book_pages}</td>
                                <td className='border border-[#666666]'>{book?.book_edition}</td>
                                <td className='border border-[#666666]'>{book?.book_country}</td>
                                <td className='border border-[#666666]'>
                                    <button onClick={() => handleUpdateProduct(book?._id)} className='btn btn-primary text-xl mr-1 text-white'><BsPencilSquare /></button>
                                    <button onClick={() => handleProductDelete(book?._id, book?.book_title)} className='btn btn-red text-xl mr-1 text-white'><BsFillTrashFill /></button>
                                </td>
                            </tr>)}

                        </tbody>

                    </table>
                </div>
            </div>

        </div>
    );
};

export default AllProducts;