import { useForm } from 'react-hook-form';
// import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { signOut } from 'firebase/auth';

const AddCategory = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    // const [user] = useAuthState(auth);

    const onSubmit = data => {
        fetch(``, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (res.status === 403) {
                    signOut(auth);
                    toast.error('Unauthorized');
                }
                return res.json()
            })
            .then(data => {
                toast.success(`Review Added Successfully`);
                reset();
            })

        reset();
    }

    return (
        <div className='flex justify-center items-center min-h-[70vh]'>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className='text-center font-bold text-3xl mb-3'>Add Category</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex'>
                            <div className="form-control w-full max-w-sm">
                                <label className="label">
                                    <span className="label-text text-lg">Category Name</span>
                                </label>
                                <input
                                    {...register("category", {
                                        required: {
                                            value: true,
                                            message: "Category Name is Required"
                                        }
                                    })}
                                    type="text"
                                    placeholder="Enter Your Category Name"
                                    className="input input-bordered w-full max-w-xs bg-secondary text-white" />
                                <label className="label">
                                    <span className="label-text-alt text-red-500">{errors.category?.type === 'required' && `${errors?.category?.message}`}</span>
                                </label>
                            </div>
                            <div className="form-control w-full max-w-sm ml-3">
                                <label className="label">
                                    <span className="label-text  text-lg">Icon</span>
                                </label>
                                <input
                                    {...register("icon", {
                                        required: {
                                            value: true,
                                            message: "Icon Link is Required"
                                        }

                                    })}
                                    type="text"
                                    placeholder="Enter icon Link"
                                    className="input input-bordered w-full max-w-xs bg-secondary text-white" />
                                <label className="label">
                                    <span className="label-text-alt text-red-500">{errors.icon?.type === 'required' && `${errors?.icon?.message}`}</span>
                                </label>
                            </div>
                        </div>

                        <input type="submit" className='btn btn-primary text-white w-full' value='Add Category' />
                    </form>

                </div>



            </div>

        </div>
    );
};

export default AddCategory;