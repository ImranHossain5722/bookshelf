import React from 'react';
import { useParams } from 'react-router-dom';

const AddProductReview = () => {
    const { bookid } = useParams();
    return (
        <div>
            <h2>order review page</h2>
        </div>
    );
};


export default AddProductReview;