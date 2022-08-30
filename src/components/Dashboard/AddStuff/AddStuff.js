import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import Select from 'react-select'
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const AddStuff = () => {
    const { handleSubmit } = useForm();
    const [user] = useAuthState(auth);

    const [stuffData, setStuffData] = useState(user);
    // console.log(user);

    const [userByEmail, setUserByEmail] = useState([]);
    useEffect(() => {
        const options = { method: 'GET' };

        fetch('https://book-shelf-webapp.herokuapp.com/get-all-users-email', options)
            .then(response => response.json())
            .then(data => setUserByEmail(data))
            .catch(err => console.error(err));

    }, [])

    let userByEmailOption = [];

    userByEmail.forEach(cat => {
        let dropDown = { label: cat['user_email'], value: cat['_id'] };
        userByEmailOption.push(dropDown);
    });
    const [userEmail, setUserEmail] = useState({});

    const getUserDatas = (choice) => {
        const email = choice?.label;
        setUserEmail(email);

    }
    const [uData, setUData] = useState();

    useEffect(() => {
        const options = {
            method: 'GET',
            url: `https://book-shelf-webapp.herokuapp.com/get-user-by-email?email=${userEmail}`
        };
        axios.request(options).then((response) => {
            setUData(response.data);
        })

        if (uData) {
            setStuffData(uData[0]);
        }
    }, [userEmail, uData])

    const roleOption = [
        { value: 'admin', label: 'Admin' },
        { value: 'author', label: 'Author' },
        { value: 'delivery', label: 'Delivery' },
        { value: 'publisher', label: 'Publisher' },
        { value: 'user', label: 'User' },
    ]
    const [selRole, setSelRole] = useState({});

    const getChoosenRole = (choice) => {
        const data = choice?.value;
        setSelRole(data);

    }
    const onSubmit = () => {
        const userId = stuffData?._id;


        const updatedRole = {
            "user_role": selRole
        };
        axios.patch(`https://book-shelf-webapp.herokuapp.com/update-user-role?id=${userId}`, updatedRole)
            .then(data => {
                toast.success(`User Role Updated to  ${selRole}`);
            })
    }

    return (
        <div className="pt-12 pb-12 w-1/2 mx-auto">
            <h2 className='text-center font-bold text-3xl mb-3'>Add A New Stuff</h2>
            <div className=" flex items-center justify-center pb-10">
        <div className="bg-primary h-1 w-10 rounded-lg "></div>
      </div>
            <div className='w-full mb-6'>
                <label className="label-text text-lg ">Search User By Email</label>
                <Select onChange={(choice) => getUserDatas(choice)} className="mt-2 rounded-xl" options={userByEmailOption} />
            </div>
            <form className='mb-2' onSubmit={handleSubmit(onSubmit)}>
                <Select onChange={(choice) => getChoosenRole(choice)} name='role' className="rounded-xl" options={roleOption} />
                <input type="submit" className='btn btn-primary text-white w-full mt-4' value={typeof selRole == 'string' ? `Add User as ${selRole}` : `Add User as`} />
            </form>

            <div className='md:flex mt-8'>
                <div className='md:w-[30%]'>

                    <div className="previewProfilePic">
                        <label className="label">
                            <span className="label-text text-lg font-bold">Photo </span>
                        </label>
                        <img className="playerProfilePic_home_tile max-w-[100%] mx-auto max-h-[300px] rounded-3xl" src={stuffData?.user_photo_url} alt='' />
                    </div>
                </div>
                <div className=' md:w-[70%] mt-12 md:mt-0  md:ml-12' >
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-lg font-bold">Stuff Name </span>
                        </label>
                        <p className='p-3 text-gray-700 bg-[#EDE8E8] rounded-md '>{stuffData?.user_name}</p>
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-lg font-bold">Stuff Email </span>
                        </label>
                        <p className='p-3 text-gray-700 bg-[#EDE8E8] rounded-md '>{stuffData?.user_email}</p>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-lg font-bold">Stuff Phone </span>
                        </label>
                        <p className='p-3 text-gray-700 bg-[#EDE8E8] rounded-md '>{stuffData?.user_phone}</p>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-lg font-bold">Stuff Address </span>
                        </label>
                        <p className='p-3 text-gray-700 bg-[#EDE8E8] rounded-md '>{stuffData?.user_address}</p>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-lg font-bold">Stuff Role </span>
                        </label>
                        <p className='p-3 text-gray-700 bg-[#EDE8E8] rounded-md '>{stuffData?.user_role}</p>
                    </div>


                </div>
            </div>


        </div>
    );
};

export default AddStuff;