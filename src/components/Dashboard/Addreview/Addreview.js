import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

const Addreview = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const user = useSelector((state) => state?.newUser?.user)
  const onSubmit = data => {

    const review = {
      user_id: user._id,
      review: data.review
    }
    // console.log("data is",review);
    axios.post('https://book-shelf-webapp.herokuapp.com/add-review', review)
      .then(res => console.log(res));
    reset();
  };
  return (
    <div>
      <h2 className='text-center font-semibold uppercase text-secondary text-[40px]'>Add Review </h2>
      <div className=" flex items-center justify-center pb-10">

        <progress className="progress progress-primary bg-white h-2 w-10  "></progress>
      </div>
      <div className='bg-base-100 flex justify-around'>
        <div className='mt-20'>
          <img src='https://i.ibb.co/q0r29PV/1575376469213-employee-evaluation-form.jpg' className='h-[350px] w-300px' alt="" />
        </div>
        <div className='max-w-[499px] mt-14'>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* row-1 */}
            <div className='flex justify-center gap-7'>
              <div>
                <label className="font-semibold pl-1">Name</label>
                <input type="text" value={user?.user_name} disabled={true} className="input input-bordered bg-white w-full max-w-xs mt-2" />
              </div>
              <div>
                <label className="font-semibold pl-1">Email</label>
                <input type="text" value={user?.user_email} disabled={true} className="input input-bordered bg-white w-full max-w-xs mt-2" />
              </div>
            </div>
            {/* row-2 */}
            <div className='mt-4'>
              <label className="font-semibold pl-1">Add a Review</label>
              <textarea name="" id="textarea" cols="30" rows="40" {...register("review", {
                required: 'required*',
              })} placeholder="Write the words of your heart" className="input input-bordered bg-white w-full mt-2 h-[150px]" />
              {errors?.review && <p><small className='pl-1 text-red-600'>{errors?.review?.message}</small></p>}

            </div>

            <input type="submit" className='mt-4 btn btn-primary text-white' />
          </form >
        </div >
      </div >
    </div>
  )
}

export default Addreview