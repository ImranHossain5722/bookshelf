import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../../firebase.init';
import Select from 'react-select'
import { toast } from 'react-toastify';


const AddProduct = () => {
  const [user] = useAuthState(auth);
  const [userRole, setUserRole] = useState('');
  const [getUser, setGetUser] = useState([]);
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  // console.log(getUser, userRole);



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


  useEffect(() => {
    const userUid = { uid: user?.uid };
    const options = {
      method: 'GET',
      url: 'https://book-shelf-webapp.herokuapp.com/get-user',
      params: userUid
    };
    axios.request(options).then(function (response) {
      setGetUser(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, [user?.uid])


  // // get current user role form database 


  useEffect(() => {
    const currentUserRole = getUser[0]?.user_role;

    if (currentUserRole === 'author') {
      setUserRole('author');
    }
    else if (currentUserRole === 'publisher') {
      setUserRole('publisher');
    }
    else if (currentUserRole === 'user') {
      setUserRole('user');
    }
    else if (currentUserRole === 'admin') {
      setUserRole('admin');
    }
  }, [getUser]);

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

  // const cat = ['ffksfd','ksdjfsdf'];
  // const cat2 = [
  //   { cat_id:'ffksfd'},
  //   { cat_id:'ffksfd'},
  //   { cat_id:'ffksfd'}  ]


  // const [imgbbUrl, setImgbbUrl] = useState('');
  const [bookCat, setBookCat] = useState([]);
  console.log(bookCat);
  const getChoosenCategory = (choice) => {
    setBookCat(Array.isArray(choice) ? choice.map(x => (
      { cat_id: x.value }
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

  const onSubmit = data => {

    const imgbbKey = '5e72e46e329464d233a1bc1128fc1a76';
    const image = data?.image[0];
    const formData = new FormData();
    formData.append('image', image);

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
            book_publisher: userRole === 'publisher' ? getUser[0].uid : bookPub,
            book_author: userRole === 'author' ? getUser[0].uid : bookAut,
            book_price: data?.book_price,
            book_pages: data?.book_pages,
            book_qnt: data?.book_qnt,
            discount: 0,
            category: bookCat,
            book_cover_photo_url: imgbbUrl,
            book_language: data?.translator,
            book_country: data?.country
          }
          const postAuthorData = () => {
            console.log('before post:', productInfoData);
            axios.post('https://book-shelf-webapp.herokuapp.com/add-book', productInfoData).then(data => {
              toast.success('Book Added Successfully');
              console.log('Post data:', data)
            })
          }
          postAuthorData();
        }
      })

    reset();
  };

  return (
    <div className=''>
      <h2 className='text-center font-semibold uppercase text-secondary text-[40px]'> Add Product</h2>
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
                  <span className="label-text text-lg">Upload Image</span>
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
                  <label className="label-text text-lg">Product Name</label>
                  <input type="text" {...register("book_title",
                    {
                      required: 'required*',
                    }
                  )} placeholder="Type here" className="input-bordered rounded-[4px] border-[1px] border-[#DBDBDB] p-[7px] placeholder:text-[14px] bg-white w-full mt-2" />
                  {errors?.book_title && <p><small className='pl-1 text-red-600'>{errors?.book_title?.message}</small></p>}
                </div>
                <div className='w-full mt-4 md:mt-0'>
                  <label className="label-text text-lg">Select Categories</label>

                  <Select isMulti onChange={(choice) => getChoosenCategory(choice)} name='categoryName' className="mt-2 rounded-xl" options={catOption} />
                </div>

              </div>
              {/* row-2 */}
              {/* row-3 */}
              <div className='md:flex gap-7 mt-4'>
                <div className='w-full'>
                  <label className="label-text text-lg">Author Name</label>
                  {userRole === 'author' ?
                    <input type="text" disabled defaultValue={getUser[0]?.user_name} className="input-bordered rounded-[4px] text-gray-400 border-[1px] border-[#DBDBDB] p-[7px] placeholder:text-[14px] bg-grey-600 w-full mt-2" />
                    :
                    <Select onChange={(choice) => getChoosenAuthor(choice)} className="mt-2 rounded-xl" options={authorOptions} />
                  }

                </div>
                <div className='w-full mt-4 md:mt-0'>
                  <label className="label-text text-lg">Publisher Name</label>
                  {userRole === 'publisher' ?
                    <input type="text" disabled defaultValue={getUser[0]?.user_name} className="input-bordered rounded-[4px] text-gray-400 border-[1px] border-[#DBDBDB] p-[7px] placeholder:text-[14px] bg-grey-600 w-full mt-2" />
                    :
                    <Select onChange={(choice) => getChoosenPublisher(choice)} className="mt-2 rounded-xl" options={publisherOptions} />
                  }
                </div>
              </div >
              {/* row-4 */}
              <div className='md:flex gap-7 mt-4' >
                <div className='w-full'>
                  <label className="label-text text-lg">Price</label>
                  <input type="number" {...register("book_price", {
                    required: 'required*',
                  })} placeholder="Type here"
                    min={1}
                    className="input-bordered rounded-[4px] border-[1px] border-[#DBDBDB] p-[7px] placeholder:text-[14px] bg-white w-full mt-2" />
                  {errors?.book_price && <p><small className='pl-1 text-red-600'>{errors?.book_price?.message}</small></p>}
                </div>
                <div className='w-full'>
                  <label className="label-text text-lg">Pages</label>
                  <input type="number" {...register("book_pages", {
                    required: 'required*',
                  })} placeholder="Type here"
                    min={1} className="input-bordered rounded-[4px] border-[1px] border-[#DBDBDB] p-[7px] placeholder:text-[14px] bg-white w-full mt-2" />
                  {errors?.book_pages && <p><small className='pl-1 text-red-600'>{errors?.book_pages?.message}</small></p>}
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
            {/* Image Container  */}

          </div>
          <input type="submit" className='mt-4 btn btn-primary w-1/2 text-white ml-[350px]' value='Add Book' />


        </form >
      </div >
    </div >
  )
}

export default AddProduct