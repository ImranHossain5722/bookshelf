import { useEffect, useState } from 'react';

const useGetUserRole = (getUser) => {
    const [userRole, setUserRole] = useState('');
    useEffect(() => {
        const currentUserRole = getUser;
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

    return { userRole };
};

export default useGetUserRole;