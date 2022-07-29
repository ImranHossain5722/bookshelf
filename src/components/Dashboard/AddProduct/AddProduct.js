import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";


const AddProduct = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data);
    axios.post('https://bookshelf-web.herokuapp.com/add-book', {
      book_title: data.book_title,
      book_description: data.book_description,
      book_publisher: data.book_publisher,
      book_author: data.book_author,
      book_price: data.book_price,
      book_qnt: data.book_qnt,
      book_category: data.book_category,
      cover_photo_url: data.cover_photo_url,
    })
      .then(res => console.log(res));
    reset();
  };

  // console.log(errors);

  return (
    <div className='bg-base-100 flex justify-around'>
      <div className='mt-20'>
        <img src={'https://via.placeholder.com/300/09f/fff.png'} className='h-[300px] w-300px' alt="" />
      </div>
      <div className='max-w-[499px] mt-14'>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* row-1 */}
          <div className='flex justify-center gap-7'>
            <div>
              <label class="font-semibold pl-1">Product Name</label>
              <input type="text" {...register("book_title", {
                required: 'required*',
              })} placeholder="Type here" class="input input-bordered bg-white w-full max-w-xs mt-2" />
              {errors?.book_title && <p><small className='pl-1 text-red-600'>{errors?.book_title?.message}</small></p>}
            </div>
            <div>
              <label class="font-semibold pl-1">Select Categories</label>
              <input type="text" {...register("book_category", {
                required: 'required*',
              })} placeholder="Type here" class="input input-bordered bg-white w-full max-w-xs mt-2" />
              {errors?.book_category && <p><small className='pl-1 text-red-600'>{errors?.book_category?.message}</small></p>}
            </div>
          </div>
          {/* row-2 */}
          <div className='mt-4'>
            <label class="font-semibold pl-1">Slug</label>
            <input type="text" {...register("cover_photo_url", {
              required: 'required*',
            })} placeholder="Photo url 300*300 px" class="input input-bordered bg-white w-full mt-2" />
            {errors?.cover_photo_url && <p><small className='pl-1 text-red-600'>{errors?.cover_photo_url?.message}</small></p>}
          </div>
          {/* row-3 */}
          <div className='flex gap-7 mt-4'>
            <div>
              <label class="font-semibold pl-1">Author Name</label>
              <input type="text" {...register("book_author", {
                required: 'required*',
              })} placeholder="Type here" class="input input-bordered bg-white w-full max-w-xs mt-2" />
              {errors?.book_author && <p><small className='pl-1 text-red-600'>{errors?.book_author?.message}</small></p>}
            </div>
            <div>
              <label class="font-semibold pl-1">Publisher Name</label>
              <input type="text" {...register("book_publisher", {
                required: 'required*',
              })} placeholder="Type here" class="input input-bordered bg-white w-full max-w-xs mt-2" />
              {errors?.book_publisher && <p><small className='pl-1 text-red-600'>{errors?.book_publisher?.message}</small></p>}
            </div>
          </div >
          {/* row-4 */}
          < div className='flex gap-7 mt-4' >
            <div>
              <label class="font-semibold pl-1">Price</label>
              <input type="number" {...register("book_price", {
                required: 'required*',
              })} placeholder="Type here" class="input input-bordered bg-white w-full max-w-xs mt-2" />
              {errors?.book_price && <p><small className='pl-1 text-red-600'>{errors?.book_price?.message}</small></p>}
            </div>
            <div>
              <label class="font-semibold pl-1">Quantity</label>
              <input type="number" {...register("book_qnt", {
                required: 'required*',
              })} placeholder="Type here" class="input input-bordered bg-white w-full max-w-xs mt-2" />
              {errors?.book_qnt && <p><small className='pl-1 text-red-600'>{errors?.book_qnt?.message}</small></p>}
            </div>
          </div >
          {/* row-5 */}
          < div className='mt-4' >
            <label class="font-semibold pl-1">Short Details</label>
            <input type="text" {...register("book_description", {
              required: 'required*',
            })} placeholder="Type here" class="input input-bordered bg-white w-full mt-2" />
            {errors?.book_description && <p><small className='pl-1 text-red-600'>{errors?.book_description?.message}</small></p>}
          </div >
          <input type="submit" className='mt-4 btn btn-primary' />
        </form >
      </div >
    </div >
  )
}

export default AddProduct