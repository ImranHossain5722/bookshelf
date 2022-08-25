import { useQuery } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router-dom';
import { BsPencilSquare } from "react-icons/bs";
import Loading from '../../Loading/Loading';
import useGetUserData from '../../../hooks/useGetUserData';
import AddProduct from '../AddProduct/AddProduct';

const MyProducts = () => {
    const { getUser } = useGetUserData();

    const navigate = useNavigate();
    const currentUserId = getUser[0]?._id;

    const { data: books, refetch, isLoading } = useQuery(['salesDatasss'], () =>
        fetch(`https://book-shelf-webapp.herokuapp.com/get-sells-data?id=${currentUserId}`)
            // fetch(`https://book-shelf-webapp.herokuapp.com/get-sells-data?id=62e969f82b99d5b6e7d806c2`)
            .then(res =>
                res.json()
            )
    )

    refetch();
    const handleUpdateProduct = (id) => {
        navigate(`/dashboard/updateproduct/${id}`);
    }

    return (
        <div className='px-2'>
            <h2 className='text-center font-semibold uppercase text-secondary text-[40px]'>My Products</h2>
            <div className=" flex items-center justify-center pb-10">
                <progress className="progress progress-primary bg-white h-2 w-10  "></progress>
            </div>
            {isLoading ?
                <Loading></Loading> :
                <div className=' mx-auto'>
                    <div className="overflow-x-auto">
                        <table className="table table-compact w-full">
                            <thead>
                                <tr>
                                    <th className='border border-[#666666]'>Sl</th>
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
                                {books[0]?.books_list?.map((book, index) => <tr key={book?._id}>
                                    <th className='border border-[#666666]'>{index + 1}</th>
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

                                    </td>
                                </tr>)}

                            </tbody>

                        </table>
                        {books[0]?.books_list.length === 0 &&
                            <p className='text-error text-2xl text-center py-8'>
                                You dont have any book listed on our site
                                <Link className='btn-primary text-xl text-white p-3 ml-4 rounded-xl' to='/dashboard/addproduct' element={<AddProduct></AddProduct>}> Add Product</Link>
                            </p>
                        }
                    </div>
                </div>}
        </div>
    );
};

export default MyProducts;