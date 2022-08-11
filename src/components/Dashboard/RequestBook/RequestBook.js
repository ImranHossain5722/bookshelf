import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import useGetUserData from '../../../hooks/useGetUserData';

const RequestBook = () => {
    const { getUser } = useGetUserData();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    // console.log(getUser, userRole);



    // console.log(getUser[0]);

    const [picture, setPicture] = useState(null);
    const [imgData, setImgData] = useState(null);
    const onChangePicture = e => {
        if (e.target.files[0]) {
            setPicture(e.target.files[0]);
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setImgData(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    }


    const onSubmit = data => {


        const imgbbKey = '5e72e46e329464d233a1bc1128fc1a76';
        const image = data?.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const postBookRequest = (requestBookData) => {
            console.log('before post:', requestBookData);
            axios.post('https://book-shelf-webapp.herokuapp.com/request-book', requestBookData).then(data => {
                toast.success('Book Request submitted successfully');
                console.log('Post data:', data)
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
                        const requestBookData = {
                            user_id: getUser[0]?._id,
                            book_title: data?.book_title,
                            book_edition: data?.book_edition,
                            book_publisher: data?.publisher,
                            book_author: data?.author,
                            book_qnt: data?.book_qnt,
                            category: data?.book_category,
                            book_cover_photo_url: imgbbUrl,
                            book_language: data?.translator,
                            book_country: data?.country
                        }

                        postBookRequest(requestBookData);
                    }
                })
        } else {
            const requestBookData = {
                user_id: getUser[0]?._id,
                book_title: data?.book_title,
                book_edition: data?.book_edition,
                book_publisher: data?.publisher,
                book_author: data?.author,
                book_qnt: data?.book_qnt,
                category: data?.book_category,
                book_language: data?.translator,
                book_country: data?.country
            }
            postBookRequest(requestBookData);
        }
        reset();
    };
    return (
        <div className=''>
            <h2 className='text-center font-semibold uppercase text-secondary text-[40px]'>Request for Book</h2>
            <div className=" flex items-center justify-center pb-10">
                <progress className="progress progress-primary bg-white h-2 w-10  "></progress>
            </div>

            <div className='mt-1 md:w-5/6 mx-8 md:mx-auto bg-white p-10 rounded-xl shadow-md' >
                <form className='' onSubmit={handleSubmit(onSubmit)}>

                    <div className='md:flex'>
                        {/* form container  */}
                        <div className='md:w-[30%]'>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text text-lg">Book Cover (Optional)</span>
                                </label>
                                <input
                                    {...register("image", {
                                        required: {
                                            value: true,
                                            message: "image is Required"
                                        }
                                    })}
                                    type="file"
                                    onChange={onChangePicture}
                                    placeholder="Update Your Address"
                                    className="input input-bordered w-full pt-[5px] bg-secondary text-white" />
                                <label className="label">
                                    <span className="label-text-alt text-red-500">{errors.image?.type === 'required' && `${errors?.image?.message}`}</span>
                                </label>
                            </div>
                            <div className="previewProfilePic">
                                <img className="playerProfilePic_home_tile max-w-[100%] mx-auto max-h-[300px] rounded-3xl" src={imgData ? imgData : "https://virtualpaintbrush.com/vpport/wp-content/uploads/2019/07/M-1984.jpg"} alt='' />
                            </div>
                        </div>
                        <div className='md:w-[70%] mt-12 md:mt-0  md:ml-12'>
                            <div className='md:flex gap-7'>
                                <div className='w-full'>
                                    <label className="label-text text-lg">Book Name</label>
                                    <input type="text" {...register("book_title",
                                        {
                                            required: 'required*',
                                        }
                                    )} placeholder="Type here" className="input-bordered rounded-[4px] border-[1px] border-[#DBDBDB] p-[7px] placeholder:text-[14px] bg-white w-full mt-2" />
                                    {errors?.book_title && <p><small className='pl-1 text-red-600'>{errors?.book_title?.message}</small></p>}
                                </div>
                                <div className='w-full mt-4 md:mt-0'>
                                    <label className="label-text text-lg">Book Categories</label>

                                    <input type="text" {...register("book_category",
                                        {
                                            required: 'required*',
                                        }
                                    )} placeholder="Type here" className="input-bordered rounded-[4px] border-[1px] border-[#DBDBDB] p-[7px] placeholder:text-[14px] bg-white w-full mt-2" />
                                    {errors?.book_category && <p><small className='pl-1 text-red-600'>{errors?.book_category?.message}</small></p>}
                                </div>

                            </div>


                            <div className='md:flex gap-7 mt-4'>
                                <div className='w-full'>
                                    <label className="label-text text-lg">Author Name</label>
                                    <input type="text" {...register("author",
                                        {
                                            required: 'required*',
                                        }
                                    )} placeholder="Type here" className="input-bordered rounded-[4px] border-[1px] border-[#DBDBDB] p-[7px] placeholder:text-[14px] bg-white w-full mt-2" />
                                    {errors?.author && <p><small className='pl-1 text-red-600'>{errors?.author?.message}</small></p>}
                                </div>
                                <div className='w-full mt-4 md:mt-0'>
                                    <label className="label-text text-lg">Publisher Name</label>
                                    <input type="text" {...register("publisher",
                                        {
                                            required: 'required*',
                                        }
                                    )} placeholder="Type here" className="input-bordered rounded-[4px] border-[1px] border-[#DBDBDB] p-[7px] placeholder:text-[14px] bg-white w-full mt-2" />
                                    {errors?.publisher && <p><small className='pl-1 text-red-600'>{errors?.publisher?.message}</small></p>}
                                </div>
                            </div >

                            <div className='md:flex gap-7 mt-4' >
                                <div className='w-full'>
                                    <label className="label-text text-lg">Quantity</label>
                                    <input type="number" {...register("book_qnt", {
                                        required: 'required*',
                                    })} placeholder="Type here"
                                        min={1}
                                        className="input-bordered rounded-[4px] border-[1px] border-[#DBDBDB] p-[7px] placeholder:text-[14px] bg-white w-full mt-2" />
                                    {errors?.book_qnt && <p><small className='pl-1 text-red-600'>{errors?.book_qnt?.message}</small></p>}
                                </div>
                                <div className='w-full'>
                                    <label className="label-text text-lg">Edition</label>
                                    <input type="text" {...register("book_edition", {
                                        required: 'required*',
                                    })} placeholder="Type here"
                                        min={1} className="input-bordered rounded-[4px] border-[1px] border-[#DBDBDB] p-[7px] placeholder:text-[14px] bg-white w-full mt-2" />
                                    {errors?.book_edition && <p><small className='pl-1 text-red-600'>{errors?.book_edition?.message}</small></p>}
                                </div>
                            </div >
                            < div className='md:flex gap-7 mt-4' >
                                <div className='w-full'>
                                    <label className="label-text text-lg">Language</label>
                                    <input type="text" {...register("translator", {
                                        required: 'required*',
                                    })} placeholder="Type here" className="input-bordered rounded-[4px] border-[1px] border-[#DBDBDB] p-[7px] placeholder:text-[14px] bg-white w-full mt-2" />
                                    {errors?.translator && <p><small className='pl-1 text-red-600'>{errors?.translator?.message}</small></p>}
                                </div>
                                <div className='w-full mt-4  md:mt-0'>
                                    <label className="label-text text-lg">Country</label>
                                    <input type="text" {...register("country", {
                                        required: 'required*',
                                    })} placeholder="Type here" className="input-bordered rounded-[4px] border-[1px] border-[#DBDBDB] p-[7px] placeholder:text-[14px] bg-white w-full mt-2" />
                                    {errors?.book_pages && <p><small className='pl-1 text-red-600'>{errors?.country?.message}</small></p>}
                                </div>
                            </div >
                            {/* row-5 */}
                            < div className='mt-4' >
                                <label className="label-text text-lg">Short Details</label>
                                <input type="text" {...register("book_description", {
                                    required: 'required*',
                                })} placeholder="Type here" className="input input-bordered bg-white w-full mt-2" />
                                {errors?.book_description && <p><small className='pl-1 text-red-600'>{errors?.book_description?.message}</small></p>}
                            </div >
                        </div>


                    </div>
                    <input type="submit" className='mt-4 btn btn-primary w-1/2 text-white ml-[350px]' value='Request for Book' />


                </form >
            </div >
        </div >
    );
};

export default RequestBook;