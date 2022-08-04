import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

const Addreview = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const user = useSelector((state) =>state?.newUser?.user)
  const onSubmit = data => {
    console.log(data);
    // axios.post('https://book-shelf-webapp.herokuapp.com/add-book', )
    //   .then(res => console.log(res));
    reset();
  };
  return (
    <div>
      <p className="text-center text-4xl  font-bold text-[#00124E] mt-4">Add a Review</p>
       <div className='bg-base-100 flex justify-around'>
    <div className='mt-20'>
      <img src='https://i.ibb.co/q0r29PV/1575376469213-employee-evaluation-form.jpg' className='h-[350px] w-300px' alt="" />
    </div>
    <div className='max-w-[499px] mt-14'>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* row-1 */}
        <div className='flex justify-center gap-7'>
          <div>
            <label class="font-semibold pl-1">Name</label>
            <input type="text" {...register("book_title", {
              required: 'required*',
            })} value={user?.user_name} disabled={true} class="input input-bordered bg-white w-full max-w-xs mt-2" />
            {errors?.book_title && <p><small className='pl-1 text-red-600'>{errors?.book_title?.message}</small></p>}
          </div> 
          <div>
            <label class="font-semibold pl-1">Email</label>
            <input type="text" {...register("book_category",)} value={user?.user_email} disabled={true} class="input input-bordered bg-white w-full max-w-xs mt-2" />
          </div>
        </div>
        {/* row-2 */}
        <div className='mt-4'>
          <label class="font-semibold pl-1">Add a Review</label>
          <textarea name="" id="" cols="30" rows="40" {...register("cover_photo_url", {
            required: 'required*',
          })} placeholder="Write the words of your heart" class="input input-bordered bg-white w-full mt-2 h-[150px]" />
          {errors?.cover_photo_url && <p><small className='pl-1 text-red-600'>{errors?.cover_photo_url?.message}</small></p>}
          
        </div>
      
        <input type="submit" className='mt-4 btn btn-primary' />
      </form >
    </div >
  </div >
    </div>
  )
}

export default Addreview