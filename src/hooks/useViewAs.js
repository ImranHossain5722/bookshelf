import useGetUserData from './useGetUserData';

const useViewAs = () => {
    const { setUserRole } = useGetUserData();


    const viewAsUser = () => {
        setUserRole('user');
    }

    const viewAsAuthor = () => {
        setUserRole('author');
    }

    const viewAsPublisher = () => {
        setUserRole('publisher');
    }

    return { viewAsUser, viewAsAuthor, viewAsPublisher };
};

export default useViewAs;