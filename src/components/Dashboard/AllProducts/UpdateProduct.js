import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useForm } from "react-hook-form";
import Select from 'react-select'
import { toast } from 'react-toastify';
import Loading from '../../Loading/Loading';
import { QueryClient } from '@tanstack/react-query'

const UpdateProduct = () => {
    const { bookid } = useParams();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const queryClient = new QueryClient()
    queryClient.clear();
    const { isLoading, data: book } = useQuery(['getBookDatasss'], () => fetch(`https://book-shelf-webapp.herokuapp.com/get-book?id=${bookid}`).then(res =>
        res.json()
    ), { cacheTime: 1 })

    // get all Categories 
    const [allCategories, setAllCategories] = useState([]);
    useEffect(() => {
        const options = { method: 'GET' };
        fetch('https://book-shelf-webapp.herokuapp.com/all-categories', options)
            .then(response => response.json())
            .then(data => setAllCategories(data))
            .catch(err => console.error(err));

    }, [])
    // console.log('Categories :', allCategories)

    // get all catagory list in array for drop down list 
    let catOption = [];
    allCategories.forEach(cat => {
        let dropDown = { label: cat['category_title'], value: cat['_id'] };
        catOption.push(dropDown);
    });
    // console.log('Options', catOption);



    // get all authors 
    const [allAuthors, setAllAuthors] = useState([]);
    useEffect(() => {
        const options = { method: 'GET' };

        fetch('https://book-shelf-webapp.herokuapp.com/all-authors', options)
            .then(response => response.json())
            .then(data => setAllAuthors(data))
            .catch(err => console.error(err));

    }, [])
    // console.log('Authors :', allAuthors)
    // get all author list in array for drop down list 

    let authorOptions = [];

    allAuthors.forEach(cat => {
        let dropDown = { label: cat['author_name'], value: cat['_id'] };
        authorOptions.push(dropDown);
    });

    // console.log('authorOptions', authorOptions);
    // get all Publishers 

    const [allPublishers, setAllPublishers] = useState([]);
    useEffect(() => {
        const options = { method: 'GET' };

        fetch('https://book-shelf-webapp.herokuapp.com/all-publishers', options)
            .then(response => response.json())
            .then(data => setAllPublishers(data))
            .catch(err => console.error(err));

    }, [])
    // console.log('Publisher :', allPublishers)
    // get all Publisher list in array for drop down list 

    let publisherOptions = [];
    allPublishers.forEach(cat => {
        let dropDown = { label: cat['publisher_name'], value: cat['_id'] };
        publisherOptions.push(dropDown);
    });
    // console.log('publisherOptions', publisherOptions);





    const [imgData, setImgData] = useState(null);
    const onChangePicture = e => {
        if (e.target.files[0]) {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setImgData(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    }

    const [bookCat, setBookCat] = useState([]);
    // console.log(bookCat);
    const getChoosenCategory = (choice) => {
        setBookCat(Array.isArray(choice) ? choice.map(x => (
            { category_id: x.value }
        )) : []);
    }

    const [bookAut, setBookAut] = useState({});

    const getChoosenAuthor = (choice) => {
        const data = choice?.value;
        setBookAut(data);

    }
    const [bookPub, setBookPub] = useState({});

    const getChoosenPublisher = (choice) => {
        const data = choice?.value;
        setBookPub(data);

    }
    let selectedCats = [];
    let selectedCatData = [];
    if (book) {
        book[0]?.book_category?.map(cat => {
            let dropDown = { label: cat?.category_id['category_title'], value: cat?.category_id['_id'] };
            let catData = { category_id: cat?.category_id['_id'] }
            selectedCats.push(dropDown);
            selectedCatData.push(catData);
        });
    }

    const navigate = useNavigate();

    const onSubmit = data => {

        const imgbbKey = '5e72e46e329464d233a1bc1128fc1a76';
        const image = data?.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const updateData = (updateData) => {
            axios.patch(`https://book-shelf-webapp.herokuapp.com/update-book?bid=${bookid}`, updateData)
                .then(data => {
                    console.log(data);
                    toast.success('Book Information Updated Successfully!');
                    navigate('/dashboard/allproducts');
                })
        }
        if (image) {
            fetch(`https://api.imgbb.com/1/upload?key=${imgbbKey}`, {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(result => {
                    if (result.success) {
                        const imgbbUrl = result?.data?.url;
                        const productInfoData = {
                            book_title: data?.book_title,
                            book_description: data?.book_description,
                            book_edition: data?.book_edition,
                            book_publisher: bookPub.length > 0 ? bookPub : book[0]?.book_publisher?._id,
                            book_author: bookAut.length > 0 ? bookAut : book[0]?.book_author?._id,
                            book_price: data?.book_price,
                            book_pages: data?.book_pages,
                            book_qnt: data?.book_qnt,
                            discount: data?.discount ? data?.discount : 0,
                            book_category: bookCat.length > 0 ? bookCat : selectedCatData,
                            book_cover_photo_url: imgbbUrl,
                            book_language: data?.translator,
                            book_country: data?.country
                        };
                        updateData(productInfoData);
                    }
                })

        } else {
            const productInfoData = {
                book_title: data?.book_title,
                book_description: data?.book_description,
                book_edition: data?.book_edition,
                book_publisher: bookPub.length > 0 ? bookPub : book[0]?.book_publisher?._id,
                book_author: bookAut.length > 0 ? bookAut : book[0]?.book_author?._id,
                book_price: data?.book_price,
                book_pages: data?.book_pages,
                book_qnt: data?.book_qnt,
                discount: data?.discount ? data?.discount : 0,
                book_category: bookCat.length > 0 ? bookCat : selectedCatData,
                book_language: data?.translator,
                book_cover_photo_url: book[0]?.book_cover_photo_url,
                book_country: data?.country
            };
            updateData(productInfoData);
        }
    }

    return (
        <div className=''>
            <h2 className='text-center font-semibold uppercase text-secondary text-[40px]'> Update Product</h2>
            <div className=" flex items-center justify-center pb-10">
                <progress className="progress progress-primary bg-white h-2 w-10  "></progress>
            </div>
            {isLoading ?
                <Loading></Loading> :
                <div className='mt-1 md:w-5/6 mx-8 md:mx-auto bg-white p-10 rounded-xl shadow-md' >
                    <form className='' onSubmit={handleSubmit(onSubmit)}>

                        <div className='md:flex'>
                            <div className='md:w-[30%]'>
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text text-lg">Upload Image</span>
                                    </label>
                                    <input
                                        {...register("image", {
                                            required: {
                                                value: false,
                                                message: "image is Required"
                                            }
                                        })}
                                        type="file"
                                        onChange={onChangePicture}
                                        class="block w-full text-sm text-slate-500
                                        file:mr-4 file:py-2 file:px-4
                                        file:rounded-full file:outline-none
                                        file:text-sm file:font-semibold
                                        file:bg-primary file:text-white
                                        hover:file:bg-white hover:file:text-primary file:border-primary file:border-0
                                      "/>
                                    <label className="label">
                                        <span className="label-text-alt text-red-500">{errors.image?.type === 'required' && `${errors?.image?.message}`}</span>
                                    </label>
                                </div>
                                <div className="previewProfilePic">
                                    <img className="playerProfilePic_home_tile max-w-[100%] mx-auto max-h-[auto] rounded-3xl" src={imgData ? imgData : book[0]?.book_cover_photo_url} alt='' />
                                </div>
                            </div>
                            <div className='md:w-[70%] mt-12 md:mt-0  md:ml-12'>
                                <div className='md:flex gap-7'>
                                    <div className='w-full'>
                                        <label className="label-text text-lg">Product Name</label>
                                        <input type="text" {...register("book_title",
                                            {
                                                required: 'required*',
                                            }
                                        )}
                                            defaultValue={book && book[0]?.book_title}
                                            className="input-bordered rounded-[4px] border-[1px] border-[#DBDBDB] p-[7px] placeholder:text-[14px] bg-white w-full mt-2" />
                                        {errors?.book_title && <p><small className='pl-1 text-red-600'>{errors?.book_title?.message}</small></p>}
                                    </div>
                                    <div className='w-full mt-4 md:mt-0'>
                                        <label className="label-text text-lg">Select Categories</label>

                                        <Select defaultValue={selectedCats} isMulti onChange={(choice) => getChoosenCategory(choice)} name='categoryName' className="mt-2 rounded-xl" options={catOption} />
                                    </div>

                                </div>
                                <div className='md:flex gap-7 mt-4'>
                                    <div className='w-full'>
                                        <label className="label-text text-lg">Author Name</label>

                                        <Select
                                            defaultValue={{ label: book[0]?.book_author?.author_name, value: book[0]?.book_author?._id, }}
                                            onChange={(choice) => getChoosenAuthor(choice)} className="mt-2 rounded-xl" options={authorOptions} />


                                    </div>
                                    <div className='w-full mt-4 md:mt-0'>
                                        <label className="label-text text-lg">Publisher Name</label>

                                        <Select
                                            defaultValue={{ label: book[0]?.book_publisher?.publisher_name, value: book[0]?.book_publisher?._id, }}
                                            onChange={(choice) => getChoosenPublisher(choice)} className="mt-2 rounded-xl" options={publisherOptions} />

                                    </div>
                                </div >
                                <div className='md:flex gap-7 mt-4' >
                                    <div className='w-full'>
                                        <label className="label-text text-lg">Price</label>
                                        <input type="number" {...register("book_price", {
                                            required: 'required*',
                                        })}
                                            defaultValue={book && book[0]?.book_price}
                                            min={1}
                                            className="input-bordered rounded-[4px] border-[1px] border-[#DBDBDB] p-[7px] placeholder:text-[14px] bg-white w-full mt-2" />
                                        {errors?.book_price && <p><small className='pl-1 text-red-600'>{errors?.book_price?.message}</small></p>}
                                    </div>
                                    <div className='w-full'>
                                        <label className="label-text text-lg">Pages</label>
                                        <input type="number" {...register("book_pages", {
                                            required: 'required*',
                                        })}
                                            defaultValue={book && book[0]?.book_pages}
                                            min={1} className="input-bordered rounded-[4px] border-[1px] border-[#DBDBDB] p-[7px] placeholder:text-[14px] bg-white w-full mt-2" />
                                        {errors?.book_pages && <p><small className='pl-1 text-red-600'>{errors?.book_pages?.message}</small></p>}
                                    </div>
                                </div >
                                <div className='md:flex gap-7 mt-4' >
                                    <div className='w-full'>
                                        <label className="label-text text-lg">Quantity</label>
                                        <input type="number" {...register("book_qnt", {
                                            required: 'required*',
                                        })}
                                            defaultValue={book && book[0]?.book_qnt}
                                            min={1}
                                            className="input-bordered rounded-[4px] border-[1px] border-[#DBDBDB] p-[7px] placeholder:text-[14px] bg-white w-full mt-2" />
                                        {errors?.book_qnt && <p><small className='pl-1 text-red-600'>{errors?.book_qnt?.message}</small></p>}
                                    </div>
                                    <div className='w-full'>
                                        <label className="label-text text-lg">Edition</label>
                                        <input type="text" {...register("book_edition", {
                                            required: 'required*',
                                        })}
                                            defaultValue={book && book[0]?.book_edition}

                                            min={1} className="input-bordered rounded-[4px] border-[1px] border-[#DBDBDB] p-[7px] placeholder:text-[14px] bg-white w-full mt-2" />
                                        {errors?.book_edition && <p><small className='pl-1 text-red-600'>{errors?.book_edition?.message}</small></p>}
                                    </div>
                                </div >
                                < div className='md:flex gap-7 mt-4' >
                                    <div className='w-full'>
                                        <label className="label-text text-lg">Language</label>
                                        <input type="text" {...register("translator", {
                                            required: 'required*',
                                        })}
                                            defaultValue={book && book[0]?.book_language}
                                            className="input-bordered rounded-[4px] border-[1px] border-[#DBDBDB] p-[7px] placeholder:text-[14px] bg-white w-full mt-2" />
                                        {errors?.translator && <p><small className='pl-1 text-red-600'>{errors?.translator?.message}</small></p>}
                                    </div>
                                    <div className='w-full mt-4  md:mt-0'>
                                        <label className="label-text text-lg">Country</label>
                                        <input type="text" {...register("country", {
                                            required: 'required*',
                                        })}
                                            defaultValue={book && book[0]?.book_country}
                                            className="input-bordered rounded-[4px] border-[1px] border-[#DBDBDB] p-[7px] placeholder:text-[14px] bg-white w-full mt-2" />
                                        {errors?.book_pages && <p><small className='pl-1 text-red-600'>{errors?.country?.message}</small></p>}
                                    </div>
                                </div >
                                {/* row-5 */}
                                < div className='mt-4' >
                                    <label className="label-text text-lg">Discount %</label>
                                    <input type="number" {...register("discount", {
                                        required: 'required*',
                                    })}
                                        defaultValue={book && book[0]?.discount}
                                        max={100}
                                        min={0}
                                        className="input input-bordered bg-white w-full mt-2" />
                                    {errors?.discount && <p><small className='pl-1 text-red-600'>{errors?.discount?.message}</small></p>}
                                </div >
                                < div className='mt-4' >
                                    <label className="label-text text-lg">Short Details</label>
                                    <textarea type="text" {...register("book_description", {
                                        required: 'required*',
                                    })}
                                        defaultValue={book && book[0]?.book_description}
                                        className="textarea textarea-bordered  bg-white w-full mt-2" />
                                    {errors?.book_description && <p><small className='pl-1 text-red-600'>{errors?.book_description?.message}</small></p>}
                                </div >
                            </div>

                        </div>
                        <input type="submit" className='mt-4 btn btn-primary w-1/2 text-white ml-[350px]' value='Update Book' />


                    </form >
                </div >}

        </div >
    );
};

export default UpdateProduct;