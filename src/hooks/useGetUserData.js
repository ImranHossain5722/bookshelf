import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const useGetUserData = () => {
    const [user] = useAuthState(auth);
    const [getUser, setGetUser] = useState([]);
    const [userRole, setUserRole] = useState('');


    useEffect(() => {
        const userUid = user?.uid;
        const options = {
            method: 'GET',
            url: `https://book-shelf-webapp.herokuapp.com/get-user?uid=${userUid}`
        };
        axios.request(options).then((response) => {
            setGetUser(response.data);
        })
    }, [user?.uid, getUser])

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
    }, [getUser])




    return { getUser, userRole, setUserRole };
};

export default useGetUserData;